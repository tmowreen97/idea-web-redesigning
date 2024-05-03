import Image from "next/image";
import { useState } from "react";

function ImageCarousel({projectImages}){
  const [updatedImgs, setUpdatedImgs] = useState(projectImages)
  const [currentImg, setCurrentImg] = useState(projectImages[2])

  console.log(projectImages)

  function handleImage(img, index){
    // console.log(img, index)
  }

  function handleNext(e){
    console.log(projectImages)

  }
  return(
    <div>
    <div className="gallery-body">
      <div className="gallery">
        <div className="gallery-container">
          {/* <Image className="gallery-item gallery-item-1" src={"/assets/projects/com-trans/MSC-1.jpg"} data-index={1} width={400} height={300}/>
          <Image className="gallery-item gallery-item-2" src={"/assets/projects/com-trans/MSC-2-new.jpg"} data-index={2} width={400} height={300}/>
          <Image className="gallery-item gallery-item-3" src={"/assets/projects/com-trans/MSC-3-new.jpg"} data-index={3} width={400} height={300}/>
          <Image className="gallery-item gallery-item-4" src={"/assets/projects/com-trans/MSC-4-new.jpg"} data-index={4} width={400} height={300}/>
          <Image className="gallery-item gallery-item-5" src={"/assets/projects/com-trans/MSC-5-new.jpg"} data-index={5} width={400} height={300}/>
          <Image className="gallery-item gallery-item-6" src={"/assets/projects/com-trans/MSC-6-new.jpg"} data-index={6} width={400} height={300}/> */}
          {projectImages.map((img, index)=> {
            handleImage(img, index)
            return(
              <Image className={img.className} src={img.image} data-index={index+1} width={500} height={400}/>
            )
          })}
        </div>
        <div className="gallery-controls">
          <button>Previous</button>
          <button onClick={(e)=> handleNext(e)}>Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ImageCarousel;