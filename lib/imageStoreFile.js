const fs = require('fs')
const path = require('path')
const util = require('util')

const asyncWriteFile = util.promisify(fs.writeFile)

module.exports.save = async (name, data, callback) => {
  const fileName = `//pizza-luvrs-kabinad.s3-eu-west-1.amazonaws.com/pizzas/${name}.png`

  try {
    await asyncWriteFile(path.join(__dirname, '/..', fileName), data, 'base64')
  } catch (err) {
    console.error(`Error writing image file. Error: ${err}`)
  }

  return fileName
}
