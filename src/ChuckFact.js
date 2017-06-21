import React, { Component } from 'react'

class ChuckFact extends Component {
  state = {
    joke: {
      "icon_url" : '',
      "id" : '',
      "url" : '',
      "value" : '',
    }
  }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData(props) {
    fetch(`https://api.chucknorris.io/jokes/random?category=${props.match.params.catagory}`)
      .then(response => response.json())
      .then(joke => this.setState({ joke }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { joke } = this.state
    return (
      <div className="chuck-fact">
        <img src={joke.icon_url} alt="Chuck Norris"/>
        <h3>Fun Fact: {joke.value}</h3>
      </div>
    )
  }
}
export default ChuckFact
