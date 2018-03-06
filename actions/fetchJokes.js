import fetch from 'node-fetch'

const jokeAPI = 'https://icanhazdadjoke.com'

function fetchJoke() {
  return fetch(jokeAPI, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response not OK')
      }
      return res
    })
    .then(fetchResponse => fetchResponse.json())
}

export default function fetchJokes(n) {
  const overshootFactor = 2
  const jokes = []
  for (let i = 0; i < n * overshootFactor; i++) {
    jokes.push(fetchJoke())
  }

  return Promise.all(jokes)
    .then(async (jokes) => {
      const result = new Map()
      jokes.forEach((e) => {
        result.set(e.id, e)
      })
      while (result.size < n) {
        try {
          const newJoke = await fetchJoke()
          result.set(newJoke.id, newJoke)
        } catch(error) {
          console.error(error)
        }

      }
      return Array.from(result.values()).slice(0, n)
    })
}
