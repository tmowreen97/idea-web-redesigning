import { useState } from "react";
import Image from "next/image";

function Cards({feature}){

  const [showDesc, setShowDesc] = useState(false)

  function handleDesc(){
    setShowDesc(!showDesc)
  }
  
  return(
    <div className="relative">
      <div onMouseEnter={()=>handleDesc()} className={showDesc? "bg-shaded_bg w-[400px] h-[400px] rounded-xl shadow-lg shadow-black/70 " : "bg-light_bg w-[400px] h-[400px] rounded-xl shadow-lg shadow-black/70"}>
        <div className=" items-center text-center align-middle justify-center">
          <div className="opacity-60 flex justify-center">
            {showDesc ? '' : <Image src={feature.img} width={feature.img_width} height={300} className={feature.img_className}/>}
          </div>
          <div className="font-light">
            <p className={showDesc ? " text-secondary_text text-center text-pretty text-4xl absolute top-[30%] p-10 justify-center w-full" : " text-dark_text text-center absolute text-pretty text-4xl top-[40%] justify-center w-full"}>{showDesc ? feature.description : feature.heading}</p> 
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cards;