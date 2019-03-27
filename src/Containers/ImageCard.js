import React, { Component } from 'react'
import Post from '../Components/Post'
import Info from '../Components/Info'
import '../Components/ImageCard.css'

export default class ImageCard extends Component {
  constructor(props) {
    super(props)
    // init the state for the grid-row-end css
    this.state = {
      gridSpan: 0
    }
    // Reference for the image
    this.picRef = React.createRef()
  }
  setGridSpan = () => {
    // Getting the height from each image
    const height = this.picRef.current.clientHeight

    // Different values according to the height of the images
    if(height <= 240){
      this.setState({
        gridSpan: 1
      })
    }
    else if(height >= 241 || height <= 470) {
      this.setState({
        gridSpan: 2
      })
    }
    else {
      this.setState({
        gridSpan: 3
      })
    }
  }

  // Lifecycle method to runs after the component has been rendered
  componentDidMount(){
    // Add event when the image reference has been loaded
    this.picRef.current.addEventListener('load', this.setGridSpan)
  }

  render() {
    return (
      <div 
        className="item"
        style={{ gridRowEnd: `span ${this.state.gridSpan}` }}
      >
        <Post
          img={this.props.img}
          picRef={this.picRef}
        />
        <Info
          img={this.props.img}
        />
      </div>
    )
  }
}
