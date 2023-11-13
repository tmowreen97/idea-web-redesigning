import CulturePage from "@/components/Culture";
import Culture_Page_Two from "@/components/Culture_Page_Two";
import Navbar from "@/components/Navbar";

export default function Culture(){
  return(
    <div>
      <Navbar lightLogo={true}/>
      <Culture_Page_Two/>
    </div>
  )
}