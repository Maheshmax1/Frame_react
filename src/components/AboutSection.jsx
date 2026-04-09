import React from 'react'
import '../styles/AboutSection.css'

function AboutSection({title,para}) {
  return (
    <div className='abtSec'>
        {title && <h2>{title}</h2>}
        <p>{para}</p>
      
    </div>
  )
}

export default AboutSection
