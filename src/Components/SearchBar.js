import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="Nav">
        <nav className="SearchBar">
            <form>
                <input placeholder="Search" className="Search"/>
            </form>
        </nav>
      </div>
    )
  }
}
