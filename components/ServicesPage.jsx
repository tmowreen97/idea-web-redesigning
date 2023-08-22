import {React, useState} from "react";
import { motion } from "framer-motion";
import {BsArrowRight} from 'react-icons/bs';


function ServicesPage(){

  const [showMep, setShowMep] = useState(false)
  const [showFS, setShowFS] = useState(false)
  const [showPM, setShowPM] = useState(false)
  return(
    <div className="w-screen h-full bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1 , duration:1}}}
      className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Services</h1>
      </motion.div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1.5 , duration:1}}}
      >
        <div className="grid grid-cols-2 gap-8 items-center justify-center pb-20">
          <motion.div 
          initial = {{x:'50%'}}
          animate={showMep ? {x:0, transition:{ duration:.25}}: ""}
          className="h-full flex">
            <div 
            onClick={()=> setShowMep(!showMep)}
            className="flex items-center justify-center text-center bg-light_bg rounded-xl mx-[15%] w-[500px] hover:cursor-pointer hover:bg-secondary" >
             <h2 className="text-dark_text">MEP & FP</h2> 
            </div>
            <motion.div 
            initial = {{opacity:0}}
            whileInView = {showMep ? {opacity:1, transition: {delay: .25}} : "" }
            animate = { showMep ? {x:[-5, 3, 5, -5], 
              transition:{
                repeat: Infinity
              }} : ""}
            className='text-white text-2xl flex items-center justify-center text-center'>
              <BsArrowRight/>
            </motion.div>
          
          </motion.div>
          
          <motion.div 
          initial={{opacity:0}}
          animate = { showMep ? {opacity:1, transition:{
            duration: .25,
            delay: .5
          }} : {opacity:0}}
          className="flex items-center text-left max-w-[800px] bg-light_bg/80 rounded-xl mx-[15%] p-5">
            <ul>
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
              <li>Project Management</li>
            </ul>
          </motion.div>
          <motion.div 
          initial = {{x:'50%'}}
          animate={showFS ? {x:0, transition:{ duration:.25}}: ""}
          className="h-full flex">
            <div 
            onClick={()=> setShowFS(!showFS)}
            className="flex items-center justify-center text-center bg-light_bg rounded-xl mx-[15%] w-[500px] hover:cursor-pointer hover:bg-secondary" >
             <h2 className="text-dark_text">Facility Support Services</h2> 
            </div>
            <motion.div 
            initial = {{opacity:0}}
            whileInView = {showFS ? {opacity:1} : "" }
            animate = { showFS ? {x:[-5, 3, 5, -5], 
              transition:{
                repeat: Infinity
              }} : ""}
            className='text-white text-2xl flex items-center justify-center text-center'>
              <BsArrowRight/>
            </motion.div>
          
          </motion.div>
          <motion.div 
          initial={{opacity:0}}
          animate = { showFS ? {opacity:1, transition:{
            duration: .25,
            delay: .5
          }} : {opacity:0}}
          className="flex items-center text-left max-w-[800px] bg-light_bg/80 rounded-xl mx-[15%] p-5">
            <ul>
              <li>MEP-FP System Upgrades</li>
              <li>Code Compliance/Upgrades</li>
              <li>Efficiency/Energy Use Evaluations</li>
              <li>Building Management/Automation System Upgrades</li>
              <li>Oil To Gas/Steam Conversion</li>
              <li>Boiler Replacement</li>
              <li>Exhaust System Upgrades</li>
              <li>Condensation/Humidification/Dehumidification Issues</li>
              <li>Code Compliance Upgrades For Normal and Emergency Lighting</li>
              <li>Code Compliance Upgrades For Lighting Controls</li>
              <li>Fire Alarm System Upgrades</li>
              <li>AS-BUILT Documentation</li>
              <li>Existing Conditions Documentation</li>
            </ul>
          </motion.div>
          <motion.div 
          initial = {{x:'50%'}}
          animate={showPM ? {x:0, transition:{ duration:.25}}: ""}
          className="h-full flex">
            <div 
            onClick={()=> setShowPM(!showPM)}
            className="flex items-center justify-center text-center bg-light_bg rounded-xl mx-[15%] w-[500px] hover:cursor-pointer hover:bg-secondary" >
             <h2 className="text-dark_text">Project Management & Expediting Services</h2> 
            </div>
            <motion.div 
            initial = {{opacity:0}}
            whileInView = {showPM ? {opacity:1} : "" }
            animate = { showPM ? {x:[-5, 3, 5, -5], 
              transition:{
                repeat: Infinity
              }} : ""}
            className='text-white text-2xl flex items-center justify-center text-center'>
              <BsArrowRight/>
            </motion.div>
          
          </motion.div>
          <motion.div 
          initial={{opacity:0}}
          animate = { showPM ? {opacity:1, transition:{
            duration: .25,
            delay: .5
          }} : {opacity:0}}
          className="flex items-center text-left max-w-[800px] bg-light_bg/80 rounded-xl mx-[15%] p-5">
            <ul>
              <li>Design Management</li>
              <li>Construction Management</li>
              <li>Project Coordination</li>
              <li>Cost Estimation</li>
              <li>Construction Project Schedule Development</li>
              <li>Sub-Consultant Procurement</li>
              <li>Sub-Consultant Management</li>
              <li>Obtaining Permits & Approvals</li>
              <li>Violation Removals</li>
              <li>Site Safety Coordination & Supervision</li>
              <li>Due-Diligence Studies</li>
              <li>Existing Condition Assessments and Studies</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

    </div>
    
  )
}

export default ServicesPage;







