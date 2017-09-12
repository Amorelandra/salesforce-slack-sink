let faye = require('faye');

if(!process.env.SALESFORCE_ACCESS_TOKEN) { return missing('SALESFORCE_ACCESS_TOKEN'); }
if(!process.env.SALESFORCE_INSTANCE_URL) { return missing('SALESFORCE_INSTANCE_URL'); }

let client = new faye.Client(process.env.SALESFORCE_INSTANCE_URL + '/cometd/40.0/');

client.setHeader('Authorization', 'OAuth ' + process.env.SALESFORCE_ACCESS_TOKEN);

module.exports = client;
