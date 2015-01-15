#!/usr/bin/env node

var Slack = require('slack-node');
var argv = require('minimist')(process.argv.slice(2));

var channelName = argv.c;
var message = argv.m;
var slackToken = process.env.SLACK_TOKEN;
var userName = argv.u;

if ( slackToken === undefined ) {
  console.log('undefined SLACK_TOKEN as Env Variable');
  process.exit(1);
}

if ( typeof(channelName) !== 'string' ){
  console.log('undefined channel argv: -c');
  process.exit(1);
}

if ( typeof(message) !== 'string' ){
  console.log('undefined message argv: -m');
  process.exit(1);
}

slack = new Slack(process.env.SLACK_TOKEN);
slack.api(
  'chat.postMessage', {text:message, channel:'#'+channelName, username:userName},
  function(){}
);
