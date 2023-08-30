import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

function ContactPage(){
  return(
    <div className="w-screen h-full bg-primary font-light">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:2, delay:1} }}
      className="lg:p-20 pt-20 pb-10 px-5 ">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-left tracking-wide">Contact</h1>
      </motion.div>
      <div className="md:grid md:grid-cols-2 items-center justify-center lg:px-20 ">
        {/* col/row 1/1 area */}
        <div className=" text-xl flex rounded-xl m-3 pt-2 items-center justify-center ">
          {/* Icons on left handle */}
          <div className="  rounded-xl p-4">
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2}}}
              className="lg:mb-2 mb-5"
            >
              <Image src={'/assets/clip-1.png'} width={84} height={82} className=""/>
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2.5}}}
              className="lg:mb-2 mb-5"
            >
            <Image src={'/assets/clip-2.png'} width={80} height={80}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:3}}}
              className="lg:mb-3 mb-6"
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
          animate={{opacity:1, transition:{duration:2, delay:1.5}}}
          className="">
            <div className="lg:pb-[75px] pb-5">
              <div className="lg:pb-[75px] pb-5">
                <div className="flex pb-1">
                  <h2 className="lg:text-8xl text-6xl">IDEA</h2>
                  <h2 className="lg:text-2xl text-lg lg:pt-14 pt-8 ml-3">AEC</h2>
                </div>
                <h2 className="lg:text-2xl text-lg">Inter-Disciplinary Engineering Associates, LLC</h2>
                <p className="lg:text-2xl text-lg">Architectural Engineering Consultants</p>
              </div>
              <p className="text-lg">Monroe, Connecticut | Miami, Florida</p>
              <p className="text-lg">info@IdeaAEC.com</p>
              <p className="text-lg ">FL: 954-295-2125</p>
              <p className="text-lg ">CT: 203-917-7907</p>
            </div>
            <div>
              <p className="lg:text-lg text-sm">Please feel free to contact us with any questions or business inquiries.</p>
              <p className="lg:text-lg text-sm">You may fill out this form, or contact us by email or phone.</p>
            </div>
            
          </motion.div>
          
        </div>
        {/* col/row 2/1 form */}
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:1.5}}}
        className="items-center justify-center flex mt-10 lg:mt-0 ">
        <div className="lg:w-[500px] lg:h-[400px] w-[350px] h-[385px] bg-secondary rounded-xl lg:ml-20">
          <form 
          className="text-center items-center justify-center mt-[3%]" 
          action="https://formsubmit.co/info@ideaaec.com" 
          method="POST">
            <h2>Contact Us</h2>
            <div className="m-5">
              {/* <label>Name:</label> */}
              <input 
              type="name" 
              name="name" 
              className="md:w-[400px] w-[300px] h-[40px] rounded-xl text-center p-1" 
              placeholder="Name"
              required/>
            </div>
            <div className="m-5">
              {/* <label>Email:</label> */}
              <input 
              type="email" 
              name="email" 
              className="md:w-[400px] w-[300px] h-[40px] rounded-xl text-center p-1 border-none" 
              placeholder="Email"
              required/>
            </div>
            <div className="m-5">
              {/* <label>Message:</label> */}
              <textarea 
              type="text" 
              name="message" 
              className="md:w-[400px]  w-[300px] md:h-[80px] rounded-xl text-center max-h-[100px] p-1 border-none" 
              placeholder="Message"
              required/>
            </div>
            <input type="hidden" name="_next" value="http://localhost:3000/thank-you"></input>
            {/* <input type="hidden" name="_captcha" value="false"></input> */}
            <div className="text-center items-center justify-center flex ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80 rounded-xl p-2 px-5 shadow-xl text-primary_text">
                <button type='submit'>Send</button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
      </div>
      <div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:2.5} }}
        className="flex justify-evenly p-14 pb-24 rounded-xl text-primary_text/90">
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-4xl mx-2">
            <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram/>
                </a>
            </Link>
          </div>
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-4xl mx-2">
            <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <AiFillFacebook/>
                </a>
            </Link>
          </div>
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-4xl mx-2">
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

export default ContactPage;


