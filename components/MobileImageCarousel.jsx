import Image from "next/image"
import { useState } from "react";
import { motion } from "framer-motion";
function MobileImageCarousel({projectImages}){

  const [index, setIndex] = useState(1)
  const [length, setLength] = useState(projectImages.length)
  console.log(length)

  console.log(index, 'index')
  function handleNext(){
    if (index==length-1){
      setIndex(0)
    }
    else{
      const increment = index + 1
      setIndex(increment)
    }
  }

  function handlePrevious(){
    if (index==0){
      setIndex(length-1)
    }
    else{
      const decrement = index - 1
      setIndex(decrement)
    }
    
  }
  return(
    <div>
      <div className="relative">
        <div className="flex justify-center transition ease-in-out delay-150 width-[500px] height-[200px] object-cover  ">
          <motion.div 
          initial= {{opacity:0}}
          animate={{ opacity:1 }}
          transition={{ ease: "easeInOut", duration: 1, delay:2}}
          >
            <img src={projectImages[index].image} width={500} height={200} className=" mobile-img-carousel transition ease-in-out delay-150 image-rendering:auto "/>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <div className="gallery-controls font-light lg:gap-40 gap-20 md:text-xl text-lg mt-20  ">
            <button onClick={()=> handlePrevious()} className="bg-button_bg hover:bg-button_highlight/90 hover:shadow-md hover:shadow-black/80 shadow-sm shadow-black/80 md:px-7 md:h-14 px-4 h-10 rounded-xl">Previous</button>
            <button onClick={()=> handleNext()} className="bg-button_bg hover:bg-button_highlight/90 hover:shadow-md hover:shadow-black/80 shadow-sm shadow-black/80 md:px-7 md:h-14 px-4 h-10 rounded-xl">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileImageCarousel;