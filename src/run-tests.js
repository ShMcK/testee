const Mocha = require('mocha')
const glob = require('glob')
const { join } = require('path')

const getAllTests = (testDir) => new Promise((resolve, reject) => {
  glob(`${testDir}/**/*.test.js`, {}, (err, files) => {
    if (err) reject(err)
    else resolve(files)
  })
})

function run({ projectDir, testDir }) {

  // Mocha instance
  const mocha = new Mocha({
    ui: 'bdd',
    reporter: 'list',
    timeout: 3000,
  })

  // set absolute path directory for tests
  process.env.ROOT_DIR = join(process.cwd(), projectDir)

  // recursively get all files within directories
  getAllTests(testDir)
    .then((files) => {

      // add each test to mocha
      files.forEach((file) => {
        mocha.addFile(join(process.cwd(), file))
      })
    })
    .then(() => {
      // run mocha tests
      mocha.run((failures) => {

        process.stdout.write('running tests...')

        process.on('exit', () => {
          process.stdout.write('complete!\n`')
          if (failures.length) {
            process.stdout.write(failures)
          }
          process.exit(failures)
        })
      })
    })
    .catch((err) => {
      process.stdout.write('Something went wrong loading test files.')
      process.stdout.write(err)
    })
}

module.exports = run
