import db from '../db'

export default function addJokes(jokes) {
  // return db.tx((t) => {
  //   const queries = jokes.map((joke) => {
  //     return t.query('INSERT INTO jokes(api_id, joke) VALUES($1, $2) RETURNING *', [joke.id, joke.joke])
  //   })
  //   return t.batch(queries)
  // })
  const queries = jokes.map(joke => db.query('INSERT INTO jokes (api_id, joke) VALUES ($1, $2) RETURNING *', [
    joke.id,
    joke.joke,
  ]))
  return Promise.all(queries)
}
