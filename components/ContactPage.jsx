import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

function ContactPage(){
  return(
    <div className="w-screen h-full bg-primary">
      <div className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Contact</h1>
      </div>
      <div className="md:flex items-center justify-evenly pb-20">
        <div className=" text-xl flex">
          <div className="mr-10">
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:1}}}
              className="mb-2"
            >
              <Image src={'/assets/clip-1.png'} width={100} height={100}/>
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:1.5}}}
              className="mb-2"
            >
            <Image src={'/assets/clip-2.png'} width={100} height={100}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2}}}
              className="mb-2"
            >
            <Image src={'/assets/clip-3.png'} width={100} height={100}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2.5}}}
            >
            <Image src={'/assets/clip-4.png'} width={100} height={100}/>              
            </motion.div>

          </div>
          <div>
            <div className="pb-5">
              <div className="flex pb-5">
                <h2 className="text-6xl">IDEA</h2>
                <h2 className="text-2xl pt-6 ml-2">AEC</h2>
              </div>
              
              <h2 className="text-2xl">Inter-Disciplinary Engineering Associates, LLC</h2>
              <p className="pb-5">Architectural Engineering Consultants</p>
              <p className="">1 Botsford Hill Rd Botsford, CT 06404 </p>
              <p>Info@IdeaAEC.com</p>
              <p>203-917-7907</p>
            </div>
            <div>
              <p>Please feel free to contact us with any questions or business inquiries.</p>
              <p>You may fill out this form, or contact us by email or phone.</p>
              <p>You can also contact our principals directly:</p>
              <p>Kazi Karim ...</p>
              <p>Vinoo Jankie ...</p>
            </div>
            <div>
              <p>Follow us on our socials!</p>
              <div className="flex justify-evenly py-5 pt-10 rounded-xl text-primary_text/90">
                <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-6 text-4xl">
                  <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram/>
                      </a>
                  </Link>
                </div>
                <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-6 text-4xl">
                  <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <AiFillFacebook/>
                      </a>
                  </Link>
                </div>
                <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-6 text-4xl">
                  <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin/>
                      </a>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        <div className="bg-secondary rounded-xl">
        <div className="items-center justify-center md:w-[500px] md:h-[400px] flex ">
              <form className="text-center">
                <h2>Contact Us</h2>
                <div className="m-5">
                  {/* <label>Name:</label> */}
                  <input type="name" className="md:w-[400px] h-[40px] rounded-xl text-center p-1" placeholder="Name"/>
                </div>
                <div className="m-5">
                  {/* <label>Email:</label> */}
                  <input type="email" className="md:w-[400px] h-[40px] rounded-xl text-center p-1" placeholder="Email"/>
                </div>
                <div className="m-5">
                  {/* <label>Message:</label> */}
                  <textarea type="text" className="md:w-[400px] md:h-[80px] rounded-xl text-center max-h-[100px] p-1" placeholder="Message"/>
                </div>
                <div className="text-center items-center justify-center flex ">
                  <div className="bg-tertiary/80 hover:bg-accent_2/80 rounded-xl p-2 px-5 shadow-xl text-primary_text">
                    <button type='submit'>Send</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;