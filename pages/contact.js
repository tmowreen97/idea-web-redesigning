import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Urbanist } from "next/font/google";


const urbanist = Urbanist({
  subsets: ['latin']
})

export default function Contact (){
  return(
    <div classname={urbanist.classname}>
      <Navbar lightLogo={true}/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}