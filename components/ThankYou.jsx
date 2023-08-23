import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import {BsArrowReturnRight, BsArrowRight} from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

function ThankYou(){
  return(
    <div className="w-screen h-full bg-primary font-light">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:2, delay:1} }}
      className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Contact</h1>
      </motion.div>
      <div className="md:grid md:grid-cols-2 items-center justify-center px-20">
        {/* col/row 1/1 area */}
        <div className=" text-xl flex rounded-xl m-3 pt-2 items-center justify-center ">
          {/* Icons on left handle */}
          <div className="rounded-xl p-4">
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2}}}
              className="mb-2 "
            >
              <Image src={'/assets/clip-1.png'} width={84} height={82} className=""/>
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2.5}}}
              className="mb-2"
            >
            <Image src={'/assets/clip-2.png'} width={80} height={80}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:3}}}
              className="mb-3"
            >
            <Image src={'/assets/clip-3.png'} width={80} height={80}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:3.5}}}
            >
            <Image src={'/assets/clip-4.png'} width={82} height={82}/>              
            </motion.div>

          </div>
          {/* col/row 1/1 text */}
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:2, delay:1.5} }}
          className="">
            <div className="pb-[75px]">
              <div className="pb-[75px]">
                <div className="flex ">
                  <h2 className="text-8xl">IDEA</h2>
                  <h2 className="text-2xl pt-14 ml-3">AEC</h2>
                </div>
                <h2 className="text-2xl">Inter-Disciplinary Engineering Associates, LLC</h2>
                <p className="">Architectural Engineering Consultants</p>
              </div>
              <p>Monroe, Connecticut | Miami, Florida</p>
              <p className="text-lg">Info@IdeaAEC.com</p>
              <p className="text-lg ">FL: 954-295-2125</p>
              <p className="text-lg ">CT: 203-917-7907</p>
            </div>
            <div>
              <p className="text-lg">Please feel free to contact us with any questions or business inquiries.</p>
              <p className="text-lg">You may fill out this form, or contact us by email or phone.</p>
            </div>
            
          </motion.div>
          
        </div>
        <div className="text-center justify-evenly mt-[-25px]">
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:2, delay:1.5} }}
          className="text-2xl m-2 mx-8  p-8 bg-secondary rounded-xl text-left  items-center justify-center">
            <h1 className="">Thank you!</h1>
            <h1>We look forward to empowering your ideas.</h1>
          </motion.div>
          <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1, transition:{delay:2}}}
          className=" text-primary_text mt-10"
          >
            <div className="mr-2">
              <h1 className="p-2 text-lg">In the meantime, check out what we've been up to:</h1>
            </div>
            <div className="flex justify-center items-center gap-10 mt-5">
              <motion.div
              animate={{x:[-3,2,2,-3], opacity:1}}
              transition={{
                // duration: "9",
                delay : 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
              >
                <BsArrowRight className="text-3xl text-left"/>
              </motion.div>
              <button className="bg-button_bg p-3 rounded-xl text-dark_text hover:bg-accent_2 hover:text-primary_text text-xl">
              <Link href={'/culture'}>Culture</Link>
            </button>
            </div>
            
          </motion.div>

        </div>
      </div>
      <div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:2.5} }}
        className="flex justify-evenly p-14 pb-24 rounded-xl text-primary_text/90">
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-4xl">
            <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram/>
                </a>
            </Link>
          </div>
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-4xl">
            <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <AiFillFacebook/>
                </a>
            </Link>
          </div>
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-4xl">
            <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin/>
                </a>
            </Link>
          </div>
        </motion.div>
        
      </div>       
    </div>
  )
}

export default ThankYou;

