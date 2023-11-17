#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';

const program = new Command();

console.log(figlet.textSync('Wiki Upload'));

program.version('1.0.0')
  .description('A CLI to convert and upload documents to a Wiki')
  .parse(process.argv);

const options = program.opts();
