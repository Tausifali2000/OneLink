import React from 'react'
import "./SubCards.css";


const SubCards = (props) => {

  
return (
    <>
    <div className="subcard">
      <div className="subcard-image">
        <img src={props.image}  />
        
      </div>
      <div className="subcard-content">
          <div className="subcard-title">
            <h1>{props.name}</h1>
          </div>
          <a  href={props.url || "#"} // Use the URL passed via props
      target={props.external ? "_blank" : "_self"} // Open in a new tab if external
      rel={props.external ? "noopener noreferrer" : ""} // Security for external links
      className="card-link">
         <div class="button" id="button-4">
            <div id="underline"></div>
           Visit
  </div>
  </a>
        </div>
    </div>
    
    
    
   
    </>
  )
}

export default SubCards