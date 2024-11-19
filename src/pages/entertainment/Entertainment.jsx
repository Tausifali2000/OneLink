import React from 'react'
import '../games/Games.css';
import SubCards from '../../components/subCards/SubCards';
import { entAssets } from '../../assets/entertainment/entAssets';
import Subcards1 from '../../components/subCards1/Subcards1';


const Entertainment = () => {
  return (
   <>
   <div className="game-container">
    <div className="recommended">
      <h1>Recommended</h1>
    </div>
    <div className="sub-cards-container">
    
    <Subcards1 
      name="Popcorn Movies"
      image={entAssets.popcorn}
      url="https://www.popcornmovies.to/home" 
     external={true} 
      />
    
    <Subcards1
      name="Flixwave"
      url= "https://flixwave.watch/home/" 
      external={true}
      image= {entAssets.flixwave} />
    
   
    </div>
    <div className="sites">
      <h2>Sites</h2>
    </div>

    <div className="more-container">
    
    <Subcards1
      name="Fmovies " 
      url="https://fmovies-hd.to/home/" 
      external={true}
      image= {entAssets.fmovies} />

    <SubCards 
      name="Freek"
      url="https://freek.to/" 
      external={true} />

    <SubCards 
      name="BFlix"
      url="https://bflix.sh/home/" 
      external={true}
      image={entAssets.bflix} />

    <SubCards 
      name="Vid Binge"
      url="https://www.vidbinge.com/" 
      external={true} />
      
    <SubCards 
      name="Novafork"
      url="https://novafork.com/" 
      external={true} />

    <SubCards 
      name="Auto Embed"
      url="https://watch.autoembed.cc/" 
      external={true} />

    
    
    
    </div>
    </div>
   </>
  )
}

export default Entertainment