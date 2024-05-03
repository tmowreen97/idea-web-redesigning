import { useState } from "react";

function Cards({feature}){

  const [showDesc, setShowDesc] = useState(false)

  function handleDesc(){
    setShowDesc(!showDesc)
  }
  
  return(
    <div>
      <div onMouseEnter={()=>handleDesc()} className="bg-light_bg w-[400px] h-[400px] rounded-xl">
        <div className="flex items-center text-center align-middle justify-center p-[30%]">
          {showDesc ? <p className=" text-dark_text text-center  text-4xl">{feature.description}</p> : <p className=" text-dark_text text-center max-w-[200px]  text-4xl">{feature.heading}</p>}
        </div>
      </div>
      
    </div>
  )
}

export default Cards;