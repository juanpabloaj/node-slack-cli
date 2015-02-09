# node-slack-cli

[![npm version](https://badge.fury.io/js/node-slack-cli.svg)](http://badge.fury.io/js/node-slack-cli)

Send messages to [slack.com](https://slack.com/) from command line with nodejs.

## Install

    npm install node-slack-cli -g

## Environment variables

To send to [slack.com](https://slack.com/) you need set the SLACK TOKEN as environment variable

    export SLACK_TOKEN="slack-token"

You can get the Slack token from [https://api.slack.com/web#auth](https://api.slack.com/web#auth)

## Usage

    slack -c slackChannelName -m "message to send"

Set a username

    slack -c slackChannelName -m "message to send" -u myUsername
