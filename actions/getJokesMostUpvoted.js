import db from '../db'

export default function getJokesMostUpvoted(n) {
  return db.any('SELECT * FROM jokes ORDER BY upvotes DESC LIMIT $1', [n])
}
