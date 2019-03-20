import React, { Component } from 'react'
import './ImageCard.css'

export default class ImageCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gridSpan: 0
    }
    this.picRef = React.createRef()
  }
  

  setGridSpan = () => {
    const height = this.picRef.current.clientHeight
    console.log(`Height from setGridSpan ${height}`)
    const gridSpan = height + 1
    console.log(`gridSpan from setGridSpan ${gridSpan}`)
    this.setState({
      gridSpan
    })
  }

  componentDidMount(){
    this.picRef.current.addEventListener('load', this.setGridSpan)
  }

  render() {
    return (
      <div 
        className="item"
        style={{ gridRowEnd: `span ${this.state.gridSpan}` }}
      >
        <img
          ref={this.picRef}
          src={this.props.img.urls.regular}
          alt={this.props.img.description}
        />
      </div>
    )
  }
}
