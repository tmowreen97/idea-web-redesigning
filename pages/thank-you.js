import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThankYou from "@/components/ThankYou";

export default function Thanks(){
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ThankYou/>
      <Footer/>
    </div>
  )
}