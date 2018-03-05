DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS jokes;

CREATE TABLE sessions (
  sid varchar NOT NULL PRIMARY KEY,
  sess json NOT NULL,
  expire timestamp(6) NOT NULL
);

CREATE TABLE jokes (
  id SERIAL PRIMARY KEY,
  api_id TEXT UNIQUE NOT NULL,
  upvotes INTEGER DEFAULT 0,
  downvotes INTEGER DEFAULT 0
);
