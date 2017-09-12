let slack = require('slack-node');

if(!process.env.SLACK_WEBHOOK_URL) { return missing('SLACK_WEBHOOK_URL'); }
let client = new slack();
client.setWebhook(process.env.SLACK_WEBHOOK_URL);

module.exports = client;