import Image from "next/image";
import dynamic from 'next/dynamic'
 

function BeforeAndAfter(){
  
  // const DynamicHeader = dynamic(() => import('../components/ImageCarousel'), {
  //   ssr: false,
  // })

  if (typeof window!== "undefined"){const container = document.querySelector('.before-and-after-container');
  document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`)
  })}

  return(
    <div className="main-image-container">
      <div className="before-and-after-container">
        <div className="image-container">
          <Image className="image-before slider-image" src={'/assets/updated-landing copy-bnw.jpg'} alt={'Before Image'} width={1500} height={400}/>
          <Image className="image-after slider-image" src={'/assets/updated-landing copy.jpg'} alt={'After Image'} width={1500} height={400}/>
        </div>
        <input type="range" min='0' max='100' value='50' className="slider" aria-label='Percentage of before photo shown'/>
        <div className="slider-line"></div>
        <div className="slider-button shadow-md shadow-black " aria-hidden='true'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path></svg>
        </div>
        
      </div>
    </div>
  )
}

export default BeforeAndAfter;