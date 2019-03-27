import React from 'react'
import './Info.css'

export default function Info(props) {
  return (
    <div className="image-info">
      <img
        src={props.img.user.profile_image.small}
        alt={props.img.description}
      />
      <p>
        {
          props.img.user.name
        }
      </p>
    </div>
  )
}
