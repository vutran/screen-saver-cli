#!/usr/bin/env node

const meow = require('meow');
const screenSaver = require('screen-saver');

meow(`
  Usage
    $ screen-saver
`);

screenSaver();
