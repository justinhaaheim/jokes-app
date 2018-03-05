import pgp from 'pg-promise'

const connect = pgp()
const db = connect({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

export default db
