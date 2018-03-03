require('dotenv').config()
const childProcess = require('child_process')
const assert = require('assert')

assert(process.env.DB_NAME, 'DB_NAME is not set')

childProcess.execSync(`createdb ${process.env.DB_NAME}`, {
  stdio: [0, 1, 2]
})
