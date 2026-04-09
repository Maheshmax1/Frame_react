import React from "react";
import "../App.css";

function Navbar({ logo, insta, facebook,color }) {
  return (
    <header className="nav" style={{backgroundColor:color}}>
      <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '40px',height:'40px' }}  />
        <h2><b>LOGO</b></h2>
      </div>
      
      <div className="platform">
        <img src={insta} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
      </div>
    </header>
  );
}

export default Navbar;
