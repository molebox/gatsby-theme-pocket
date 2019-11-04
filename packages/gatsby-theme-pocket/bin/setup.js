#! /usr/bin/env node
var shell = require("shelljs");

let activeEnv = process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})
console.log('Running pocket authorization...')
const key = process.env.POCKET_CONSUMER_KEY;
shell.exec(`node node_modules/node-getpocket/authorise --consumerkey ${key}`)