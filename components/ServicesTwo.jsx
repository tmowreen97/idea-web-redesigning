import { motion } from "framer-motion";

function ServicesTwo(){
  const engineering__services = [
    //Mechanical
    {
      title: 'Mechanical',
      icon: '',
      services: [
        {
          service:"Central Plant Design (Chilled water, Condenser Water, Heating Hot Water and Steam)",
          alt:"mech-1",
        },
        {
          service:"Chiller System Design",
          alt:"mech-2",
        },
        {
          service:"Cooling Tower System Designs",
          alt:"mech-3",
        },
        {
          service:"Boiler (Steam/Water) System Designs",
          alt:"mech-4",
        },
        {
          service:"Central Systems",
          alt:"mech-5",
        },
        {
          service:"Variable Refrigerant Systems",
          alt:"mech-6",
        },
        {
          service:"Energy Modeling",
          alt:"mech-7",
        },
        {
          service:"Building Automation and Energy Management Systems",
          alt:"mech-8",
        },
        {
          service:"Existing Systems and Modernization",
          alt:"mech-9",
        },
        {
          service:"LEED and Sustainable Design",
          alt:"mech-10",
        },
        {
          service:"BIM Modeling",
          alt:"mech-11",
        },
      ],
      icon: "/assets/logos/mech-icon.png",
      width:65,
      color: '#C2F0BD',
      list_color: '#AED8AA'
    },
    //Electrical
    {
      title: 'Electrical',
      icon: '',
      services: [
        {
          service:"Electrical Power Systems",
          alt:"elect-1",
        },
        {
          service:"Fire Alarm Design",
          alt:"elect-2",
        },
        {
          service:"Medium Voltage Systems",
          alt:"elect-3",
        },
        {
          service:"Emergency and Standby Systems",
          alt:"elect-4",
        },
        {
          service:"Uninterruptible Power Systems",
          alt:"elect-5",
        },
        {
          service:"Renewable Energy Systems",
          alt:"elect-6",
        },
        {
          service:"Fire Alarm",
          alt:"elect-7",
        },
        {
          service:"Lighting Design",
          alt:"elect-8",
        },
        {
          service:"Lighting Control Systems",
          alt:"elect-9",
        },
        {
          service:"Short Circuit Studies",
          alt:"elect-10",
        },
        {
          service:"Arc Flash Studies",
          alt:"elect-11",
        },
        {
          service:"Selective Coordination Studies",
          alt:"elect-12",
        },
        {
          service:"LEED and Sustainable Design",
          alt:"elect-13",
        },
        {
          service:"BIM Modeling",
          alt:"elect-14",
        },
      ],
      icon: "/assets/logos/elec-icon.png",
      width:50,
      color: '#C2B7E9',
      list_color: '#AEA4D1'
    },
    //Plumbing
    {
      title: 'Plumbing',
      icon: '',
      services: [
        {
          service:"Potable and Non-Potable Water System",
          alt:"plumb-1",
        },
        {
          service:"Water Pressure Booster System",
          alt:"plumb-2",
        },
        {
          service:"Drainage System including Waste & Storm",
          alt:"plumb-3",
        },
        {
          service:"Plumbing System Retrofitting and Renovation",
          alt:"plumb-4",
        },
        {
          service:"Flood Mitigation Design",
          alt:"plumb-5",
        },
        {
          service:"Rainwater Harvesting System",
          alt:"plumb-6",
        },
        {
          service:"Stormwater Detention/Retention Design",
          alt:"plumb-7",
        },
        {
          service:"Commercial Kitchen Design",
          alt:"plumb-8",
        },
        {
          service:"Natural Gas System Design",
          alt:"plumb-9",
        },
        {
          service:"Gas Pressure Booster System ",
          alt:"plumb-10",
        },
        {
          service:"Liquid Propane (LP) Design",
          alt:"plumb-11",
        },
        {
          service:"Water Conservation Design",
          alt:"plumb-12",
        },
        {
          service:"LEED and Sustainable Design",
          alt:"plumb-13",
        },
      ],
      icon: "/assets/logos/plumb-icon.png",
      width:50,
      color: '#EDB87A',
      list_color: '#D5A56D'
    },
  ]
  const engineering__services_two = [
    //Fire Protection
    {
      title: 'Fire Protection',
      icon: '',
      services: [
        {
          service:"Wet Fire Sprinkler System Design",
          alt:"fp-1",
        },
        {
          service:"Dry Fire Sprinkler Design",
          alt:"fp-2",
        },
        {
          service:"Hydraulic Calculations",
          alt:"fp-3",
        },
        {
          service:"Special Agent Design",
          alt:"fp-4",
        },
        {
          service:"Fire Pump and standpipe System",
          alt:"fp-5",
        },
      ],
      icon: "/assets/logos/fp-icon.png",
      width:60,
      color: '#F89090',
      list_color: '#DF8181'
    },
    //Low Voltage
    {
      title: 'Low Voltage',
      icon: '',
      services: [
        {
          service:"Copper Systems Telecom Design",
          alt:"lv-1",
        },
        {
          service:"Fiber Systems Telecom Design",
          alt:"lv-1",
        },
        {
          service:"Security Systems",
          alt:"lv-1",
        },
        {
          service:"Wireless Heat Mapping",
          alt:"lv-1",
        },
      ],
      icon: "/assets/logos/lowvolt-icon.png",
      width:60,
      color: '#ADDEDF',
      list_color: '#9BC7C8'
    }
  ]
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
            <h1 className="text-dark_text bg-light_bg rounded-2xl p-7 xl:m-10 my-2 2xl:text-7xl lg:text-5xl text-4xl">Engineering Services</h1>
          </div>
          {/* Subsections*/}
          {/* actual grid without title */}
          <div id="subsection" className="xl:grid xl:grid-cols-3 xl:gap-10 xl:p-0 xl:mx-[5%] justify-center items-center">
            {engineering_services.map((service)=> {
              return(
                // **
                <div className="xl:h-[675px] flex justify-center text-dark_text p-5 my-5 rounded-2xl xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                  <div className="justify-center">
                    <div className="items-center justify-center flex">
                      <h1 className="xl:text-4xl text-3xl p-5">{service.title}</h1>
                    </div>
                    <div className="2xl:w-[400px] xl:w-[345px] lg:w-[325px] 2xl:h-[450px] items-center flex justify-center rounded-2xl p-8 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div className="">
                      <ul className="items-center justify-center">
                        {service.services.map((list_item)=> {
                          return(
                            <li className="list-disc xl:text-lg">
                              <p className="text-dark_text lg:leading-6 xl:leading-7">{list_item}</p>
                            </li>
                            
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
          <div id='subsection' className="xl:grid xl:grid-cols-2 items-center xl:gap-10 xl:p-0 xl:mx-[20%] xl:m-10 justify-center">
            {engineering_services_two.map((service)=> {
              return(
                <div className="flex xl:h-[350px] justify-center text-dark_text p-5 my-5 rounded-2xl xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                  <div className="justify-center">
                    <div className="items-center justify-center flex">
                      <h1 className="text-3xl xl:text-4xl p-5">{service.title}</h1>
                    </div>
                    <div className="2xl:w-[400px] xl:h-[200px] flex justify-center rounded-2xl p-5 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div>
                      <ul className=" items-center justify-center">
                        {service.services.map((list_item)=> {
                          return(
                            <li className="list-disc xl:text-lg">
                              <p className="text-dark_text lg:leading-6 xl:leading-7">{list_item}</p>
                            </li>
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
        <div id='extraservices' className="xl:grid xl:grid-cols-2 xl:gap-10 mx-[5%] justify-center font-light">
          {/* TITLES */}
          {/* Life Cycle */}
          <div className="">
            <div className="flex items-center justify-center">
              <h1 className="text-dark_text bg-light_bg rounded-2xl p-5 m-10 xl:w-[650px] lg:text-6xl text-4xl text-center">{life_cycle_services.title}</h1>
            </div>
            <div className="justify-center items-center flex ">
              <div className="flex justify-center 2xl:h-[550px] rounded-2xl 2xl:mx-10 p-5  my-5 2xl:my-0 xl:w-[500px] w-[375px]" style={{backgroundColor: `${life_cycle_services.color}`}}>
              <div className="2xl:w-[500px] flex items-center justify-center rounded-2xl p-5 xl:m-10 shadow-inner font-medium" style={{backgroundColor: `${life_cycle_services.list_color}`}}>
                <div>
                  <ul className="items-center justify-center">
                  {life_cycle_services.services.map((service)=> {
                    return(
                      <li className="list-disc xl:text-lg">
                        <p className="text-dark_text text-lg lg:leading-6 xl:leading-7">{service}</p>
                      </li>
                    )
                  })}
                </ul>
                </div>
                
              </div>
              </div>  
            </div>
          </div>
          {/* Construction */}
          <div className="justify-center">
          <div className="flex justify-center items-center">
            <h1 className="text-dark_text bg-light_bg rounded-2xl p-5 m-10 xl:w-[650px] lg:text-6xl text-4xl text-center">{construction_services.title}</h1>
          </div>
            <div className="justify-center flex ">
              <div className="flex justify-center 2xl:h-[550px] rounded-2xl 2xl:mx-10 p-5  my-5 2xl:my-0 xl:w-[500px] w-[375px]" style={{backgroundColor: `${construction_services.color}`}}>
                <div className="2xl:w-[475px] flex justify-center rounded-2xl p-5 xl:m-10 shadow-inner font-medium" style={{backgroundColor: `${life_cycle_services.list_color}`}}>
                  <div className="flex ">
                    <ul className="justify-center items-center">
                  {construction_services.services.map((service)=> {
                    return(
                      <li className="list-disc text-lg lg:leading-6 xl:leading-7">{service}</li>
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
