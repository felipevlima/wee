#!/usr/bin/env node

const meow = require('meow');
const wee = require('./index')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  while(true) await wee();
};

const cliInterface = meow({});

cliMode(cliInterface);