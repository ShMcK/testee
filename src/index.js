#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const run = require('./run-tests')
const log = console.log

program
  .arguments('<file>')
  .option('-p, --project <path/to/project>', 'The path to project directory to test')
  .option('-t --tests <path/to/tests>', 'The path to the tests to run')
  .option('-r --repo <path/to/repo>', 'The path to the student repo')
  .option('-o --output <path/to/output>', 'The path to the output file')
  .parse(process.argv)

const output = program.output || './output'

if (!program.project) {
  log('Testing requires a target student directory.\n\n',
  'REPO\n',
  chalk.yellow('testee -t path/to/tests -r github.com/path/to/repo\n\n'),
  'LOCAL\n',
  chalk.yellow('testee -t path/to/tests -p path/to/project/to/test')
  )
}

// run locally
if (program.project && program.tests) {
  log(`Testing ${program.project} with tests in ${program.tests}...`)

  // run
  run({
    projectDir: program.project,
    testDir: program.tests
  })
}

// run on repo
if (program.repo && program.tests) {
  log(`Testing ${program.repo} with tests in ${program.tests}...`)
}
