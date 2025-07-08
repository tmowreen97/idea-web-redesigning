function Testing(){
  const map_list = [
    {
      title : 'Testing - 1',
      description : 'This is a test message.'
    },
    {
      title : 'Testing - 2',
      description : 'This is a test message.'
    },
    {
      title : 'Testing - 3',
      description : 'This is a test message.'
    },
  ]
  return(
    <div  className="w-screen h-screen items-center text-center justify-center bg-primary_2">
      <div className="md:px-20 pt-28 pb-[80px]">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-center lg:text-left tracking-wide">Testing Page</h1>
      </div>
      <div>
        <div>

          <div className="flex justify-center m-[100px]">
            {
              map_list.map((part)=> {
                return(
                  <div className="bg-secondary_2 p-10 mx-10 rounded-xl">
                    <h3 className="text-dark_text text-4xl font-light">{part.title}</h3>
                    <p className="text-dark_text_2 m-2">{part.description}</p>
                    <button className="bg-button_bg_2 hover:bg-button_highlight_2 rounded-xl p-3 mt-10">Test Button</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Testing;