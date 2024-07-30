import { useState } from "react"

function TextBody ({post}){
  const [showExtended, setShowExtended] = useState(false)
  return (
    <div >
      <div className="py-5">
        <h1 className="xl:text-7xl text-4xl text-primary_text">{post.title}</h1>
        <h2 className="xl:text-5xl text-2xl pt-2">{post.date}</h2>
      </div>
      
    
    <div className={showExtended ? "bg-[#371C43] duration-200 rounded-xl 2xl:text-xl text-lg mx-[-10px] p-2 " : " 2xl:text-xl text-lg"}>
      {post.text.map((paragraph)=> {
        return(
          <div className="" key={paragraph}>
            {post.extended_text && !showExtended ?  <p  className="py-5">{paragraph}...</p> : <p  className="py-5">{paragraph}</p>}
          </div>
          
        )
      })}
      <div>
        {post.extended_text ? 
          <div >
            <div className={showExtended ? "" : "hidden"}>
              {
                post.extended_text.map((text)=> {
                  return(
                    <p key={text} className="py-5">{text}</p>
                  )
                })
              }
            </div>
            <div className="text-center p-2 text-primary_text" >
              <button onClick={()=> setShowExtended(!showExtended)} className={showExtended ? "bg-secondary_text text-dark_text hover:bg-accent_2/80 hover:text-secondary_text p-3 px-4 rounded-xl text-lg " : "bg-secondary_text text-dark_text hover:bg-accent_2/80 hover:text-secondary_text p-3 px-4 rounded-xl text-lg my-2"}>
                {showExtended ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
          
          : ""
        }
      </div>
    </div>
    </div>
  )
}

export default TextBody;