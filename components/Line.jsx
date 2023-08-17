function Line(){
  return(
    <div className="relative">
      <div className="absolute">
        <svg width='500px' height='200px'>
          <line x1="0" y1="0" x2="0" y2="1000" strokeWidth="2" stroke='blue' fill='blue'/>
        </svg>
        <div className="bg-light_bg absolute left-[-100px]">
          <p className='text-dark_text'>Blah blah blah blah blah</p>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Line;