import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  
  /**
   * 
   * @param {*} error 
   * @returns {hasError} When the error is true
   */
  static getDerivedStateFromError(error){
    return {
      hasError: true
    }
  }

  render() {
    if(this.state.hasError){
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}
