import db from '../db'

export default function getJokeById(api_id) {
  return db.oneOrNone('SELECT * FROM jokes WHERE api_id = $1', [api_id])
}
