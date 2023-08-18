function Line(){
  return(
    <div className="">
      <div className="">
        <svg   className=" relative rotate-180 origin-top" >
          <polyline points="300,0 230,200" strokeWidth={5} fill="black" stroke='white'/>
          {/* <line x1="0" y1="80" x2="100" y2="20" strokeWidth="2" stroke='blue' fill='blue'/> */}
        </svg>
        <div className="bg-light_bg rounded-xl absolute ml-[-42%] ">
          <div className="p-2 mx-2 ">
            <p className='text-dark_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Line;