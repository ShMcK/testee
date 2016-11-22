const expect = require('expect')
const { join } = require('path')
const exists = require('node-file-exists').default
const { readFileSync } = require('fs')

const { ROOT_DIR } = process.env

describe('readme', () => {

  const pathToReadme = join(ROOT_DIR, 'README.md')

  const readmeExists = exists(pathToReadme)

  it('should be in the root', () => {
    expect(readmeExists).toBe(true)
  })

  if (readmeExists) {
    const readme = readFileSync(pathToReadme, 'utf8').split('\n')

    it('should have a title', () => {
      expect(readme[0]).toMatch(/\#\s?[A-Za-z0-9 ]+/)
    })

    it('should be sufficiently long', () => {
      expect(readme.length > 5).toBe(true)
    })
  }
  
})