import React from 'react'


function Search() {
  return (
    <>
     <div className='h-full w-full'>
        <section className=' h-full py-40  bg-Search-bg bg-cover'>
            <div className="md:mx-40">
              <h2 className="text-center text-white text-3xl mb-4 font-bold">Welcome</h2>
              <div className=" flex mt-4">
                <input 
                className="p-4 md:w-full  rounded-l-[20px] border-[0px] focus:outline-none "
                type = "search" 
                
                placeholder = "Search..... " 
                
                
                />
                
                <button className='bg-[#1B1464] p-4  text-white rounded-r-[20px] font-bold'>
                    Search
                </button>
            </div>
            </div>
            
        </section>

     </div>
    </>
  )
}

export default Search