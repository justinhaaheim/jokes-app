# Jokes App for Rithm School

Author: Justin Haaheim

## Getting Started

### Prerequisites

- node.js (nvm recommended)
- PostgreSQL database

### Installation & Configuration

Install npm packages:

```sh
npm install && npm install --prefix client
```

Create env file. The default values in the template will work fine.

```sh
cp .env-template .env
```

Create the database and load the schema:

```sh
npm run db:create
npm run db:schema
```

### Run in development mode

Open two terminal windows. In the first run the server:

```sh
npm run server
```

And in the second run the react/webpack frontend server:

```sh
npm run client
```

### Build and run in production

Build the react frontend:

```sh
npm run build
```

Start the server:

```sh
NODE_ENV=production npm start
```

# Work Plan

Display this all on a single page. The page will have:
- Top 5 jokes based on votes
- Bottom 5 jokes based on votes
- A list of 20 random jokes
- Thumbs up and thumbs down icons next to every joke
- A button to generate a new list of random jokes with no duplicates

Schema:
- Jokes table with id, api_id, body, upvotes, downvotes

Routes:
- GET /api/jokes?count=20
- GET /api/jokes?sortby=(best|worst)
- PUT /api/jokes/thumbsup/:jokeid
- PUT /api/jokes/thumbsdown/:jokeid

TODO:
- Move things like `const jokeAPI = 'https://icanhazdadjoke.com'` and `overshootFactor` into centralized config
- Complete /api/jokes route to handle sortBy param, and if there is an error while fetching
- Refactor fetchJokes action to handle an error in the batch of requests
