import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function ContactPage(){
  return(
    <div className="w-screen h-full bg-primary">
      <div className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Contact</h1>
      </div>
      <div className="flex items-center justify-evenly pb-20">
        <div className=" text-xl">
          <div className="pb-5">
            <h2 className="pb-5">IDEA AEC</h2>
            <h2 className="text-2xl">Inter-Disciplinary Engineering Associates, LLC</h2>
            <p className="pb-5">Architectural Engineering Consultants</p>
            <Link href='https://www.google.com/maps/place/Idea/@41.3624549,-73.2686882,17z/data=!3m1!4b1!4m21!1m14!4m13!1m6!1m2!1s0x89e7e32f4acafcc9:0x25866ea4c7e9ca99!2sIdea,+1+Botsford+Hill+Rd,+Botsford,+CT+06404!2m2!1d-73.2661133!2d41.3624509!1m5!1m1!1s0x89e7e32f4acafcc9:0x25866ea4c7e9ca99!2m2!1d-73.2661133!2d41.3624509!3m5!1s0x89e7e32f4acafcc9:0x25866ea4c7e9ca99!8m2!3d41.3624509!4d-73.2661133!16s%2Fg%2F11rxhzx9pl?entry=ttu' legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <p className="hover:text-accent_2">1 Botsford Hill Rd Botsford, CT 06404 </p>
            </a>
            </Link>
            
            <p>Info@IdeaAEC.com</p>
            <p>203-917-7907</p>
          </div>
          <div>
            <p>Please feel free to contact us with any questions or business inquiries!</p>
            <p>You may fill out this form, or contact us by email or phone.</p>
            <p>You can also contact our principals directly:</p>
            <p>Kazi Karim ...</p>
            <p>Vinoo Jankie ...</p>
          </div>
          <div>
            <p>Follow us on our socials!</p>
            <div className="flex justify-evenly py-5 pt-10 rounded-xl text-primary_text/90">
              <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-6 text-4xl">
                <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillInstagram/>
                    </a>
                </Link>
              </div>
              <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-6 text-4xl">
                <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillFacebook/>
                    </a>
                </Link>
              </div>
              <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-6 text-4xl">
                <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin/>
                    </a>
                </Link>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="bg-secondary rounded-xl">
        <div className="items-center justify-center w-[500px] h-[400px] flex ">
              <form className="text-center">
                <h2>Contact Us</h2>
                <div className="m-5">
                  {/* <label>Name:</label> */}
                  <input type="name" className="w-[400px] h-[40px] rounded-xl text-center p-1" placeholder="Name"/>
                </div>
                <div className="m-5">
                  {/* <label>Email:</label> */}
                  <input type="email" className="w-[400px] h-[40px] rounded-xl text-center p-1" placeholder="Email"/>
                </div>
                <div className="m-5">
                  {/* <label>Message:</label> */}
                  <textarea type="text" className="w-[400px] h-[80px] rounded-xl text-center max-h-[100px] p-1" placeholder="Message"/>
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