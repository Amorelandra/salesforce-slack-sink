global.exit = function exit(code, msg) { console.log(`ERROR: ${msg}`); process.exit(code || 1); }
global.missing = function missing(variable) { exit(1, `${variable} environment variable required.`); }

let salesforce = require('./app/salesforce');
let slack = require('./app/slack');

console.log('*** Subscribing to Salesforce platform events...');

let subscription = salesforce.subscribe('/event/Tweet__e', (event) => {
    let tweet = event.payload;
    console.log('Tweet received from', tweet.username__c);
    slack.webhook({
        channel: "#general", // irrelevant; actually defined in webhook config
        username: "Tweet Stream",
        text: `<${tweet.tweet_url__c}|@${tweet.username__c}>: ${tweet.body__c}`
      }, function(err, response) {
        if(err) { 
            console.log("Webhook error");
            console.error(err)
            process.exit(1);
        }
    });
}); 
