import fetch from 'node-fetch'
import db from '../db'
import addJokes from './addJokes'

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

const fetchJokesSearchPage = (page) => {
  return fetch(`${jokeAPI}/search?page=${page}`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(fetchResponse => fetchResponse.json())
    .then(searchData => searchData.results)
}

const fetchPagesOfJokes = (n) => {
  const pagesRequests = []
  for (let i = 1; i <= n; i++) {
    pagesRequests.push(fetchJokesSearchPage(i))
  }
  return Promise.all(pagesRequests)
    .then(pages => [].concat(...pages))
}

export default async function fetchJokesAndSeed(n) {
  const jokes = await fetchPagesOfJokes(n)
  return addJokes(jokes)
}
