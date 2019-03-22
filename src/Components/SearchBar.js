import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  // Store the input value
  state = {
    input: ''
  }

  // Change the form state 
  hangleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  // Submit the event
  handleSubmit = (event) => {
    // disable the native event
    event.preventDefault()
    this.props.handleSubmit(this.state.input)
  }
  render() {
    return (
      <div className="Nav">
        <nav className="SearchBar">
            <form onSubmit={this.handleSubmit}>
                <input 
                  type="text"
                  placeholder="Search" 
                  className="Search"
                  value={this.state.input}
                  onChange={this.hangleChange}
                />
            </form>
        </nav>
      </div>
    )
  }
}
