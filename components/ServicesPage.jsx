import {React, useState} from "react";


function ServicesPage(){

  const [showMep, setShowMep] = useState(false)
  return(
    <div className="w-screen h-full bg-primary">
      <div className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Services</h1>
      </div>
      <div >
        <div className="grid grid-cols-2 gap-10 items-center justify-evenly pb-20">
          <div className="flex items-center justify-center bg-light_bg rounded-xl mx-[15%] h-full">
            <h2 className="text-dark_text">MEP & FP</h2>
          </div>
          <div className="flex items-center text-left max-w-[800px] bg-secondary rounded-xl mx-[15%] p-5">
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
          </div>
          <div className="flex items-center justify-center bg-light_bg rounded-xl mx-[15%] h-full ">
            <h2 className="text-dark_text">Facility Support Services</h2>
          </div>
          <div className="flex items-center text-left max-w-[800px] bg-secondary rounded-xl mx-[15%] p-5">
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
          </div>
          <div className="flex items-center justify-center text-center bg-light_bg rounded-xl mx-[15%] h-full p-2 ">
            <h2 className="text-dark_text">Project Management & Expediting Services</h2>
          </div>
          <div className="flex items-center text-left max-w-[800px] bg-secondary rounded-xl mx-[15%] p-5">
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
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default ServicesPage;







