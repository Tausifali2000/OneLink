import React from 'react'
import "./SubCards.css";


const SubCards = (props) => {

  
return (
    <>
    <a
      href={props.url || "#"} // Use the URL passed via props
      target={props.external ? "_blank" : "_self"} // Open in a new tab if external
      rel={props.external ? "noopener noreferrer" : ""} // Security for external links
      className="card-link"
    >
      <div className = "sub-card">
        <img src={props.image} />
       
          <h1>
            {props.name}
          </h1>
      </div> 
      </a>
    </>
  )
}

export default SubCards