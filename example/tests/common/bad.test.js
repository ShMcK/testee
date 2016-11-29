const expect = require('expect')
const { readDirSync } = require('fs')

const filesTypesNotInRoot = [
  'svg',
  'jpeg',
  'jpg',
  'png'
]

describe('root should not have', () => {

  readDirSync(process.env.ROOT_DIR, (err, files) => {
    console.log(files)
  })

  // console.log(rootFiles)

  // filesTypesNotInRoot.forEach((fileType) => {
  //   it(fileType, () => {
  //     const regex = new RegExp(`.${fileType}$`)
  //     console.log(regex)
  //     expect(!rootFiles.filter(x => x.match(regex)).length).toBe(0)
  //   })
  // })

})