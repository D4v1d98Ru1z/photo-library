import React, { Component } from 'react'
import NavBar from '../Components/NavBar'

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
      <NavBar
        handleSubmit={this.handleSubmit}
        value={this.state.input}
        hangleChange={this.hangleChange}
      />
    )
  }
}
