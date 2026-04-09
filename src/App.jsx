import React from 'react'
import Navbar from './components/Navbar'

// for nav bar
import light_logo from "./assets/logo_light.png"
import light_insta from "./assets/social_light1.png"
import light_facebook from "./assets/social_light2.png"

import dark_logo from './assets/logoDark.png'
import dark_insta from './assets/social1.png'
import dark_facebook from './assets/social2.png'
import "./App.css";
import About from './components/About'
import AboutSection from './components/AboutSection'
import Cards from './components/Cards'
import img1 from './assets/product1.png'
import img2 from './assets/product2.png'
import img3 from './assets/product3.png'
import Form from './components/Form'

function App() {
  const data = [
    {
      id:1,
      title:"Product1",
      des:"Description",
      image:img1,
      para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maxime voluptatibus inventore non velit minus blanditiis ea culpa molestiae harum",

    },
    {
      id:2,
      title:"Product2",
      des:"Description",
      image:img2,
      para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maxime voluptatibus inventore non velit minus blanditiis ea culpa molestiae harum",

      
    },
    {
      id:3,
      title:"Product3",
      des:"Description",
      image:img3,
      para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maxime voluptatibus inventore non velit minus blanditiis ea culpa molestiae harum",

    }
  ]
  return (
    <div>
      <Navbar 
        logo={light_logo} 
        insta={light_insta} 
        facebook={light_facebook} 
        color="black"
        
        
      />
      <About/>
      <div className='AbtSecHero'>
        
        <AboutSection title="About Section" para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maxime voluptatibus inventore non velit minus blanditiis ea culpa molestiae harum."/>
        <AboutSection para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maxime voluptatibus inventore non velit minus blanditiis ea culpa molestiae harum"/>
      </div>
      {data.map((e)=>(
        <Cards  key={e.id} title={e.title} des={e.des} para={e.para} image={e.image}/>
      ))}
      <div className='AbtSecHero'>
        <AboutSection title="Get Access" para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maxime voluptatibus inventore non velit minus blanditiis ea culpa molestiae harum."/>
        <Form/>
      </div>
      <Navbar logo={dark_logo} insta={dark_insta} facebook={dark_facebook} color="white"/>
      
    </div>
  )
}

export default App

