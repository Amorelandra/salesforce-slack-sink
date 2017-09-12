let force = require('nforce');
const EventEmitter = require('events');

const username = process.env.SALESFORCE_USERNAME;
const password = process.env.SALESFORCE_PASSWORD;
const clientId = process.env.SALESFORCE_CLIENT_ID;
const clientSecret = process.env.SALESFORCE_CLIENT_SECRET;
const securityToken = process.env.SALESFORCE_SECURITY_TOKEN;

if (!username) { missing("SALESFORCE_USERNAME"); }
if (!password) { missing("SALESFORCE_PASSWORD"); }
if (!clientId) { missing("SALESFORCE_CLIENT_ID"); }
if (!clientSecret) { missing("SALESFORCE_CLIENT_SECRET"); }
if (!securityToken) { missing("SALESFORCE_SECURITY_TOKEN"); }

let org = force.createConnection({
    clientId,
    clientSecret,
    environment: (process.env.NODE_ENV == "production" ? "production" : "sandbox"),
    redirectUri: "http://localhost:3000/oauth/_callback",
    mode: "single",
    version: "40.0",
    autoRefresh: true
});

let stream = new EventEmitter();

console.log("*** Attempting Salesforce authentication...");
org.authenticate({ username, password, securityToken }, (err, oauth) => {
    if (err) {
        console.error("*** Salesforce authentication error:");
        console.error(err);
        process.exit(1);
    } else {
        console.log("*** Salesforce authentication successful.");
        console.log("- Instance URL: %s", org.oauth.instance_url);
        console.log("- OAuth Token: %s", org.oauth.access_token);
        org.authenticated = true;
    }
    let client = org.createStreamClient();
    let str = client.subscribe({ 
        topic: "/event/Tweet__e", 
        isPlatformEvent: true, 
        oauth 
    });

    str.on('connect', function(){
        console.log('*** Subscribed to Tweet events...');
    });

    str.on('error', function(error) {
        console.log('*** Tweet stream error: ' + error);
    });

    str.on('data', function(data) {
        let tweet = data.payload;
        console.log("Received tweet from %s", tweet.username__c);
        stream.emit('data', data);
    });
});

module.exports = { org, stream };
