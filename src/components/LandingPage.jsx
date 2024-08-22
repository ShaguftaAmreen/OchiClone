import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-0.4" className='w-full h-screen bg-zinc-900 border-t-2'>
      <div className='textstructure mt-52 px-20'>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>(
          <div className='masker  text-[7.5vw] leading-none tracking-tighter font-semibold font-["Founders_Grotesk"]'>
          <div className='w-fit flex '>
            {index===1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1]}} className=' bg-red-500 w-[9vw] mr-3 rounded-md h-[5vw] relative -top-[1vw]s'></motion.div>}
            <h1>{item}</h1>
          </div>
          </div>
        ))}
         </div>
         <div className='border-t-[1px]  bg-zinc-900 border-zinc-800 mt-24 flex justify-between items-center py-5 px-20'>
         {["For public and private  companies","From the first pitch IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
         ))}
          <div className='start  bg-zinc-900 flex gap-5'>
            <div className='px-4 py-2 border-2  bg-zinc-900 border-zinc-500 font-light text-sm capitalize rounded-full'>Start the project</div>
         
         <div className='w-10 h-10 flex justify-center items-center rounded-full border-2  bg-zinc-900 border-zinc-500'>
            <span className='rotate-[45deg]'><FaLongArrowAltUp /></span>
         </div>
         </div>
         </div>
        
    </div>
  )
}

export default LandingPage
