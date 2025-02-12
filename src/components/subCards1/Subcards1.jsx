import React from 'react'
import './Subcards1.css';

const Subcards1 = (props) => {
  return (
    <>
      <div className="subcard1">
        <div className="subcard1-image">
          <img src={props.image} alt="" /></div>
          <a  href={props.url || "#"} // Use the URL passed via props
      target={props.external ? "_blank" : "_self"} // Open in a new tab if external
      rel={props.external ? "noopener noreferrer" : ""} // Security for external links
      className="card-link">
          <div class="arrow">
  <div class="arrow-top"></div>
  <div class="arrow-bottom"></div>
</div>
</a>
        
      </div>
    </>
  )
}

export default Subcards1