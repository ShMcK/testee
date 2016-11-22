const Mocha = require('mocha')
const fs = require('fs')
const path = require('path')

const testMatch = /\.test\.js$/

function run({ dir, testDir }) {

  // Mocha instance
  const mocha = new Mocha({
    ui: 'bdd',
    reporter: 'list'
  })

  // set directory for tests
  process.env.ROOT_DIR=dir

  fs.readdirSync(testDir)
    // match test files
    .filter((file) => file.match(testMatch))
    // add test files
    .forEach((file) => {
      mocha.addFile(
        path.join(testDir, file)
      )
    })

  mocha.run((failures) => {

    console.log('running tests...')

    process.on('exit', () => {
      console.log('complete')
      process.exit(failures)
    })
  })
}

module.exports = run;