import {React, useRef, useEffect} from "react";
import { motion, transform } from "framer-motion";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function Carousel ({array, setCurrentIndex, currentIndex}){

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
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
    if(currentIndex<2){
      setCurrentIndex(currentIndex+1)
    } else{
      setCurrentIndex(currentIndex-2)
    }
  }

  function handleLeft(){
    if(currentIndex>0){
      setCurrentIndex(currentIndex-1)
    } else{
      setCurrentIndex(currentIndex+2)
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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

    
    <div className="md:max-w-[720px] md:h-[450px] md:w-full m-auto md:px-4 p-1 relative group mb-[0%]">
      <motion.div 
      // initial={{ opacity:0 }}
      // whileInView={{ opacity:1 , transition:{delay:1}}}

      style={{backgroundImage:`url(${array[currentIndex].image})`}}
      className="md:w-[620px] xl:w-[700px] md:h-[400px] w-[355px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105 hover:opacity-90 duration-500 transform"
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