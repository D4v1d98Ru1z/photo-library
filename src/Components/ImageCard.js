import React, { Component } from 'react'
import './ImageCard.css'

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
        <div className="post">
          <img
            ref={this.picRef}
            src={this.props.img.urls.regular}
            alt={this.props.img.description}
          />
          <div className="post-overlay">
            <p>
              <span className="overlay-btn">
                <i className="far fa-heart"></i>
                <span>
                  {
                    this.props.img.user.total_likes
                  }
                </span>
              </span>
              <span className="overlay-btn">
                <i className="far fa-images"></i>
                <span>
                  {
                    this.props.img.user.total_photos
                  }
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="image-info">
          <img
            src={this.props.img.user.profile_image.small}
            alt={this.props.img.description}
          />
          <p>
            {
              this.props.img.user.name
            }
          </p>
        </div>
      </div>
    )
  }
}
