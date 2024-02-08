'use client'
import { useState, useEffect } from "react";





export default function Home() {
  const [response, setResponse] = useState('quieres ser mi san valentine???')

  const [phase, setPhase] = useState(0)




  function si () {

    setResponse('DE VERDAD???')

    setPhase(1)

  }

  function no () {

    setResponse('lol')
    setPhase(2)


  }





  if( phase == 0){
    return (
      <div className="center"><h1 className="lover">{response}</h1>
      
       <button className=" but" onClick={si} >si</button>  <button className=" but" onClick={no}> no</button> 
      
      </div>
     );



  }
  if( phase == 1){
    return (
      
      <div className="center"><h1 className="si">te amooooo, me haces muy feliz y quiero pasar todos los san valetines de mi vida contigo!</h1>
      <audio className="aud" controls autoPlay>
      
      <source src="./daylight.mp3" type="audio/mpeg"/>
     Your browser does not support the audio element.
      </audio>
     
      </div>
      
     );



  }
  if( phase == 2){
    return (
      <div className="center"><h1 className="lover">cómo me vas a decir que nooooo?? dime que sí</h1>
      
       <button className=" but" onClick={si} >si</button> 
      
      </div>
     );



  }


 
}
