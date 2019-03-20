import React from 'react'
import ImageCard from './ImageCard'
import './GridImage.css'

export default function GridImage(props) {
    // Map the image card component
    const images = props.images.map(img => <ImageCard key={img.id} img={img}/>)     
    return (
        <div className="container">
            {images}
        </div>
    )
}
