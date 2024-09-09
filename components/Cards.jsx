import { useState } from "react";
import Image from "next/image";

function Cards({feature, isBreakPoint}){

  const [showDesc, setShowDesc] = useState(false)

  function handleHover(){
    if (!isBreakPoint){
      setShowDesc(!showDesc)
    }
  }
  
  function handleClick(){
    setShowDesc(!showDesc)
  }

  return(
    <div className="relative">
      <div onClick={()=> handleClick()} onMouseEnter={()=>handleHover()} className={showDesc && feature.description ? "bg-shaded_bg md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-xl shadow-lg shadow-black/70 cursor-pointer" : "bg-light_bg md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-xl shadow-lg shadow-black/70 relative cursor-pointer"}>
        <div className=" items-center text-center align-middle justify-center">
          <div className="opacity-60 flex ">
            {showDesc && feature.description ? '' : <Image src={feature.img} width={feature.img_width} height={300} className={feature.img_className}/>}
          </div>
          <div className="font-light flex ">
            <p className={showDesc && feature.description ? feature.description_className : feature.heading_className}>{showDesc && feature.description ? feature.description : feature.heading}</p> 
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cards;