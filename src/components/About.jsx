import React from 'react'
import Form from './Form'
import '../styles/About.css'
import heroImage from '../assets/user.png'


function About() {
  return (
    <div className='about-container'>
      <section className="about-section">
        <img src={heroImage} alt="Product Hero" className="about-image" />
        
        <div className="about-content">
            <h1>Introduce your product</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
              et massa mi. Aliquam in hendrerit urna. Pellentesque sit 
              amet sapien fringilla, mattis ligula consectetur.
            </p>
            <Form />
        </div>
      </section>
    </div>
  )
}

export default About



