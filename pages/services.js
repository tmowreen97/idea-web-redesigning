import Navbar from "@/components/Navbar";
import React from "react";
import ServicesNew from "@/components/ServicesNew";
import Footer from "@/components/Footer";

export default function Services(){
  return (
    <div>
      <Navbar lightLogo={true}/>
      <ServicesNew/>
      <Footer/>
    </div>
  )
}