import { motion } from "framer-motion";

function ServicesTwo(){
  const engineering_services = [
    //Mechanical
    {
      title: 'Mechanical',
      icon: '',
      services: [
        "Central Plant Design (Chilled water, Condenser Water, Heating Hot Water and Steam)",
        "Chiller System Design",
        "Cooling Tower System Designs",
        "Boiler (Steam/Water) System Designs",
        "Central Systems",
        "Variable Refrigerant Systems",
        "Energy Modeling",
        "Building Automation and Energy Management Systems",
        "Existing Systems and Modernization",
        "LEED and Sustainable Design",
        "BIM Modeling",
      ],
      color: '#C2F0BD',
      list_color: '#AED8AA'
    },
    //Electrical
    {
      title: 'Electrical',
      icon: '',
      services: [
        "Electrical Power Systems",
        "Fire Alarm Design",
        "Medium Voltage Systems",
        "Emergency and Standby Systems",
        "Uninterruptible Power Systems",
        "Renewable Energy Systems",
        "Fire Alarm",
        "Lighting Design",
        "Lighting Control Systems",
        "Short Circuit Studies",
        "Arc Flash Studies",
        "Selective Coordination Studies",
        "LEED and Sustainable Design",
        "BIM Modeling",
      ],
      color: '#C2B7E9',
      list_color: '#AEA4D1'
    },
    //Plumbing
    {
      title: 'Plumbing',
      icon: '',
      services: [
        "Potable and Non-Potable Water System",
        "Water Pressure Booster System",
        "Drainage System including Waste & Storm", 
        "Plumbing System Retrofitting and Renovation",
        "Flood Mitigation Design", 
        "Rainwater Harvesting System",
        "Stormwater Detention/Retention Design ",
        "Commercial Kitchen Design",
        "Natural Gas System Design",
        "Gas Pressure Booster System ",
        "Liquid Propane (LP) Design",
        "Water Conservation Design",
        "LEED and Sustainable Design",
      ],
      color: '#EDB87A',
      list_color: '#D5A56D'
    },
  ]
  const engineering_services_two = [
    //Fire Protection
    {
      title: 'Fire Protection',
      icon: '',
      services: [
        "Wet Fire Sprinkler System Design",
        "Dry Fire Sprinkler Design",
        "Hydraulic Calculations",
        "Special Agent Design",
        "Fire Pump and standpipe System",
      ],
      color: '#F89090',
      list_color: '#DF8181'
    },
    //Low Voltage
    {
      title: 'Low Voltage List',
      icon: '',
      services: [
        "Copper Systems Telecom Design ",
        "Fiber Systems Telecom Design ",
        "Security Systems",
        "Wireless Heat Mapping",
      ],
      color: '#ADDEDF',
      list_color: '#9BC7C8'
    }
  ]

  const life_cycle_services = {
    title: 'Building Life Cycle Services',
    services: [
      "MEP-FP System Upgrades",
      "Code Compliance/Upgrades",
      "Efficiency/Energy Use Evaluations",
      "Building Management/Automation System Upgrades",
      "Oil To Gas/Steam Conversion",
      "Boiler Replacement and Upgrades",
      "Exhaust System Upgrades",
      "Condensation / Humidification / Dehumidification Issues",
      "Code Compliance Upgrades For Normal and Emergency Lighting",
      "Code Compliance Upgrades For Lighting Controls",
      "Fire Alarm System Upgrades",
      "AS-BUILT Documentation",
      "Existing Conditions Documentation",
    ],
    color: '#BBAFDA',
    list_color: '#b4a7d6'
  }

  const construction_services = {
    title: 'Project Management & Construction Services',
    services: [
      "Owner's Representation",
      "Design Management",
      "Construction Management Assistance",
      "Project Coordination",
      "Sub-Consultant Procurement",
      "Sub-Consultant Management",
      "Cost Estimation",
      "Construction Project Schedule Development",
      "Construction Bid Procurement",
      "Site Safety Coordination & Supervision",
    ],
    color: '#BBAFDA',
    list_color: '#b4a7d6'
  }
  return(
    <div className="w-screen h-full bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1 , duration:1}}}
      className="lg:p-20 pt-20  pb-10">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-center lg:text-left tracking-wide">Services</h1>
      </motion.div>
      <div className="pb-20">
        {/* Engineering Services Section */}
        <div className="font-light">
          {/* Title */}
          <div className="items-center justify-center flex">
            <h1 className="text-dark_text bg-light_bg rounded-xl p-7 m-10 2xl:text-6xl text-4xl">Engineering Services</h1>
          </div>
          {/* Subsections*/}
          <div className="grid 2xl:grid-cols-3 grid-cols-1 gap-10 2xl:p-0 2xl:mx-[5%] justify-center items-center ">
            {engineering_services.map((service)=> {
              return(
                <div className="flex 2xl:h-[550px] items-center justify-center text-dark_text p-5 my-5 2xl:my-0 rounded-xl 2xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                  <div className="justify-center">
                    <div className="items-center justify-center flex">
                      <h1 className="text-3xl p-5">{service.title}</h1>
                    </div>
                    <div className="2xl:w-[400px] flex justify-center rounded-xl p-5 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div>
                      <ul className=" items-center justify-center">
                        {service.services.map((list_item)=> {
                          return(
                            <li className="list-disc text-lg">{list_item}</li>
                          )
                        })}
                      </ul>
                    </div>
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Engineering Services Section TWO */}
        <div className="font-light">
          {/* Subsections*/}
          <div className="2xl:grid 2xl:grid-cols-2 grid-cols-1 items-center gap-10 2xl:p-0 2xl:mx-[20%] 2xl:m-10 justify-center">
            {engineering_services_two.map((service)=> {
              return(
                <div className="flex 2xl:h-[350px] justify-center text-dark_text p-5 my-5 2xl:my-0 rounded-xl 2xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                  <div className="justify-center">
                    <div className="items-center justify-center flex">
                      <h1 className="text-3xl p-5">{service.title}</h1>
                    </div>
                    <div className="2xl:w-[400px] flex justify-center rounded-xl p-5 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div>
                      <ul className=" items-center justify-center">
                        {service.services.map((list_item)=> {
                          return(
                            <li className="list-disc text-lg">{list_item}</li>
                          )
                        })}
                      </ul>
                    </div>
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Life Cycle + Construction */}
        <div className="2xl:grid 2xl:grid-cols-2 gap-x-10 mx-[5%] justify-center items-center font-light">
          {/* TITLES */}
          {/* Life Cycle */}
          <div className=" justify-center items-center">
            <div className="flex items-center justify-center">
              <h1 className="text-dark_text bg-light_bg rounded-xl p-5 m-10 w-[650px] 2xl:text-6xl text-4xl text-center">{life_cycle_services.title}</h1>
            </div>
            <div className="justify-center items-center ">
              <div className="flex justify-center 2xl:h-[550px] rounded-xl 2xl:mx-10 p-5  my-5 2xl:my-0 2xl:w-auto w-[375px]" style={{backgroundColor: `${life_cycle_services.color}`}}>
              <div className="w-[500px] flex items-center justify-center rounded-xl p-5 m-10 shadow-inner font-medium" style={{backgroundColor: `${life_cycle_services.list_color}`}}>
                <ul className="items-start justify-center">
                  {life_cycle_services.services.map((service)=> {
                    return(
                      <li className="list-disc text-lg">{service}</li>
                    )
                  })}
                </ul>
              </div>
              </div>  
            </div>
          </div>
          {/* Construction */}
          <div className=" justify-center items-center">
          <div className="flex items-center justify-center">
            <h1 className="text-dark_text bg-light_bg rounded-xl p-5 m-10 w-[650px] 2xl:text-6xl text-4xl text-center">{construction_services.title}</h1>
          </div>
            <div className="justify-center ">
              <div className="flex justify-center 2xl:h-[550px] rounded-xl 2xl:mx-10 p-5  my-5 2xl:my-0 2xl:w-auto w-[375px]" style={{backgroundColor: `${construction_services.color}`}}>
                <div className="w-[475px] flex justify-center rounded-xl p-5 m-10 shadow-inner font-medium" style={{backgroundColor: `${life_cycle_services.list_color}`}}>
                  <div className="flex ">
                    <ul className="justify-center items-center">
                  {construction_services.services.map((service)=> {
                    return(
                      <li className="list-disc text-lg">{service}</li>
                    )
                  })}
                </ul>
                  </div>
                
              </div>
              </div>
              
            </div>
           

          </div>
        </div>
      </div>
    </div>
    
  )
}


export default ServicesTwo;
