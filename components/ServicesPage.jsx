import {React, useState, useRef, useEffect, useCallback} from "react";
import { motion, useInView } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {LiaLongArrowAltRightSolid} from 'react-icons/lia';



function ServicesPage(){
  const [showMep, setShowMep] = useState(false)
  const [showFS, setShowFS] = useState(false)
  const [showPM, setShowPM] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref)

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

  const isBreakPoint = useMediaQuery(1250)

  useEffect(() => {
    mouse()
  }, [isInView])

  function mouse (){
    myStopFunction();
    myFunction();
  }
  function myFunction() {
    let myVar = setTimeout(function(){
        setShowMep(true)
        setShowFS(true)
        setShowPM(true)
      }, 2500);
  }   
  function myStopFunction() {
      if(typeof myVar != 'undefined'){
          clearTimeout(myVar);
      }
  }


  const name = {
    hidden:{ opacity:1 },
    visible: {
      opacity: [1, 0.85, 0.85, 1],
      x: [0, 40, 40, 0],
      transition: {
        duration: .5,
      }
    }
  }


  const arrow = {
    hidden:{ opacity:1 },
    visible: {
      opacity:[0,1],
      x: [0,8,5,0],
      transition: {
        delay: .5,
        duration: .5,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  }

  const arrow_resp = {
    hidden:{ opacity:1 },
    visible: {
      opacity:[0,1],
      y: [0,8,5,0],
      transition: {
        delay: .5,
        duration: .5,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  }

  const list = {
    hidden: {opacity:0},
    visible: {
      opacity: 1,
      transition: {
        delay: .25,
        duration: .5
      }
    }
  }

  return(
    <div className="w-screen h-full bg-primary pb-20" ref={ref}>
      <motion.div 

      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1 , duration:1}}}
      className="lg:p-20 pt-20  pb-10">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-center lg:text-left tracking-wide">Services</h1>
      </motion.div>
      <div className="flex items-center justify-center">
        <div>

<motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{ delay: 1.5, duration:1}}}
      className="">
        {/* MEP & FP SECTION */}
        <div className="w-screen h-full xl:flex items-center justify-center xl:justify-evenly p-10">
          {/* MEP & FP NAME */}
          <motion.div 
          variants={isBreakPoint ? "" : name }
          initial="hidden"
          animate={showMep ? "visible" : "hidden"}
          onClick={()=> setShowMep(!showMep)}
          className="bg-light_bg lg:w-[550px] lg:h-[425px] md:w-[400px] w-[314px] h-[250px] lg:my-20 my-10 rounded-xl hover:cursor-pointer hover:bg-secondary"
          >
            <div className="absolute ">
              <div className="relative w-[200px] lg:w-[208px] lg:left-[80%] left-[40%]">
                <p className="text-dark_text lg:text-5xl text-4xl my-[40%] lg:my-[73%] tracking-wide lg:leading-[55px] lg:text-justify  ">MEP & FP Services</p>
              </div>
            </div>
          </motion.div>
          {/* MEP FP ARROW */}
          <motion.div 
            variants={isBreakPoint ? arrow_resp : arrow }
            initial="hidden"
            animate={showMep ? "visible" : ""}
            className={showMep ? "flex  items-center justify-center md:justify-start md:items-start my-10 lg:my-0" : "hidden"}
          >
            <BsArrowRight className="text-white lg:text-7xl text-4xl xl:rotate-0 rotate-90 "/>
          </motion.div>
          
          {/* MEP & FP LIST */}
          <motion.div 
          variants={list}
          initial="hidden"
          animate={showMep ? "visible" : ""}
          className={showMep ? "bg-light_bg/80 lg:w-[575px] lg:h-[475px] w-[314px] h-[515px]  rounded-xl" : "hidden"}>
            <div className="absolute">
              <div className="relative lg:w-[475px] w-[250px] left-[15%] my-[10%]">
                <ul className="list-disc lg:text-xl text-lg" >
                  <li>Mechanical (HVAC) Design</li>
                  <li>Electrical Design</li>
                  <li>Plumbing Design</li>
                  <li>Fire Protection / Fire Suppression System Design</li>
                  <li>Fire Alarm System Design</li>
                  <li>Lighting & Lighting Control Design</li>
                  <li>Peer Review</li>
                  <li>Due-Diligence Studies</li>
                  <li>Existing Condition Assessments and Studies</li>
                  <li>Energy Modeling</li>
                  <li>Short circuit, Selective Coordination, and Arc Flash Studies</li>
                  <li>Construction Administration</li>
                </ul>
                {/* <p className="text-dark_text text-5xl  my-[90%] ">MEP & FP</p> */}
            </div>
          </div>
          </motion.div>
        </div>
        {/* FACILITY SUPPORT SECTION */}
        <div className="w-screen h-full xl:flex items-center justify-evenly p-10">
          {/* FACILITY SUPPORT NAME */}
          <motion.div 
          variants={isBreakPoint ? "" : name }
          initia="hidden"
          animate={showFS ? "visible" : "hidden"}
          onClick={()=> setShowFS(!showFS)}
          className="bg-light_bg lg:w-[550px] lg:h-[425px] md:w-[400px] w-[314px] h-[250px] lg:my-20 my-10 rounded-xl hover:cursor-pointer hover:bg-secondary">
            <div className="absolute">
              <div className="relative lg:left-[90%] left-[40%] w-[200px]" >
                <p className="text-dark_text lg:text-5xl text-4xl lg:my-[58%] my-[33%] tracking-wide lg:leading-[55px] lg:w-[330px]  lg:text-justify ">Facility Support Services</p>
              </div>
            </div>
          </motion.div>
          {/* FACILITY ARROW */}
          <motion.div
            variants={isBreakPoint ? arrow_resp : arrow }
            initial="hidden"
            animate={showFS ? "visible" : ""}
            className={showFS ? "flex items-center justify-center md:justify-start md:items-start my-10 lg:my-0" : "hidden"}
            >
            <BsArrowRight className="text-white lg:text-7xl text-4xl xl:rotate-0 rotate-90  "/>
          </motion.div>
          {/* FACILITY SUPPORT LIST */}
          <motion.div 
          variants={list}
          initial="hidden"
          animate={showFS ? "visible" : ""}
          className={showFS ? "bg-light_bg/80 lg:w-[575px] lg:h-[500px] w-[325px] h-[645px] rounded-xl" : "hidden"}>
            <div className="absolute">
              <div className="relative lg:w-[475px] w-[250px] left-[15%] my-[7%]">
                <ul className="list-disc lg:text-xl text-lg" >
                  <li>MEP-FP System Upgrades</li>
                  <li>Code Compliance/Upgrades</li>
                  <li>Efficiency/Energy Use Evaluations</li>
                  <li>Building Management/Automation System Upgrades</li>
                  <li>Oil To Gas/Steam Conversion</li>
                  <li>Boiler Replacement and Upgrades</li>
                  <li>Exhaust System Upgrades</li>
                  <li>Condensation / Humidification / Dehumidification Issues</li>
                  <li>Code Compliance Upgrades For Normal and Emergency Lighting</li>
                  <li>Code Compliance Upgrades For Lighting Controls</li>
                  <li>Fire Alarm System Upgrades</li>
                  <li>AS-BUILT Documentation</li>
                  <li>Existing Conditions Documentation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        {/* PROJECT MANAGEMENT & EXPEDITING SECTION */}
        <div className="w-screen h-full xl:flex items-center justify-evenly p-10">
          {/* PROJECT MANAGEMENT & EXPEDITING NAME */}
          <motion.div 
          variants={isBreakPoint ? "" : name }
          initia="hidden"
          animate={showPM ? "visible" : "hidden"}
          onClick={()=> setShowPM(!showPM)}
          className="bg-light_bg  lg:w-[550px] lg:h-[425px] md:w-[400px] w-[314px] h-[250px] rounded-xl lg:my-20 my-10 hover:cursor-pointer hover:bg-secondary">
            <div className="absolute">
              <div className="relative lg:left-[35%] left-[5%]">
                <h3 className="text-dark_text lg:text-5xl text-4xl tracking-wide lg:w-[330px] w-[300px] lg:my-[30%] my-[15%] lg:leading-[55px] lg:text-justify">Project Management & Construction Services</h3>
              </div>
            </div>
          </motion.div>
          {/* PROJECT MANAGEMENT ARROW */}
          <motion.div
            variants={isBreakPoint ? arrow_resp : arrow }
            initial="hidden"
            animate={showPM ? "visible" : ""}
            className={showPM ? "flex items-center justify-center md:justify-start md:items-start my-10 lg:my-0" : "hidden"}
          >
            <BsArrowRight className="text-white lg:text-7xl text-4xl xl:rotate-0 rotate-90 "/>
          </motion.div>
          {/* PROJECT MANAGEMENT LIST */}
          <motion.div
          variants={list}
          initial="hidden"
          animate={showPM ? "visible" : ""}
          className={showPM ? "bg-light_bg/80 lg:w-[575px] lg:h-[475px] w-[314px] h-[415px] rounded-xl " : "hidden"}>
            <div className="absolute">
              <div className="relative lg:w-[475px] w-[250px] left-[15%] lg:my-[20%] my-[15%]">
            <ul className="list-disc lg:text-xl text-lg" >
              <li>Owner's Representation</li>
              <li>Design Management</li>
              <li>Construction Management Assistance</li>
              <li>Project Coordination</li>
              <li>Sub-Consultant Procurement</li>
              <li>Sub-Consultant Management</li>
              <li>Cost Estimation</li>
              <li>Construction Project Schedule Development</li>
              <li>Construction Bid Procurement</li>
              <li>Site Safety Coordination & Supervision</li>
            </ul>
          </div>
          </div>
          </motion.div>
        </div>
      </motion.div>

        </div>


      </div>
      
      
      

    </div>
    
  )
}

export default ServicesPage;







