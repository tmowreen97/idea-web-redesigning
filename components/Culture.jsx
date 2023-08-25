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
      image: '/assets/culture/bbq/bbq-1.jpeg'
    },
    {
      name: 'bbq-2',
      image: '/assets/culture/bbq/bbq-2.jpeg'
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
      image: '/assets/culture/bbq/bbq-5.jpeg'
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
            url={'https://www.youtube.com/watch?v=9g08kucPQtE&ab_channel=Gunna'}
            playing
            loop
            muted
            controls
            width='900px'
            height='500px'
          /> : 
          <ReactPlayer 
            url={'https://www.youtube.com/watch?v=9g08kucPQtE&ab_channel=Gunna'}
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
        <div className="culture__parent justify-center pt-10 mx-[8%] 2xl:mx-[25%] md:grid flexbox">
          <div className="culture__child1 md:p-10 p-5 pb-10flex bg-secondary/40 rounded-xl justify-center">
            <div className="">
              <div className="">
                <h1 className="md:text-6xl px-5 pt-[50px] text-primary_text font-light ">2 Year BBQ</h1>
                <h2 className=" ml-6  text-primary_text text-3xl font-light ">DATE</h2>
              </div>
            <div className=" md:w-[630px] md:h-[750px] 2xl:w-[750px] max-w-[1000px] items-center justify-center relative group  my-20 ">
              <Carousel
                array={bbq}
                currentIndex={bbqIndex}
                setCurrentIndex={setBbqIndex}
                custom={"md:w-[630px] h-[700px] 2xl:w-[750px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0"}
              />
            </div>
            <div>
              <p className="my-8 mx-[35px] 2xl:text-xl tracking-wide text-lg leading-[185%]">
              As we gathered to celebrate a significant milestone, our 2-year anniversary transformed into a spectacular event that brought together the combined efforts of MSC, Fincentari, and IDEA. This occasion was more than just a date on the calendar; it was a convergence of dedication and achievement. The collaborative spirit that binds these entities was on full display during the memorable Company BBQ that ensued.
              </p>
              <p className="my-8 mx-[35px] 2xl:text-xl tracking-wide text-lg leading-[32px]">
              Guided by the meticulous planning of the Marketing team, the event radiated a warm and inviting atmosphere that set the stage for an extraordinary experience. Amidst the laughter and camaraderie, the true stars of the evening emerged: our in-house engineering talents who embraced their roles as BBQ maestros. With spatulas and tongs in hand, they showcased a blend of creativity and culinary finesse that mirrored the innovation that our companies stand for.
              </p>
              <p className="my-8 mx-[35px] 2xl:text-xl tracking-wide text-lg leading-[32px]">
              We witnessed a tangible representation of the values that define us: a dedication to excellence and an unwavering commitment to working together. This celebration was not only a tribute to the past two years of accomplishment but also a testament to the vibrant journey that lies ahead. As we raised our glasses in collective cheer, we saluted the shared successes and anticipated the strides we will make as a united force, fueled by the synergy of MSC, Fincentari, and IDEA. Here's to the road we've traveled and the milestones awaiting us on the horizon.
              </p>
            </div>
            </div>
          </div>
          <div className="culture__child2 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
            <div>
              <h1 className="md:text-[288%] px-2  pt-[30px] text-primary_text font-light">Project EEFI Update</h1>
              <h2 className=" ml-6 text-primary_text text-3xl font-light ">DATE</h2>
            </div>
            <div className=" md:w-[445px] md:h-[350px] 2xl:w-[525px] max-w-[1000px] items-center justify-center relative group  my-10 ">
              <Carousel
                array={eefi}
                currentIndex={eefiIndex}
                setCurrentIndex={setEefiIndex}
                custom={"md:w-[445px] h-[300px] 2xl:w-[525px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
              />
            </div>
            <div>
              <p className="my-5 mx-[5px] 2xl:text-xl tracking-wide  leading-[185%]">
              Would you look at the progress here at East End Food Institute! This collection of site visits show the envelope closure and the installation of underground plumbing work. The envelope closure marks the first step toward waterproofing and structural integrity, while the installation of underground plumbing is a critical infrastructure development for building commercial kitchen programs!
              </p>
            </div>
            </div>
          </div>
          <div className="culture__child3 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
            <div>
              <h1 className="md:text-[285%] px-2 pt-[30px] text-primary_text font-light">Project MSC Update </h1>
              <h2 className=" ml-6  text-primary_text text-3xl font-light">DATE</h2>
            </div>
            <div className=" md:w-[445px] md:h-[475px] 2xl:w-[525px] max-w-[1000px] items-center justify-center relative group  my-10 ">
              <Carousel
                array={msc}
                currentIndex={mscIndex}
                setCurrentIndex={setMscIndex}
                custom={"md:w-[445px] h-[425px] 2xl:w-[525px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
              />
            </div>
            <div>
              <p className="mt-20 mx-[5px] 2xl:text-xl tracking-wide  leading-[185%] text-lg">
              Celebrating 2 Remarkable Years: A Fusion BBQ Extravaganza! Our 2-year anniversary marked a splendid occasion as we united the dedicated forces of MSC, Fincentari, and IDEA for a memorable Company BBQ. 
              </p>
            </div>
            </div>
          </div>
          <div className="culture__child4 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl h-full">
          <div>
            <div>
              <h1 className="md:text-6xl px-5 pt-[50px] text-primary_text font-light ">The Summer of IDEA's 2023 Interns </h1>
              <h2 className=" ml-6 text-primary_text text-3xl font-light ">August 15, 2023</h2>
            </div>
            <div className=" md:w-[630px] md:h-[700px] 2xl:w-[750px] max-w-[1000px] items-center justify-center relative group  my-20 ">
              <Carousel
                array={interns}
                currentIndex={internIndex}
                setCurrentIndex={setInternIndex}
                custom={"md:w-[625px] h-[650px] 2xl:w-[750px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
              />
            </div>
            <div>
              <p className="my-8 mx-[35px] 2xl:text-xl tracking-wide text-lg leading-[185%]">
              Celebrating a fantastic summer with our talented interns! Raiyan, Abrar, and Preo have been rocking their 3rd year interning journey at IDEA. Their passion and dedication have truly made a mark on our interdisciplinary engineering projects. Here's to a summer of growth and innovation!
              </p>
              <p className="my-8 mx-[35px] 2xl:text-xl tracking-wide text-lg leading-[185%]">
              Reflecting on the past few months, it's evident that our exceptional interns have etched their names into IDEA's legacy during their impactful 3rd year internship journey. The dynamic contributions of Raiyan, Abrar, and Preo have undeniably elevated the outcomes of our cross-disciplinary engineering endeavors at IDEA.
              </p>

            </div>
            </div>
          </div>
          <div className="culture__child5 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
            <div>
              <h1 className="md:text-[285%] px-2 pt-[30px] text-primary_text font-light">IDEA Turns 1!</h1>
              <h2 className=" ml-6  text-primary_text text-3xl font-light">April 5, 2022</h2>
            </div>
              <div className="flex items-center justify-center my-10">
                <Image src={'/assets/idea_turns_1.png'} width={500} height={300} className="rounded-xl overflow-hidden"/>
              </div>
              <div className="mt-20 mx-8 text-lg">
                <p>
                Thank you to all of our Team Members, and supporters for being a part of our continued success! We look forward to designing and manigesting more World Class IDEAs!
                </p>

              </div>
            </div>
          </div>
          <div className="culture__child6 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
              <h1 className="md:text-5xl px-5 pt-5 text-primary_text font-light">MSC Groundbreaking</h1>
              <h2 className=" ml-6  text-primary_text text-2xl font-light tracking-wide">March 10, 2022</h2>
              <div className="flex items-center justify-center  my-10 ">
              <Link href={'https://www.facebook.com/reel/661496844905448'} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
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

                </a>
                
                </Link>
              </div>
              <div>
              <p className="my-8 mx-[35px] 2xl:text-xl tracking-wide text-lg leading-[32px]">
              For the past year, IDEA has been providing MEP-FP Engineering services & expertise on MSC’s World’s Largest Cruise Ship Terminal project. We celebrated this achievement with a Groundbreaking Ceremony at the Port of Miami on March 10, 2022!
              </p>

            </div>
            </div>
          </div>
          <div className="culture__child7 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
            <div>
              <h1 className="md:text-[285%] px-2 pt-[30px] text-primary_text font-light">Vinoo is Promoted to Principal!</h1>
              <h2 className=" ml-6  text-primary_text text-3xl font-light tracking-wide">April 5, 2022</h2>
            </div>
              
              <div className="items-center justify-center rounded-xl overflow-hidden my-10">
              <Image src={'/assets/vinoo_promoted.png'} width={500} height={300} className="rounded-xl overflow-hidden"/>
              </div>
              <div >
              <p className="mt-20 mx-[5px] 2xl:text-xl tracking-wide text-lg leading-[185%]">
                On April 5, 2021, Kazi Karim, PE took on the initiative to contribute and improve the Architectural Engineering community by founding IDEA. With the intent to provide client-specific high-quality MEP-FP Engineering services, Kazi is facilitating the growth of IDEAs. He is now the Founder and Managing Principal for IDEA and currently servicing a variety of World Class IDEAs.
                </p>

              </div>
            </div>
          </div>
          <div className="culture__child8 md:p-10 p-5 mt-5 md:mt-0  bg-secondary/40 rounded-xl h-[85%]">
          <div>
            <div>
              <h1 className="md:text-[285%] px-2 pt-[30px] text-primary_text font-light">IDEA is Founded </h1>
              <h2 className="ml-6  text-primary_text text-3xl font-light">April 5, 2021</h2>
            </div>
            <div className="flex items-center justify-center my-10">
              <Image src={'/assets/idea_founded.png'} width={400} height={300} className="rounded-xl overflow-hidden"/>
            </div>
            <div>
              <p className="mt-20 mx-[5px] 2xl:text-xl tracking-wide text-lg leading-[185%]">
              On April 5, 2021 Kazi Karim, PE took on the initiative to contribute to and improve the Architectural Engineering community by founding IDEA. With the intent to provide client-specific high-quality MEP-FP Engineering services, Kazi is facilitating the growth of IDEAs. He is now the Founder and Managing Principal for IDEA and currently servicing a variety of World Class IDEAs.
              </p>
            </div>
            </div>
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
            className="absolute right-[13%] 2xl:right-[29%] md:mt-[11%] 2xl:mt-[7%]">
              <div className="relative  ">
                <Image src={'/assets/light-logo-2.png'} width={400} height={100}/>
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