const expect = require('expect')
const { join } = require('path')
const exists = require('node-file-exists').default

const { ROOT_DIR } = process.env

describe('index.html', () => {

  it('should be in the root', () => {
    const pathToIndexHtml = join(ROOT_DIR, 'index.html')
    expect(exists(pathToIndexHtml)).toBe(true)
  })
  
})