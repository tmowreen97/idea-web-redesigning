import Image from "next/image";
import { useState } from "react";
// import dynamic from 'next/dynamic'
// import next from "next";
 
// const DynamicHeader = dynamic(() => import('../components/ImageCarousel'), {
//   ssr: false,
// })


function ImageCarousel({projectImages}){
  const [updatedImgs, setUpdatedImgs] = useState(projectImages)
  const [previousImgIndex, setPreviousImgIndex] = useState(0)
  const [nextImgIndex, setNextImgIndex] = useState(2)
  const [currentImgIndex, setCurrentImgIndex] = useState(1)
  const [showDesc, setShowDesc] = useState(false)
  const [imageDesc, setImageDesc] = useState('')
  
  // console.log(previousImgIndex,currentImgIndex,nextImgIndex)
  // console.log('current',updatedImgs)

  function handleImage(){
    
    const updatedImages = [...projectImages]
    // console.log('new previous img', updatedImages[previousImgIndex], 'new current img', updatedImages[currentImgIndex], 'new next img', updatedImages[nextImgIndex])
    updatedImages[previousImgIndex].className = `gallery-item gallery-item-0`
    updatedImages[currentImgIndex].className = `gallery-item gallery-item-1`
    updatedImages[nextImgIndex].className = `gallery-item gallery-item-2`
  }

  function handleNext(e){
    const updatedImages=[...projectImages]
    updatedImages[previousImgIndex].className='gallery-item'
    updatedImages[currentImgIndex].className='gallery-item'
    updatedImages[nextImgIndex].className='gallery-item'
    // console.log('current previous img', updatedImages[previousImgIndex], 'current current img', updatedImages[currentImgIndex], 'current next img', updatedImages[nextImgIndex])
    if(nextImgIndex==6){
      setPreviousImgIndex(5)
      // setPreviousImgClass('gallery-item gallery-item-5')
      setCurrentImgIndex(6)
      setNextImgIndex(0)
    }
    else if(nextImgIndex==0){
      setPreviousImgIndex(6)
      // setPreviousImgClass('gallery-item gallery-item-6')
      setCurrentImgIndex(0)
      setNextImgIndex(1)
    }
    else if(nextImgIndex==1){
      setPreviousImgIndex(0)
      // setPreviousImgClass('gallery-item gallery-item-0')
      setCurrentImgIndex(1)
      setNextImgIndex(2)
    }
    else{
    setPreviousImgIndex(previousImgIndex+1)
    setCurrentImgIndex(currentImgIndex+1)
    setNextImgIndex(nextImgIndex+1)
    }
    // handleImage()
  }

  function handlePrevious(){
    const updatedImages= [...projectImages]
    updatedImages[previousImgIndex].className='gallery-item gallery-item'
    updatedImages[currentImgIndex].className='gallery-item gallery-item'
    updatedImages[nextImgIndex].className='gallery-item gallery-item'
    // console.log('current previous img', updatedImages[previousImgIndex], 'current current img', updatedImages[currentImgIndex], 'current next img', updatedImages[nextImgIndex])
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
  }

  function handleDesc(e){
    console.log(projectImages[e.target.dataset.index].description)
    if (e.target.className=="gallery-item gallery-item-1"){
      setImageDesc(projectImages[e.target.dataset.index].description)
      setShowDesc(!showDesc)
    }
  }

  return(
    <div>
    <div className="gallery-body">
      <div className="gallery">
        <div className="gallery-container">
          {updatedImgs.map((img, index)=> {
            handleImage()
            return(
              <>
                <Image onClick={(e)=> handleDesc(e)} key={img.title} className={img.className} src={img.image} data-index={index} width={600} height={500} id={img.title} quality={90}/>
                { showDesc ? <div onClick={()=> setShowDesc(!showDesc)} className="bg-black/10 absolute z-10 cursor-pointer  w-[1000px] h-[750px] rounded-xl">
                  <div className="relative top-[45%] text-center">
                    <p className="w-full text-2xl font-light">{imageDesc}</p>
                  </div>
                </div> : ''}
              </>
              
            )
          })}
        </div>
        <div className="gallery-controls font-light gap-40 text-xl">
          <button className="bg-button_bg hover:bg-button_highlight/90 hover:shadow-md hover:shadow-black/80 shadow-sm shadow-black/80 px-7 h-14 rounded-xl " onClick={(e)=> handlePrevious(e)}>Previous</button>
          <button className="bg-button_bg hover:bg-button_highlight/90 hover:shadow-md hover:shadow-black/80 shadow-sm shadow-black/80 px-7 h-14 rounded-xl" onClick={(e)=> handleNext(e)}>Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ImageCarousel;