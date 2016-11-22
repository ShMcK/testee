const expect = require('expect')
const { join } = require('path')
const exists = require('node-file-exists').default
const { readFileSync } = require('fs')

const { ROOT_DIR } = process.env

describe('.gitignore', () => {

  const pathToGitIgnore = join(ROOT_DIR, '.gitignore')

  it('should be in the root', () => {
    expect(exists(pathToGitIgnore)).toBe(true)
  })

  const ignorePaths = [
   'node_modules'
  ]

  const ignored = readFileSync(pathToGitIgnore, 'utf8').split('\n')

  // check for ignored files in .gitignore
  ignorePaths.forEach((ignorePath) => {
    it(`should ignore ${ignorePath}`, () => {
      expect(ignored.includes(ignorePath)).toBe(true)
    })
  })
  
})