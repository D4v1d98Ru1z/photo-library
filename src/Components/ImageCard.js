import React, { Component } from 'react'

export default class ImageCard extends Component {
  render() {
    return (
      <img
        src={this.props.img.urls.regular}
        alt={this.props.img.description}
      />
    )
  }
}
