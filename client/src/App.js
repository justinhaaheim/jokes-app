import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import Subheader from "material-ui/Subheader"
import "./App.css"
import Joke from './common/Joke'

class App extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      error: null
    }
  }

  componentDidMount() {
    fetch("/api/jokes?count=20")
      .then(res => res.json())
      .then(jokes => {
        this.setState({
          jokes
        })
      })
      .catch(err => {
        this.setState({
          error: `There has been an error fetching jokes from the server: ${err}`
        })
      })
  }

  render() {
    const { jokes, error } = this.state

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Justin's Jokes App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Subheader>Created with love by Justin Haaheim</Subheader>
          {error ? <div style={{color: 'red'}}>{error}</div> : null}
          <div>
            <h1>Your 20 jokes for the day</h1>
            {
              jokes.map(joke => (
                <Joke body={joke.joke} jokeId={joke.id} key={joke.id} />
              ))
            }
          </div>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
