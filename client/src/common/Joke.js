import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

class Joke extends Component {
  render() {
    // eslint-disable-next-line
    const { body, jokeId } = this.props

    return (
      <div style={{
        color: this.props.muiTheme.palette.textColor,
        margin: "1rem",
        padding: ".5rem"
      }}>
        <span>{body}</span> <span>UPVOTE</span> <span>DOWNVOTE</span>
      </div>
    )
  }
}

export default muiThemeable()(Joke);
