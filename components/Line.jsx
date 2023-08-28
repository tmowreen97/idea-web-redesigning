import { AiOutlineCloseCircle } from "react-icons/ai";

function Line({setShowDesc, blinker}){
  return(
    <div className="">
      <div className={blinker.svg_w}>
        <svg height={blinker.svg_h} className={blinker.svg_class} >
          <polyline points={blinker.poly_points} strokeWidth={1}  stroke='white'/>
          {/* <line x1="0" y1="80" x2="100" y2="20" strokeWidth="2" stroke='blue' fill='blue'/> */}
        </svg>
      </div>
      <div className={blinker.div_parent_class}>
          <div className="p-2   bg-light_bg rounded-xl ">
            <div className="flex justify-end ">
              <AiOutlineCloseCircle className="cursor-pointer hover:bg-accent_2 hover:text-primary_text  rounded-full overflow-hidden text-2xl z-10" onClick={()=> setShowDesc(false)} />
            </div>
            <div className="flex items-center mx-2">
              <img width={30} height={30} src={blinker.img} className=""/>
              <h3 className='text-dark_text text-xl m-1'>{blinker.heading}</h3>
            </div>
           <div className="mx-2">
            <p className='text-dark_text text-sm'>
            {blinker.desc}
            </p>
           </div>
            
          </div>
          
      </div>
      
    </div>
    
  )
}

export default Line;