import React from "react";
import { motion, transform } from "framer-motion";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function ProjectHomeCarousel ({projects, setProjectSelect, projectSelect}){

  function handleRight(){
    if(projectSelect<2){
      setProjectSelect(projectSelect+1)
    } else{
      setProjectSelect(projectSelect-2)
    }
  }

  function handleLeft(){
    if(projectSelect>0){
      setProjectSelect(projectSelect-1)
    } else{
      setProjectSelect(projectSelect+2)
    }
  }

  const goToSlide = (slideIndex) => {
    setProjectSelect(slideIndex);
  };

  return (
    // <Carousel showArrows dynamicHeight infiniteLoop >
    //   {
    //     images.map((img)=> {
    //       return(
    //         <div key={img.image} className="rounded-xl overflow-hidden">
    //           <Image src={img.image} width={700} height={300} />
    //           <p className="legend">Legend 1</p>
    //         </div>
    //       )
    //     })
    //   }
      
    // </Carousel>

    
    <div className="max-w-[700px] h-[450px] w-full m-auto px-4 relative group mb-[0%] ">
      <motion.div 
      // initial={{ opacity:0 }}
      // whileInView={{ opacity:1 , transition:{delay:1}}}

      style={{backgroundImage:`url(${projects[projectSelect].image})`}}
      className="w-[600px] h-[400px] rounded-2xl bg-center bg-cover hover:scale-105 hover:opacity-90 duration-500 transform"
      >
      {/* Left Arrow */}
      
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-2 text-2xl p-2 rounded-full text-black bg-slate-200/60 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD]">
        <BsChevronCompactLeft onClick={()=> handleLeft()} size={40}/>
      </div>

      {/* Right Arrow */}
      
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-2 text-2xl p-2 rounded-full text-black bg-slate-200/60 shadow-gray-600/90 hover:bg-slate-600/50 hover:text-[#F9FBFD]">
        <BsChevronCompactRight onClick={()=> handleRight()} size={40}/>
      </div>
      </motion.div>
      <div className=' flex  text-center  items-center justify-center py-8'>
        {projects.map((proj, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={ i===projectSelect ? 'text-2xl cursor-pointer text-accent_2' : 'text-2xl cursor-pointer text-white' }

          >
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectHomeCarousel;