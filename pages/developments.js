import Culture_Page from "@/components/CulturePage";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Developments(){
  const [showDropDown, setShowDropDown] = useState(false)
  function handleClick(){
    console.log('in here!')
    if (showDropDown) {
      setShowDropDown(false)
    }
  }

  return(
    <div onClick={()=> handleClick()}>
      <Navbar lightLogo={true}/>
      <Culture_Page showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
    </div>
  )
}