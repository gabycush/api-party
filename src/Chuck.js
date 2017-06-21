import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ChuckFact from './ChuckFact'
import './Chuck.css'

class Chuck extends Component {
  state = {
    catagory: ''
  }

  handleChange = (ev) => {
    const catagory = ev.currentTarget.value
    this.setState({ catagory })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/chuck/${this.state.catagory}`)
  }

  render() {
    return (
      <div className="chuck">
        <img src="http://cdn.business2community.com/wp-content/uploads/2016/03/Vd3MJo.jpg" alt="chuck logo" className="chuck-logo"/>

        <h3> Categories </h3>
        <table>
        <tr>
          <td>dev</td>
          <td>movie</td>
          <td>food</td>
          <td>celebrity</td>
          <td>science</td>
        </tr>
        <tr>
          <td>political</td>
          <td>sport</td>
          <td>religion</td>
          <td>animal</td>
          <td>music</td>
        </tr>
        <tr>
          <td>history</td>
          <td>travel</td>
          <td>career</td>
          <td>money</td>
          <td>fashion</td>
        </tr>
        </table>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.catagory}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Learn about Chuck Norris</button>
          </div>
        </form>
        <Route exact path='/chuck' render={() => <p> Type a Catagory and Recieve a Fact{"!"} </p>} />
        <Route path='/chuck/:catagory' component={ChuckFact} />
      </div>
    )
  }
}

export default Chuck
