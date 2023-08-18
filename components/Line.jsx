import { AiOutlineCloseCircle } from "react-icons/ai";

function Line({setShowDesc}){
  return(
    <div className="">
      <div className="">
        <svg height='140px' className="relative rotate-90 " >
          <polyline points="0,0 0,200" strokeWidth={2}  stroke='white'/>
          {/* <line x1="0" y1="80" x2="100" y2="20" strokeWidth="2" stroke='blue' fill='blue'/> */}
        </svg>
      </div>
      <div className=" absolute top-[80%] ml-[-40%] w-[500px] ">
          <div className="p-2 mx-2 pb-3 bg-light_bg rounded-xl ">
            <div className="flex justify-end ">
              <AiOutlineCloseCircle className="cursor-pointer hover:bg-accent_2 hover:text-primary_text  rounded-full overflow-hidden text-2xl" onClick={()=> setShowDesc(false)} />
            </div>
            
            <p className='text-dark_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          
      </div>
      
    </div>
    
  )
}

export default Line;