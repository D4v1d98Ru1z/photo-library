import React from 'react'
import PostOverlay from './PostOverlay'
import './ImageCard.css'

export default function Post(props) {
  return (
    <div className="post">
      <img
        ref={props.picRef}
        src={props.img.urls.regular}
        alt={props.img.description}
      />
      <PostOverlay
        img={props.img}
      />
    </div>
  )
}
