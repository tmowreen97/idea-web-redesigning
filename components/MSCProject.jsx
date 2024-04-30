import Image from "next/image";

function MSCProject(){
  return(
    <div className="w-screen h-full bg-primary font-thin">
      <div className="">
        {/* Title */}
        <div className="md:px-20 pt-40 lg:pb-[80px]">
          <h1 className="text-primary_text lg:text-9xl text-center text-7xl md:text-left tracking-wider">MSC Miami Cruise Terminal</h1>
        </div>  
        {/* Body */}
        <div className="" >
          {/* Body Container */}
          <div className="p-20 md:p-4 flex justify-center">
            <div>
              {/* Featured Container */}
              <div className="flex justify-center p-20">           
                <div >
                {/* Photo */}
                <div className="py-4">
                  <Image src={'/assets/updated-landing copy.jpg'} width={1500} height={300}/>
                </div>
                {/* Caption */}
                <div className="py-4 flex italic justify-left text-secondary_text lg:text-2xl ">
                  <div>
                    <h3>Commercial/Transportation</h3>
                    <h3>Miami,FL</h3>
                    <h3>490,000 SF Terminal / 1,200,000 SF Garage</h3>
                    <h3>Completion Date:2024</h3>
                  </div>
                </div>
                </div>
              </div>
            <div className="flex justify-center px-20 p-10 text-secondary_text tracking-wide xl:max-w-[1600px]">
            <div className="">
              <div className="my-4 ">
                <h2 className="xl:text-5xl text-4xl xl:leading-[60px]">
                  IDEA AEC has been developing the MEP design for our biggest project yet, MSC Miami Cruise Terminal. Alongside some other talented Architectural and Engineering companies, we've made significant progress.
                </h2>
              </div>
              <div className="my-4 tracking-wider">
                <h3 className="xl:text-3xl md:text-2xl text-xl xl:leading-[45px]">
                  A 4-story cruise terminal capable of serving a total of 18,000 cruise ship passengers. The facility consists of 490,000 sf of interior space and 1,200,000 sf garage (6-Levels). There is a boarding concourse approximately 3,000 ft long by 15 ft wide running along the terminal and extending beyond the terminal to the East to accommodate three Berths. The terminal’s programming includes but not limited to: Check-In, Validation, Screening, Waiting Lounges, Office Terrace, Passenger Bridge Concourse, Baggage claim, Baggage, Restrooms, Customs and Border Protection Areas, VIP Lounges, Etc. Sustainable goals include LEED Silver Certification IDEA’s team is also providing MEP-FP Construction Project Management Assistance services to the Design Builder/Construction Team on this opportunity.
                </h3>
              </div>
            </div>

          </div>
          </div>
          </div>
          {/* Heading Text */}
          
          
        </div>
        
      </div>
      
      
    </div>
  )
}


export default MSCProject;