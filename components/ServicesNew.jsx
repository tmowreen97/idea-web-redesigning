import { motion } from "framer-motion";

function ServicesNew(){

  const engineering_services = [
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
  const engineering_services_two = [
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
  const life_cycle_services = {
    title: 'Building Life Cycle Services',
    services: [
      {
        service:"MEP-FP System Upgrades",
        alt:"life-cycle-1",
      },
      {
        service:"Code Compliance/Upgrades",
        alt:"life-cycle-2",
      },
      {
        service:"Efficiency/Energy Use Evaluations",
        alt:"life-cycle-3",
      },
      {
        service:"Building Management/Automation System Upgrades",
        alt:"life-cycle-4",
      },
      {
        service:"Oil To Gas/Steam Conversion",
        alt:"life-cycle-5",
      },
      {
        service:"Boiler Replacement and Upgrades",
        alt:"life-cycle-6",
      },
      {
        service:"Exhaust System Upgrades",
        alt:"life-cycle-7",
      },
      {
        service:"Condensation / Humidification / Dehumidification Issues",
        alt:"life-cycle-8",
      },
      {
        service:"Code Compliance Upgrades For Normal and Emergency Lighting",
        alt:"life-cycle-9",
      },
      {
        service:"Code Compliance Upgrades For Lighting Controls",
        alt:"life-cycle-10",
      },
      {
        service:"Fire Alarm System Upgrades",
        alt:"life-cycle-11",
      },
      {
        service:"AS-BUILT Documentation",
        alt:"life-cycle-12",
      },
      {
        service:"Existing Conditions Documentation",
        alt:"life-cycle-13",
      },
    ],
    color: '#BBAFDA',
    list_color: '#b4a7d6'
  }

  const construction_services = {
    title: 'Project Management & Construction Services',
    services: [
      {
        service:"Owner's Representation",
        alt:"pm&const-1",
      },
      {
        service:"Design Management",
        alt:"pm&const-2",
      },
      {
        service:"Construction Management Assistance",
        alt:"pm&const-3",
      },
      {
        service:"Project Coordination",
        alt:"pm&const-4",
      },
      {
        service:"Sub-Consultant Procurement",
        alt:"pm&const-5",
      },
      {
        service:"Sub-Consultant Management",
        alt:"pm&const-6",
      },
      {
        service:"Cost Estimation",
        alt:"pm&const-7",
      },
      {
        service:"Construction Project Schedule Development",
        alt:"pm&const-8",
      },
      {
        service:"Construction Bid Procurement",
        alt:"pm&const-9",
      },
      {
        service:"Site Safety Coordination & Supervision",
        alt:"pm&const-10",
      }
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
      <div>
        <div className="pb-20">
          {/* Engineering Section */}
          <div className="font-light justify-center">
          {/* Title */}
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:2.5, duration:1}}} 
          className="items-center justify-center flex">
            <h1 className=" bg-light_bg font-thin rounded-2xl p-7 xl:m-10 my-2 2xl:text-7xl lg:text-6xl text-3xl flex">Engineering Services</h1>
          </motion.div>
          {/* Subsections*/}
          {/* actual grid without title */}
          <div className="justify-center flex items-center">
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:3, duration:1}}} id="subsection" className="xl:grid xl:grid-cols-3 xl:gap-10 xl:p-0 xl:mx-[5%] justify-center items-center">
            {engineering_services.map((service)=> {
              return(
                // **
                <div key={service.title} className="xl:h-[675px] flex justify-center text-dark_text p-5 my-5 rounded-2xl xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                  <div className="justify-center">
                    {/* List Title w Image*/}
                    <div className="items-center justify-center flex my-2">
                      <h1 className="text-dark_text xl:text-4xl text-3xl p-5">{service.title}</h1>
                      {/* <Image src={service.icon} width={service.width ? service.width : 70} height={100} className="bg-black/20 rounded-2xl py-2"/> */}
                    </div>
                    <div className="2xl:w-[400px] xl:w-[345px] lg:w-[325px] 2xl:h-[450px] items-center flex justify-center rounded-2xl p-8 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div className="">
                      <ul className="items-center justify-center">
                        {service.services.map((list_item)=> {
                          return(
                            <li key={list_item.alt} className="list-disc xl:text-lg">
                              <p className="text-dark_text lg:leading-6 xl:leading-7">{list_item.service}</p>
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
          </motion.div>
        </div>
        {/* Engineering Services Section TWO */}
        <div className="font-light">
          {/* Subsections*/}
          <div className="flex justify-center items-center">
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:3.5, duration:1}}} 
          id='subsection' 
          className="xl:grid xl:grid-cols-2 items-center xl:gap-10 xl:p-0  xl:m-10 justify-center">
            {engineering_services_two.map((service)=> {
              return(
                <div key={service.title} className="flex justify-center">
                <div className=" xl:h-[350px] text-dark_text p-5 my-5 rounded-2xl xl:w-[500px] w-[375px] flex justify-center" style={{backgroundColor: `${service.color}`}}>
                  <div className="">
                    {/* List Title w Image */}
                    <div className="items-center justify-center flex my-2">
                      <h1 className="text-dark_text text-3xl xl:text-4xl p-5">{service.title}</h1>
                      {/* <Image src={service.icon} width={service.width ? service.width : 70} height={100} className="bg-black/10 rounded-2xl py-2"/> */}
                    </div>
                    <div className="2xl:w-[400px] xl:h-[200px] flex justify-center rounded-2xl p-5 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div>
                      {/* List */}
                      <ul>
                        {service.services.map((list_item)=> {
                          return(
                            <li key={list_item.alt} className="list-disc xl:text-lg">
                              <p className="text-dark_text lg:leading-6 xl:leading-7">{list_item.service}</p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                      
                    </div>
                  </div>
                </div>
                </div>
              )
            })}
          </motion.div>
           </div>
          </div>
          </div>
          {/* Building Life Cycle Services + Project Management Services */}
          <div className="font-light justify-center">
            <div className="xl:grid grid-cols-2 items-start h-full">
              {/* Building Life Cycle Services */}
              <div>
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1, transition:{delay:2.5, duration:1}}} 
              className="items-center justify-center flex">
                <div className=" bg-light_bg font-thin text-center xl:w-[700px] rounded-2xl p-7 xl:m-10 my-2  flex items-center justify-center">
                  <h1 className="lg:w-[400px] 2xl:text-6xl lg:text-5xl text-3xl">{life_cycle_services.title}</h1>
                </div>
              </motion.div>
              <div className="flex justify-center">
                {/* motion */}
                <div>
                  <div className="flex justify-center 2xl:h-[600px] rounded-2xl 2xl:mx-10 p-5 my-5 2xl:my-0 xl:w-[600px] w-[375px]" style={{backgroundColor: `${life_cycle_services.color}`}}>
                    <div>
                      <div className="2xl:w-[500px] flex items-center justify-center rounded-2xl px-5 py-4 xl:mx-10 xl:my-4 shadow-inner font-medium" style={{backgroundColor: `${life_cycle_services.list_color}`}}>
                        <div className="flex items-center justify-center p-4 xl:p-6 ">
                          <ul>
                            {life_cycle_services.services.map((list_item)=> {
                              return(
                                <li key={list_item.alt} className="list-disc xl:text-lg text-dark_text">
                                  <p className="text-dark_text">{list_item.service}</p>
                                </li>
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
              {/* Project Management & Construction Services */}
              <div>
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1, transition:{delay:2.5, duration:1}}} 
              className="items-center justify-center flex">
                <h1 className=" bg-light_bg font-thin text-center rounded-2xl p-7 xl:m-10 my-2 xl:w-[675px] lg:w-[600px] w-[400px] 2xl:text-6xl lg:text-5xl text-3xl  flex ">{construction_services.title}</h1>
              </motion.div>
              <div className="flex justify-center">
                {/* motion */}
                <div>
                  <div className="flex justify-center xl:h-[600px] rounded-2xl 2xl:mx-10 p-5 my-5 2xl:my-0 xl:w-[600px] w-[375px]" style={{backgroundColor: `${construction_services.color}`}}>
                    <div>
                      <div className="2xl:w-[500px] flex items-center justify-center rounded-2xl px-5 py-4 xl:mx-10 xl:my-4 shadow-inner font-medium" style={{backgroundColor: `${construction_services.list_color}`}}>
                        <div className="flex items-center justify-center p-4 xl:p-6 ">
                          <ul>
                            {construction_services.services.map((list_item)=> {
                              return(
                                <li key={list_item.alt} className="list-disc xl:text-lg text-dark_text">
                                  <p className="text-dark_text">{list_item.service}</p>
                                </li>
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

          </div>


        </div>
      </div>
    </div>
  )
}

export default ServicesNew;