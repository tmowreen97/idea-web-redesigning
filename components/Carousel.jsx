import {React, useRef, useEffect, useState} from "react";
import { motion, transform } from "framer-motion";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function Carousel ({array,  custom, handleIndex}){

  const [currentIndex, setCurrentIndex] = useState(0)
    
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    if(handleIndex){

        handleIndex(currentIndex)
    }

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === array.length - 1 ? 0 : prevIndex + 1
        ),
      4500
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  function handleRight(){
    if(currentIndex<(array.length-1)){
      setCurrentIndex(currentIndex+1)
    } else{
      setCurrentIndex(currentIndex-(array.length-1))
    }
  }

  function handleLeft(){
    if(currentIndex>0){
      setCurrentIndex(currentIndex-1)
    } else{
      setCurrentIndex(currentIndex+(array.length-1))
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  

  return (
    <div className="relative group items-center justify-center z-5">

      <motion.div 
      // initial={{ opacity:0 }}
      // whileInView={{ opacity:1 , transition:{delay:1}}}

      style={{backgroundImage:`url(${array[currentIndex].image})`}}
      className={custom}
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
        {array.map((current, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={ i===currentIndex ? 'text-2xl cursor-pointer text-accent_2' : 'text-2xl cursor-pointer text-white' }

          >
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel;