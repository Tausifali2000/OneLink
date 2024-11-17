import React from 'react'
import '../games/Games.css';
import SubCards from '../../components/subCards/SubCards';



const Softwares = () => {
  return (
    <>
       <div className="game-container">
    <div className="recommended">
      <h1>Recommended</h1>
    </div>
    <div className="sub-cards-container">
    <SubCards
    name="Filecr"
     url="https://filecr.com/en/" 
     external={true} 
     />
    
    
    <SubCards 
      name="Get into pc"
      url= "https://getintopc.com/" 
      external={true}
      />
    
   
    </div>
    <div className="sites">
      <h2>Sites</h2>
    </div>

    <div className="more-container">
    
   
   
    
    
    </div>
    </div>
    </>
  )
}

export default Softwares