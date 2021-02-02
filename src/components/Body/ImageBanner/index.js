import React from 'react'
import './image-banner.css'

function ImageBanner({ img, alt }) {
  const image = new Image()
  image.src = `http://localhost:3001${img}`
  const proportion = image.width / image.height
  const imgClass = proportion > 1.5 ? 'over-width' : 'over-height'

  return (
    <div className="image-wrapper">
      <button className="image-button" type="button">
        <img
          className={`image-banner ${imgClass}`}
          src={`http://localhost:3001${img}`}
          alt={alt}
        />
      </button>
    </div>
  )
}

export default ImageBanner
