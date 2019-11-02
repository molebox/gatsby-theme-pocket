#! /usr/bin/env node
var shell = require("shelljs");

let activeEnv = process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

shell.exec(`node node_modules/node-getpocket/authorise --consumerkey ${process.env.POCKET_CONSUMER_KEY}`)