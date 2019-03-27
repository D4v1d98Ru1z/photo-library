import React from 'react'
import './SearchBar.css'

export default function NavBar(props) {
  return (
    <div className="Nav">
      <nav className="SearchBar">
          <form onSubmit={props.handleSubmit}>
              <input 
                type="text"
                placeholder="Search" 
                className="Search"
                value={props.input}
                onChange={props.hangleChange}
              />
          </form>
      </nav>
    </div>
  )
}
