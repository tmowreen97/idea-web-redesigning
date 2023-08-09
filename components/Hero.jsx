import {React, useState} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Hero({heading, message}){
  const [descTwo, setDescTwo] = useState(false)
  const [coord, setCoord]= useState(["0,0 0,0 0,0"])  
 
  function handleDescTwo(e){
    // console.log(e)
    // console.log('current coord', e.clientX, e.clientY)
    let y1= e.clientY-47
    let x2 = e.clientX+150
    let y2= y1-100
    // console.log('clientX, clientY', e.clientX, e.clientY, 'y1', y1, 'x2,y2', x2, y2)

    setCoord(`${e.clientX},${y1}, ${x2},${y1}, ${x2}, ${y2}`)
    setDescTwo(true)
    // "1145,426 1301,426 1301,350"
    // original is 1140, 423 changed to 1142, 375
    // original x - 145, y +26

  }
  // console.log('coord',coord)
  return (
    <div className='flex relative items-center justify-center w-screen h-screen pt-12 bg-fixed bg-center bg-cover custom-img tracking-wider'>
      {/* <div className='absolute left-0 top-0 h-[100%] w-[100%]'>
        <Image src={'/assets/miami-port.jpeg'} alt='MiamiPort' fill style={{objectFit:'cover'}} priority/>
      </div> */}
      
      {/* <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    /> */}
      {/* Overlay */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
      <motion.button
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{delay:1.8, duration:1}}}
        className="absolute left-1/4 top-1/3 bg-red-500 rounded-full w-3 h-3 motion-safe:animate-ping hover:animate-none"
        onClick={() => console.log("Description for Point 1")}
      />
      <motion.button
          initial={{opacity:0}}
          whileInView={{opacity:1, transition:{delay:1.8, duration:1}}}
          className="absolute md:left-3/4 md:top-1/2 bg-white rounded-full w-3 h-3 motion-safe:animate-ping hover:animate-none"
          onClick={(e)=> handleDescTwo(e)}
        />
        {descTwo ? 
        <>
          <svg  width="100%" height="100%" className="relative"><polyline points={coord} stroke="white" strokeWidth={1} fill="none" animation="dash 5s linear"/></svg>
          <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1, transition:{delay:.7}}}
          className='bg-white/60 w-[350px] absolute right-[3%] top-[10%] rounded-xl px-5 py-4'>
            <div className='text-right items-center'>
              <button className='bg-white/60 rounded-full px-1 hover:bg-accent_2 hover:text-secondary_text' onClick={()=> setDescTwo(false)}>
                ⓧ
              </button>
            </div>
            
            <p className="text-dark_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </motion.div>
          {/* <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:1.1}}} id="desc" className="fixed md:right-[5%] md:bottom-[55%] w-60 bg-[#F5F4F9]/40 rounded-xl" onClick={(e)=>console.log(e)}>
            <button className="absolute right-1 p-2 ease-out 200" onClick={()=> {setDescTwo(false)}}>
              <AiOutlineCloseCircle/>
            </button>
            <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </motion.div> */}
        </> : ""}
        {/* {descTwo ? <div>
          <svg width="2000" height="500" className="relative"><polyline points={coord} stroke="white" strokeWidth={1.5} fill="none" animation="dash 5s linear"/></svg>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:1.1}}} id="desc" className="fixed md:right-[5%] md:bottom-[55%] w-60 bg-[#F5F4F9]/40 rounded-xl" onClick={(e)=>console.log(e)}>
            <button className="absolute right-1 p-2 ease-out 200" onClick={()=> setDescTwo(false)}>
              <AiOutlineCloseCircle/>
            </button>
            <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </motion.div> 
          </div> : ""
        } */}
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{delay:1.2, duration:1}}}
      className='p-5 text-primary_text z-[2] mt-[-10rem]'
      >
        <h1 className='text-9xl absolute font-thin left-5 bottom-5'>{heading}</h1>

        {/* <button className='px-8 py-2 border'>Book</button> */}
      </motion.div>
    </div>
  );
};

export default Hero;