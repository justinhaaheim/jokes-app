import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import Subheader from "material-ui/Subheader"
import "./App.css"

class App extends Component {
  componentDidMount() {
    fetch("/api/test")
      .then(res => res.text())
      .then(res => {
        console.log(`Response::: ${res}`)
      })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Justin's Jokes App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Subheader>Created with love by Justin Haaheim</Subheader>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
