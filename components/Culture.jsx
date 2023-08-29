import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import {React, useState, useEffect, useCallback} from "react";
import ReactPlayer from "react-player/lazy";
import { motion } from "framer-motion";


function CulturePage(){

  const [isClient, setIsClient] = useState(false)
  const [bbqIndex, setBbqIndex] = useState(0)
  const [eefiIndex, setEefiIndex] = useState(0)
  const [mscIndex, setMscIndex] = useState(0)
  const [internIndex, setInternIndex] = useState(0)

  const bbq = [
    {
      name: 'bbq-1',
      image: '/assets/culture/bbq/bbq-1-cropp.png'
    },
    {
      name: 'bbq-2',
      image: '/assets/culture/bbq/bbq-2-crop.png'
    },
    {
      name: 'bbq-3',
      image: '/assets/culture/bbq/bbq-3.jpeg'
    },
    {
      name: 'bbq-4',
      image: '/assets/culture/bbq/bbq-4.jpeg'
    },
    {
      name: 'bbq-5',
      image: '/assets/culture/bbq/bbq-5-crop.png'
    }
  ]

  const eefi = [
    {
      name: 'eefi-1',
      image: '/assets/culture/eefi/1.png'
    },
    {
      name: 'eefi-2',
      image: '/assets/culture/eefi/2.JPG'
    },
    {
      name: 'eefi-3',
      image: '/assets/culture/eefi/3.jpeg'
    },
    {
      name: 'eefi-4',
      image: '/assets/culture/eefi/4.jpeg'
    },
    {
      name: 'eefi-5',
      image: '/assets/culture/eefi/5.jpeg'
    }
  ]

  const interns = [
    {
      name: 'interns-1',
      image: '/assets/culture/interns/1-updated.JPG'
    },
    {
      name: 'interns-2',
      image: '/assets/culture/interns/2-crop.png'
    },
    {
      name: 'interns-3',
      image: '/assets/culture/interns/3-crop.png'
    }
  ]

  const msc = [
    {
      name: 'msc-1',
      image: '/assets/culture/msc/1.jpg'
    },
    {
      name: 'msc-2',
      image: '/assets/culture/msc/2.jpg'
    },
    {
      name: 'msc-3',
      image: '/assets/culture/msc/3.jpg'
    },
    {
      name: 'msc-4',
      image: '/assets/culture/msc/4.jpg'
    },
    {
      name: 'msc-5',
      image: '/assets/culture/msc/5.jpg'
    },
    {
      name: 'msc-6',
      image: '/assets/culture/msc/6.jpg'
    },
    {
      name: 'msc-7',
      image: '/assets/culture/msc/7.jpg'
    },
    {
      name: 'msc-8',
      image: '/assets/culture/msc/8.jpg'
    },
    {
      name: 'msc-9',
      image: '/assets/culture/msc/9.jpg'
    },
    {
      name: 'msc-10',
      image: '/assets/culture/msc/10.jpg'
    },
  ]

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      setIsClient(true)
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };
  const isBreakPoint = useMediaQuery(900)

  return(
    <div className="w-screen h-full bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:1, duration:1}}}
      className="md:px-20 pt-20 pb-[80px]">
        <h1 className="md:text-[1100%] text-center text-8xl font-thin text-primary_text md:text-left tracking-wider">Culture</h1>
      </motion.div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:1.5, duration:1}}}
      >
        <div className="pb-[25px]">
          <h1 className="md:text-[500%] text-4xl text-center items-center tracking-wide font-light text-primary_text/70">IDEA Turns 2!</h1>
        </div>
      { isClient ? <div className="justify-center items-center flex md:w-[100%] md:h=[100%] overflow-hidden">
          {
            !isBreakPoint ? 
              <ReactPlayer 
                url={'https://www.youtube.com/watch?v=xUWu2wi4o-A&ab_channel=IDEA'}
                playing
                loop
                muted
                controls
                width='900px'
                height='500px'
              /> : 
              <ReactPlayer 
                url={'https://www.youtube.com/watch?v=f7DEe1hqRq0&ab_channel=IDEA'}
                playing
                loop
                muted
                controls
                width='375px'
                height='250px'
              />
          }

      </div> : ""}
      
      
      <div className="flex justify-center items-center p-5  md:pb-20 tracking-wider">
        <div className="culture__parent justify-center   pt-10 mx-[8%]  md:grid">
          <div className="culture__child1 md:p-10 p-3 pb-10flex bg-secondary/40 rounded-xl justify-center md:w-[705px] w-[350px]">
            <div className="">
              <div className="">
                <h1 className="md:text-6xl text-5xl px-5 pt-[50px] text-primary_text font-light ">2 Year BBQ</h1>
                <h2 className=" ml-6  text-primary_text md:text-3xl text-2xl font-light ">May 12, 2023</h2>
              </div>
            <div className=" md:w-[630px] md:h-[750px] items-center justify-center relative group  md:my-20 my-5">
              <Carousel
                array={bbq}
                currentIndex={bbqIndex}
                setCurrentIndex={setBbqIndex}
                custom={"md:w-[630px] h-[700px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0"}
              />
            </div>
            <div>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[185%]">
              Celebrating 2 Remarkable Years: A Fusion BBQ Extravaganza! IDEA’s 2-year anniversary marked a splendid occasion as we united the dedicated forces of MSC, Fincentari, and IDEA for a memorable Company BBQ. Orchestrated meticulously by the Marketing team, the event boasted an inviting ambiance, complemented by the culinary creations of our in-house engineering talents turned BBQ maestros. This harmonious collaboration embodies our unwavering commitment to excellence and the spirit of collaboration. Cheers to sharing in this journey of success!
              </p>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[32px]">
              The Marketing team's thorough preparation was clear in the event's details, from combining company identities in decorations to organizing engaging activities. The delicious food, grilled by our engineering talents, mirrored the blend of skills they contribute.
              </p>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[32px]">
              Beyond the great food, the event deepened connections among colleagues, laughter and shared stories have left a sense of camaraderie and a renewed drive for the future. Reminding everyone of the people behind their roles throughout this journey of the soon to be, MSC Cruise Terminal. 
              </p>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[32px]">
              This celebration wasn't just about the past but also signaled a stronger future together. The Fusion BBQ Extravaganza demonstrated our ability to collaborate and adapt, setting the tone for continued growth and success.
              </p>
            </div>
            </div>
          </div>
          <div className="culture__child2 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl md:w-[525px] w-[350px]">
          <div>
            <div>
              <h1 className="md:text-6xl text-5xl px-5  pt-[30px] text-primary_text font-light">Project EEFI Update</h1>
              <h2 className=" ml-6 text-primary_text md:text-3xl text-2xl font-light ">DATE</h2>
            </div>
            <div className=" md:w-[445px] md:h-[350px] items-center justify-center relative group  md:my-10 my-5">
              <Carousel
                array={eefi}
                currentIndex={eefiIndex}
                setCurrentIndex={setEefiIndex}
                custom={"md:w-[445px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
              />
            </div>
            <div>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg  leading-[185%]">
              Would you look at the progress here at East End Food Institute! This collection of site visits show the envelope closure and the installation of underground plumbing work. The envelope closure marks the first step toward waterproofing and structural integrity, while the installation of underground plumbing is a critical infrastructure development for building commercial kitchen programs!
              </p>
            </div>
            </div>
          </div>
          <div className="culture__child3 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl md:w-[525px] w-[350px]">
          <div>
            <div>
              <h1 className="md:text-6xl text-5xl px-5 pt-[30px] text-primary_text font-light">Project MSC Update </h1>
              <h2 className=" ml-6  text-primary_text md:text-3xl text-2xl font-light">DATE</h2>
            </div>
            <div className=" md:w-[445px] md:h-[475px]  items-center justify-center relative group  md:my-10 my-5">
              <Carousel
                array={msc}
                currentIndex={mscIndex}
                setCurrentIndex={setMscIndex}
                custom={"md:w-[445px] h-[425px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
              />
            </div>
            <div>
              <p className="md:mt-10 mx-[5px] 2xl:text-xl tracking-wide  leading-[185%] text-lg">
              Witnessing remarkable progress at the MSC Cruise Terminal in Miami, Florida! As the structural steel installation nears completion, the project sails smoothly ahead. Building systems are racing towards the finish line, and a major milestone has been achieved with the completion of the curtain wall installation, while the dredging progress continues to impress. The future of cruising is on the horizon at MSC Terminal! A major shout out to all the hard working disciplines involved in what we call greatness! 
              </p>
            </div>
            </div>
          </div>
          <div className="culture__child4 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl md:w-[705px] w-[350px]">
          <div>
            <div>
              <h1 className="md:text-6xl text-5xl px-5 pt-[50px] text-primary_text font-light ">The Summer of IDEA's 2023 Interns </h1>
              <h2 className=" ml-6 text-primary_text md:text-3xl text-2xl font-light ">August 15, 2023</h2>
            </div>
            <div className=" md:w-[630px] md:h-[700px]items-center justify-center relative group  md:my-20 my-5 ">
              <Carousel
                array={interns}
                currentIndex={internIndex}
                setCurrentIndex={setInternIndex}
                custom={"md:w-[625px] h-[650px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
              />
            </div>
            <div>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[185%]">
              Celebrating a fantastic summer with our talented interns! Raiyan, Abrar, and Preo have been rocking their 3rd year interning journey at IDEA. Their passion and dedication have truly made a mark on our interdisciplinary engineering projects. Here's to a summer of growth and innovation!
              </p>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[185%]">
              Reflecting on the past few months, it's evident that our exceptional interns have etched their names into IDEA's legacy during their impactful 3rd year internship journey. The dynamic contributions of Raiyan, Abrar, and Preo have undeniably elevated the outcomes of our cross-disciplinary engineering endeavors at IDEA.
              </p>

            </div>
            </div>
          </div>
          <div className="culture__child5 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl md:w-[525px] w-[350px]">
          <div>
            <div>
              <h1 className="md:text-6xl text-5xl px-5  pt-[30px] text-primary_text font-light">IDEA Turns 1!</h1>
              <h2 className=" ml-6  text-primary_text md:text-3xl text-2xl font-light">April 5, 2022</h2>
            </div>
              <div className="flex items-center justify-center md:my-10 my-5">
                <Image src={'/assets/idea_turns_1.png'} width={500} height={300} className="rounded-xl overflow-hidden"/>
              </div>
              <div >
                <div>
                  <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg  leading-[185%]">
                Thank you to all of our Team Members, and supporters for being a part of our continued success! We look forward to designing and manigesting more World Class IDEAs!
                </p>
                </div>
                

              </div>
            </div>
          </div>
          <div className="culture__child6 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl md:w-[705px] w-[350px]">
          <div>
              <h1 className="md:text-5xl text-4xl px-5 pt-5 text-primary_text font-light">MSC Groundbreaking</h1>
              <h2 className=" ml-6  text-primary_text text-2xl font-light tracking-wide">March 10, 2022</h2>
              <div className="flex items-center justify-center  md:my-10  my-5 ">
              { isClient ? 
              <Link href={'https://www.facebook.com/reel/661496844905448'} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  {!isBreakPoint ? 
                  <ReactPlayer 
                  url={'/assets/msc_groundbreaking.mp4'}
                  loop
                  playing
                  controls
                  muted
                  height='950px'
                  width='600px'
                  className="rounded-xl overflow-hidden"
                  />
                  : 
                  <ReactPlayer 
                  url={'/assets/msc_groundbreaking.mp4'}
                  loop
                  playing
                  controls
                  muted
                  height='500px'
                  width='300px'
                  className="rounded-xl overflow-hidden"
                  />
                }
                  

                </a>
                
                </Link>
                : ""
                
              }
              </div>
              <div>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[32px]">
              For the past year, IDEA has been providing MEP-FP Engineering services & expertise on MSC’s World’s Largest Cruise Ship Terminal project. We celebrated this achievement with a Groundbreaking Ceremony at the Port of Miami on March 10, 2022!
              </p>

            </div>
            </div>
          </div>
          <div className="culture__child7 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl md:w-[525px] w-[350px]">
          <div>
            <div>
              <h1 className="md:text-[6xl] text-5xl px-5 pt-[30px] text-primary_text font-light">Vinoo is Promoted to Principal!</h1>
              <h2 className=" ml-6  text-primary_text md:text-3xl text-2xl font-light tracking-wide">April 5, 2022</h2>
            </div>
              
              <div className="items-center justify-center rounded-xl overflow-hidden my-10">
              <Image src={'/assets/vinoo_promoted.png'} width={500} height={300} className="rounded-xl overflow-hidden"/>
              </div>
              <div >
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[185%]">
                On April 5, 2021, Kazi Karim, PE took on the initiative to contribute and improve the Architectural Engineering community by founding IDEA. With the intent to provide client-specific high-quality MEP-FP Engineering services, Kazi is facilitating the growth of IDEAs. He is now the Founder and Managing Principal for IDEA and currently servicing a variety of World Class IDEAs.
                </p>

              </div>
            </div>
          </div>
          <div className="culture__child8 md:p-10 p-5 mt-5 md:mt-0  bg-secondary/40 rounded-xl h-[85%] md:w-[525px] w-[350px]">
          <div>
            <div>
              <h1 className="md:text-[6xl] text-5xl px-5 pt-[30px] text-primary_text font-light">IDEA is Founded </h1>
              <h2 className="ml-6  text-primary_text md:text-3xl text-2xl font-light">April 5, 2021</h2>
            </div>
            <div className="flex items-center justify-center my-10">
              <Image src={'/assets/idea_founded.png'} width={400} height={300} className="rounded-xl overflow-hidden"/>
            </div>
            <div>
              <p className="md:my-8 md:mx-[35px] m-3 2xl:text-xl tracking-wide text-lg leading-[185%]">
              On April 5, 2021 Kazi Karim, PE took on the initiative to contribute to and improve the Architectural Engineering community by founding IDEA. With the intent to provide client-specific high-quality MEP-FP Engineering services, Kazi is facilitating the growth of IDEAs. He is now the Founder and Managing Principal for IDEA and currently servicing a variety of World Class IDEAs.
              </p>
            </div>
            </div>
          </div>
          <div className="culture__child9  rounded-xl md:w-[525px] md:mt-[-200px] h-[36%]">
          <motion.div 
            initial={{opacity:0}}
            animate={{
              opacity:[0,0.85,1,0],
              scale: [0.5, 1, 1, 0.5],
              
              transition:{
                repeat: Infinity,
                repeatDelay: 2,
                delay:2,
                duration:4
              }
              

            }}
            // className="absolute right-[13%] 2xl:right-[29%] md:mt-[11%] 2xl:mt-[7%]">
            className="items-center justify-center">

              <div className="flex m-[9%]">
                <Image src={'/assets/light-logo-2.png'} width={400} height={100} className="items-center justify-center "/>
              </div>
          
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="absolute right-[5%]">
      <div className="relative bottom-[100px] ">
        <Image src={'/assets/light-logo-2.png'} width={400} height={100}/>
      </div>
          
        </div> */}
    </motion.div>
    
      
    </div>
  )
}

export default CulturePage;