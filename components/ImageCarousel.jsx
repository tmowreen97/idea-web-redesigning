import Image from "next/image";
import { useState } from "react";
import dynamic from 'next/dynamic'
 
const DynamicHeader = dynamic(() => import('../components/ImageCarousel'), {
  ssr: false,
})


function ImageCarousel({projectImages}){
  const [updatedImgs, setUpdatedImgs] = useState(projectImages)
  const [previousImgIndex, setPreviousImgIndex] = useState(0)
  const [nextImgIndex, setNextImgIndex] = useState(2)
  const [currentImgIndex, setCurrentImgIndex] = useState(1)
  const [previousImgClass, setPreviousImgClass] = useState('gallery-item gallery-item-0')
  
  console.log(previousImgIndex,currentImgIndex,nextImgIndex)
  console.log('beginning',updatedImgs)

  function handleImage(){
    
    const updatedImages = [...projectImages]
    updatedImages[previousImgIndex].className = `gallery-item gallery-item-0`
    updatedImages[currentImgIndex].className = `gallery-item gallery-item-1`
    updatedImages[nextImgIndex].className = `gallery-item gallery-item-2`
    console.log('new',updatedImages)

    // const newImgs = projectImages.map(img => {
    //   if (img.title == `MSC-image-${previousImgIndex}`){
    //     return {...img, className: `gallery-item gallery-item-${previousImgIndex}`}
    //   }
    //   return img;
    // })
    // updatedImgs[previousImgIndex].className = `gallery-item gallery-item-${previousImgIndex}`
    // updatedImgs[currentImgIndex].className = `gallery-item gallery-item-${currentImgIndex}`
    // updatedImgs[nextImgIndex].className = `gallery-item gallery-item-${nextImgIndex}`
    
    // console.log(
    //   'previous image', updatedImgs[previousImgIndex],
    //   'current image', updatedImgs[currentImgIndex],
    //   'next image', updatedImgs[nextImgIndex]
    // )
    // let newPreviousImage = updatedImgs.find(img => img.title == `MSC-image-${previousImgIndex}`)
    // console.log(newPreviousImage.className=`gallery-item gallery-item-${previousImgIndex}`)
    // newPreviousImage.className = `gallery-item gallery-item-${previousImgIndex}`
    // projectImages.find(img => img.title = `MSC-image-${currentImgIndex}`).className = `gallery-item gallery-item-${currentImgIndex}`
    // projectImages.find(img => img.title = `MSC-image-${nextImgIndex}`).className = `gallery-item gallery-item-${nextImgIndex}`
    // console.log('after handle image',updatedImgs)
    // console.log('prev',previousImgIndex,'current',currentImgIndex,'next',nextImgIndex)
    // console.log(document.getElementById(`MSC-image-${previousImgIndex}`)).classList
    // console.log(document.getElementById(`MSC-image-${currentImgIndex}`)).classList
    // console.log(document.getElementById(`MSC-image-${nextImgIndex}`)).classList
    // document.getElementById(`MSC-image-${previousImgIndex}`).classList=`gallery-item gallery-item-${previousImgIndex}`
    // document.getElementById(`MSC-image-${currentImgIndex}`).classList=`gallery-item gallery-item-${currentImgIndex}`
    // document.getElementById(`MSC-image-${nextImgIndex}`).classList=`gallery-item gallery-item-${nextImgIndex}`
  }

  function handleNext(e){
    if(nextImgIndex==6){
      setPreviousImgIndex(5)
      setPreviousImgClass('gallery-item gallery-item-5')
      setCurrentImgIndex(6)
      setNextImgIndex(0)
    }
    else if(nextImgIndex==0){
      setPreviousImgIndex(6)
      setPreviousImgClass('gallery-item gallery-item-6')
      setCurrentImgIndex(0)
      setNextImgIndex(1)
    }
    else if(nextImgIndex==1){
      setPreviousImgIndex(0)
      setPreviousImgClass('gallery-item gallery-item-0')
      setCurrentImgIndex(1)
      setNextImgIndex(2)
    }
    else{
    setPreviousImgIndex(previousImgIndex+1)
    setPreviousImgClass(`gallery-item gallery-item-${previousImgIndex+1}`)
    setCurrentImgIndex(currentImgIndex+1)
    setNextImgIndex(nextImgIndex+1)
    }
    handleImage()
  }

  function handlePrevious(){
    if(previousImgIndex==0){
      setPreviousImgIndex(6)
      setCurrentImgIndex(0)
      setNextImgIndex(1)
    }
    else if(previousImgIndex==6){
      setPreviousImgIndex(5)
      setCurrentImgIndex(6)
      setNextImgIndex(0)
    }
    else if(previousImgIndex==5){
      setPreviousImgIndex(4)
      setCurrentImgIndex(5)
      setNextImgIndex(6)
    }
    else{
    setPreviousImgIndex(previousImgIndex-1)
    setCurrentImgIndex(currentImgIndex-1)
    setNextImgIndex(nextImgIndex-1)
    }
    handleImage()
    
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
          {updatedImgs.map((img, index)=> {
            // handleImage()
            return(
              <Image className={img.className} src={img.image} data-index={index+1} width={500} height={400} id={img.title}/>
            )
            
          })}
        </div>
        <div className="gallery-controls">
          <button onClick={(e)=> handlePrevious(e)}>Previous</button>
          <button onClick={(e)=> handleNext(e)}>Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ImageCarousel;