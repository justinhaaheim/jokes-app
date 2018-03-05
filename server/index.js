/* eslint-disable import/first */
require('dotenv').config()
const assert = require('assert')
assert(process.env.DB_SSL === 'true' || process.env.DB_SSL === 'false')
assert(process.env.DB_NAME && process.env.DB_NAME.length > 0)

import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import logger from 'morgan'
import 'ejs'
import apiRouter from '../routes/api'

// TODO: assert presence of necessary env variables

const PORT = process.env.PORT || 5000
const ROOT_DIR = path.resolve(__dirname, '../')

const app = express()

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}, // 30 days
  })
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'))
}

app.use(express.static(path.join(ROOT_DIR, '/public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', apiRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.use((req, res) => {
  res.status(404).render('common/not_found')
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(404).render('common/error', { error: err })
})

app.listen(PORT, () => {
  // TODO: add dynamic baseURL
  console.log(`🌍 Listening on http://localhost:${PORT}...`)
})
