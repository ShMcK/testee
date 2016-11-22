const expect = require('expect')
const { join } = require('path')
const exists = require('node-file-exists').default

const { ROOT_DIR } = process.env

describe('base files', () => {

  it('should have an index.html in the root', () => {
    const pathToIndexHtml = join(ROOT_DIR, 'index.html')
    expect(exists(pathToIndexHtml)).toBe(true)
  })
  
})