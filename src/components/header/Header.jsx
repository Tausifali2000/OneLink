import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
    
      
        <Link to="/">
        <div className="logo">
          <h1>OneLink</h1>
        </div> 
        </Link>
        <div className="welcome">
          <p>Welcome to OneLink</p>
        </div>
      
    </header>
    
  )
}

export default Header