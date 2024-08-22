import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen  bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer h-[50vh] mt-10 w-1/2'>
      <div className='card w-full h-full relative bg-green-950 rounded-xl flex justify-center items-center'>
        <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 bottom-9 px-5 py-2 border-2 rounded-full '>&copy; 2019-2021</button>
      </div>
      </div>
      <div className='cardcontainer h-[50vh] w-1/2 flex gap-5 mt-10'>
      <div className='card w-1/2 h-full  bg-[#192826] relative rounded-xl flex justify-center items-center'>
      <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 bottom-9 px-5 py-2 border-2 rounded-full '>&copy; 2019-2021</button>
      </div>
      <div className='card w-1/2 h-full relative bg-[#192826] rounded-xl flex justify-center items-center'>
      <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 bottom-9 px-5 py-2 border-2 rounded-full '>&copy; 2019-2021</button>
      </div>
        </div>
        
    </div>
  )
}

export default Cards
