const Mocha = require('mocha')
const fs = require('fs')
const { join } = require('path')

const testMatch = /\.test\.js$/

function run({ projectDir, testDir }) {

  // Mocha instance
  const mocha = new Mocha({
    ui: 'bdd',
    reporter: 'list'
  })

  // set absolute path directory for tests
  process.env.ROOT_DIR= join(process.cwd(), projectDir)

  fs.readdirSync(testDir)
    // match test files
    .filter((file) => file.match(testMatch))
    // add test files
    .forEach((file) => {
      mocha.addFile(
        join(testDir, file)
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