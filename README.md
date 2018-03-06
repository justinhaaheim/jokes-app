# Jokes App for Rithm School

Author: Justin Haaheimf

# Challenge

CheeZJokes App

Build an app that lets people browse cheesy jokes. To generate quotes, you’ll be using this API:

https://icanhazdadjoke.com/api

If you find another API you’d rather use to get jokes, that works too!

Your jokes application should provide an interface for visitors to view and rate jokes (see the user stories below).

No need to go overboard on the design, but the interface should be intuitive and easy to use.

Feel free to use whatever tech stack you prefer. Our curriculum focuses on Python+Flask and Node+Express, but we’ve also had students work on projects using other technologies (e.g. Rails). We’d rather see you build more features using a stack you’re comfortable with than fewer features using a stack you’re just starting to learn.

## Core Features (User Stories)
- As a user, I can upvote a joke if I find it hilarious.
- As a user, I can downvote a joke if I find it lame.
- When the page loads, as a user I can see a list of the top 5 jokes based all user’s votes and the bottom 5 jokes (based on downvotes).
- When the page loads, as a user I can see a random list of 20 jokes, with no duplicates.
- As a user, I can click a button to generate a new list of random quotes (again, with no duplicates).

## Bonus Features
- (Technical) The list of jokes, with votes, should be cached in local storage.
- As a user, I want the app to look nice / be responsive, including on my mobile device.
- As a user, I should only be able to upvote or downvote a post once.  

Don’t worry about any sort of authentication - you don’t need people to create accounts or log in to view or vote on jokes!


# Work Plan

Display this all on a single page. The page will have:
- Top 5 jokes based on votes
- Bottom 5 jokes based on votes
- A list of 20 random jokes
- Thumbs up and thumbs down icons next to every joke
- A button to generate a new list of random jokes with no duplicates

Schema:
- Jokes table with id, api_id (and/or url), upvotes, downvotes

Routes:
- GET /api/jokes?count=20
- GET /api/jokes?sortby=(best|worst)
- PUT /api/jokes/thumbsup/:jokeid
- PUT /api/jokes/thumbsdown/:jokeid

TODO:
- Move thinks like `const jokeAPI = 'https://icanhazdadjoke.com'` and `overshootFactor` into centralized config
- Complete /api/jokes route to handle sortBy param, and if there is an error while fetching
