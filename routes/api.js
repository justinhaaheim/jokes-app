import { Router } from 'express'
import { fetchJokes } from '../actions'

const router = Router()

const randomJokesCount = 20

router.get('/jokes', (req, res, next) => {
  // TODO:
  // If not sorted:
  // Get n random jokes from api
  // Get corresponding entries for any jokes that are already in db, including upvotes & downvotes
  // Send json
  // Insert new jokes into db
  //
  // If sorted:
  // get from database
  // send as json
  //
  // If fetch error, send json with { error: ... }
  
  const { sortBy } = req.params
  const count = req.params.count || 5

  fetchJokes(randomJokesCount)
    .then(jokes => res.json(jokes))
    .catch(next)
})

export default router
