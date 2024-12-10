import EEFI_Project from "@/components/EEFIProject";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

function EEFI_Highlight(){
  // const [isClient, setIsClient] = useState(false)
  // useEffect(()=>{
  //   setIsClient(true)
  // }, [])
  return(
    <div>
      <Navbar lightLogo={true}/>
      <EEFI_Project/>
      <Footer/>
    </div>
  )
}

export default EEFI_Highlight;