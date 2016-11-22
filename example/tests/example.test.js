const expect = require('expect')
const { join } = require('path')

const { ROOT_DIR } = process.env

const life = require(join(ROOT_DIR, 'example.js'))

describe('some test', () => {

  it('should run', () => {
    expect(life).toBe(42)
  })
})