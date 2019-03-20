import React, { Component } from 'react'
import './ImageCard.css'

export default class ImageCard extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={this.props.img.urls.regular}
          alt={this.props.img.description}
        />
      </div>
    )
  }
}
