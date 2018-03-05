require('dotenv').config()
const childProcess = require('child_process')
const assert = require('assert')

assert(process.env.DB_NAME, 'DB_NAME is not set')
assert(process.env.DB_HOST, 'DB_HOST is not set')

childProcess.execSync(
  `psql -d ${process.env.DB_NAME} -h ${process.env.DB_HOST} < db/schema.sql`,
  {stdio: [0, 1, 2]}
)
