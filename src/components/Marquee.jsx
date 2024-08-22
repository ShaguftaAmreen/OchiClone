import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-950 mt-9 overflow-hidden'>
      <div className='text border-t-2 border-b-2 border-zinc-300 gap-11 flex whitespace-nowrap'>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }} 
          className='text-[17vw] leading-none uppercase pt-10 font-semibold'>
          We are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }} 
          className='text-[17vw] leading-none uppercase pt-10 font-semibold'>
          We are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee



// import { motion } from 'framer-motion'
// import React from 'react'

// function Marquee() {
//   return (
//     <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-950 mt-9'>
//       <div className='text border-t-2 border-b-2 border-zinc-300  gap-11 flex whitespace-nowrap overflow-hidden '>
//         <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:"Infinity",duration:5}} className='text-[17vw] leading-none uppercase pt-10 font-semibold'>We are ochi</motion.h1>
//         <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:"Infinity",duration:5}} className='text-[17vw] leading-none uppercase pt-10 font-semibold'>We are ochi</motion.h1>
//       </div>
//     </div>
//   )
// }

// export default Marquee
