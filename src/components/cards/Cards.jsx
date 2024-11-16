import React from 'react'
import "./Cards.css";
import { Link } from 'react-router-dom';

const Cards = (props) => {

  

  const routes = {
    Games: "/games",
    Entertainment: "/entertainment",
    Anime: "/anime",
    Softwares: "/softwares", 
  };

  return (
    <>
    <Link to={routes[props.name] || "#"} className="card-link">
      <div className = "card">
        <img src={props.image} />
       
          <h2>
            {props.name}
          </h2>
        
      </div>
    </Link>
    </>
  )
}

export default Cards