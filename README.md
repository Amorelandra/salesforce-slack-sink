# salesforce-slack-sink
Receive tweets in Slack via Salesforce Platform Events

NOTE: This project requires a [Slack app](https://apps.slack.com/).

## Install
1. Type `git clone git@github.com:Amorelandra/salesforce-slack-sink.git`
1. Type `cd salesforce-slack-sink`
1. Type `npm install`

## Configure
You will need the following environment variables:

### Salesforce
1. __SALESFORCE_CLIENT_ID__ -- Salesforce Connected App ID
1. __SALESFORCE_CLIENT_SECRET__ -- Salesforce Connected App secret
1. __SALESFORCE_USERNAME__ -- Your Salesforce username
1. __SALESFORCE_PASSWORD__ -- Your Salesforce password
1. __SALESFORCE_SECURITY_TOKEN__ -- Your Salesforce security token

### Slack
1. __SLACK_WEBHOOK_URL__ -- The URL for your Slack app webhook

### Node.js
1. __NODE_ENV__ -- Use `production` for production, or `sandbox` for scratch orgs

If you're deploying with Heroku, just throw these variables into an .env file in the project base directory and use `heroku local` to launch the app.

Here's a template to copy/paste (or you can rename `.exampleenv` in this project to `.env`):
```code
SALESFORCE_CLIENT_ID=
SALESFORCE_CLIENT_SECRET=
SALESFORCE_USERNAME=
SALESFORCE_PASSWORD=
SALESFORCE_SECURITY_TOKEN=
SLACK_WEBHOOK_URL=
NODE_ENV=
```
## Run
1. Type `npm start`
