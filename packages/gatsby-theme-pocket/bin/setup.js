#! /usr/bin/env node
var shell = require("shelljs");

let activeEnv = process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})
console.log('Running pocket authorization...')
const key = '88326-cf4f8f5d0591e3620ece0459';
shell.exec(`node node_modules/node-getpocket/authorise --consumerkey ${key}`)