import Navbar from "@/components/Navbar";
import React from "react";
import ServicesNew from "@/components/ServicesNew";

export default function Services(){
  return (
    <div>
      <Navbar lightLogo={true}/>
      <ServicesNew/>
    </div>
  )
}