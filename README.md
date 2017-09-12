# salesforce-slack-sink
Receive tweets in Slack via Salesforce Platform Events

NOTE: This project requires a [Slack app](https://apps.slack.com/).

## Install
1. Type `git clone git@github.com:Amorelandra/salesforce-slack-sink.git`
1. Type `cd salesforce-slack-sink`
1. Type `npm install`

## Configure
You will need the following environment variables:

1. __SALESFORCE_ACCESS_TOKEN__ -- OAuth token from your Connected app
1. __SALESFORCE_INSTANCE_URL__ -- The URL of your Salesforce instance
1. __SLACK_WEBHOOK_URL__ -- The URL for your Slack app webhook

If you're deploying with Heroku, just throw these variables into an .env file in the project base directory and use `heroku local` to launch the app.

Here's a template to copy/paste (or you can rename `.exampleenv` in this project to `.env`):
```code
SALESFORCE_ACCESS_TOKEN=
SALESFORCE_INSTANCE_URL=
SLACK_WEBHOOK_URL=
```
## Run
1. Type `npm start`
