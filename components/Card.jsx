import Image from "next/image";
import { useState } from "react";
function Card ({member, setFlip, flip}){
  const [show, setShow] = useState(false)
    return(
      <div key='card' id="card" className="flex " onClick={()=> setShow(!show)}>
        <div className="front-card relative" >
          <Image src={member.image} width={300} height={400} alt={'team_member'}/> 
        </div>
        <div className={show ? "absolute w-[300px] h-[300px] top-0 bg-[#322d44]/80 text-secondary_text  text-center justify-center items-center" : "hidden"}>
              <h1 className="mx-5 mt-[100px] text-4xl ">John Doe</h1>
              <p className="mx-5 mt-2 ">Intern</p>
        </div>
    
      </div>
    )
}

export default Card;