import React from 'react'
import '../styles/Cards.css'

function Cards({title, des, para, image,}) {
  return (
    <div className="card-container">
      <div className="card-text">
        <h2>{title}</h2>
        <div className="card-description">
            <h4>{des}</h4>
            <p>{para}</p>
        </div>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default Cards