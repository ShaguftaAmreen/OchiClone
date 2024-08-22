import React from 'react'

function About() {
  return (
    <div className='w-full py-20   bg-[#8ba52f] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] px-20 tracking-tight'>
      Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className='w-full border-t-[2px] bg-[#8ba52f] mt-20 flex gap-10'>
     <div className='w-1/2 pt-20'>
        <h1 className='text-7xl'>Our approach : </h1>
        <button className='px-10 py-6 mt-10 uppercase bg-zinc-900 rounded-full text-white flex gap-10 items-center'>Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
     </div>
     <div className='w-1/2 h-[70vh]  bg-[#6e8322] rounded-3xl  mt-10'>

     </div>
      </div>
    </div>
  )
}

export default About
