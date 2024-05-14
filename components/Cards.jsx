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
      <div onClick={()=> handleClick()} onMouseEnter={()=>handleHover()} className={showDesc? "bg-shaded_bg md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-xl shadow-lg shadow-black/70 cursor-pointer" : "bg-light_bg md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-xl shadow-lg shadow-black/70 relative cursor-pointer"}>
        <div className=" items-center text-center align-middle justify-center">
          <div className="opacity-60 flex justify-center">
            {showDesc ? '' : <Image src={feature.img} width={feature.img_width} height={300} className={feature.img_className}/>}
          </div>
          <div className="font-light flex">
            <p className={showDesc ? " text-secondary_text md:text-2xl text-lg absolute xl:p-6 p-4 justify-center inset-0 place-content-center" : " text-dark_text xl:text-4xl text-3xl absolute p-6 inset-0 place-content-center justify-center "}>{showDesc ? feature.description : feature.heading}</p> 
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cards;