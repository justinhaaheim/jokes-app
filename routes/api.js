import { Router } from 'express'
import fetch from 'node-fetch'
import { fetchJokesAndSeed } from '../actions'

const router = Router()
const jokeAPI = 'https://icanhazdadjoke.com'

const getJoke = () => fetch(jokeAPI, {
  headers: {
    Accept: 'application/json',
  },
}).then(fetchResponse => fetchResponse.json())

const getJokes = (n) => {
  const overshootFactor = 3
  const jokes = []
  for (let i = 0; i < n * overshootFactor; i++) {
    jokes.push(getJoke())
  }

  return Promise.all(jokes)
    .then(async (jokes) => {
      const result = new Map()
      jokes.forEach((e) => {
        result.set(e.id, e)
      })
      while (result.size < n) {
        const newJoke = await getJoke()
        result.set(newJoke.id, newJoke)
      }
      return Array.from(result.values()).slice(0, n)
    })
}

router.get('/test', (req, res, next) => {
  fetchJokesAndSeed(4)
    .then(jokes => res.json(jokes))
    .catch(next)
})

router.get('/jokes', (req, res, next) => {
  const { sortBy } = req.params
  const count = req.params.count || 5

  // if (sortBy) {
  //
  // }
  getJokes(20)
    .then(jokes => res.json(jokes))
    .catch(next)
})

export default router
