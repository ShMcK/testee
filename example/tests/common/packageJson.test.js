const expect = require('expect')
const { join } = require('path')
const exists = require('node-file-exists').default
const { readFileSync } = require('fs')

const { ROOT_DIR } = process.env

function isValidJsonString(str) {
    try {
        JSON.parse(str)
    } catch (e) {
        return false
    }
    return true
}

describe('package.json', () => {

  const pathToPackageJson = join(ROOT_DIR, 'package.json')

  it('should be in the root', () => {
    expect(exists(pathToPackageJson)).toBe(true)
  })

  if (exists(pathToPackageJson)) {

    const keys = ['name', 'description', 'version']

    const packageJson = readFileSync(pathToPackageJson, 'utf8')

    const isValidJson = isValidJsonString(packageJson)

    // is a valid json string
    it('should be a valid JSON object', () => {
      expect(isValidJson).toBe(true)
    })

    // test package.json keys
    if (isValidJson) {

      const packageJsonObject = JSON.parse(packageJson)

      keys.forEach((key) => {
        it(`should include field of ${key}`, () => {
          expect(Object.keys(packageJsonObject).includes(key)).toBe(true)
        })
      })
    }
  }
  
})