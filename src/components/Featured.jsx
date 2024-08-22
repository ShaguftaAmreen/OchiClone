import { motion } from 'framer-motion'
import React from 'react'

function Featured() {
  
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-2 border-zinc-700'>
        <h1 className='text-8xl tracking-tight mb-6'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-20 mt-10'>
          
          <div className='card1 w-1/2 h-[75vh] relative rounded-2xl overflow-hidden'>
            <h1 className='absolute left-full text-6xl  -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight flex'>
              {"FYDE".split("").map((item, index) => (
                <motion.span  key={index}  className='inline-block text-[#8ba52f]'>{item}</motion.span>
              ))}
            </h1>
            <div className='cardchild1 w-full h-full rounded-2xl'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt='FYDE Project'/>
            </div>
          </div>

          <div className='card2 w-1/2 h-[75vh] relative rounded-2xl overflow-hidden'>
            <h1 className='absolute right-full text-6xl translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight flex'>
              {"VISE".split("").map((item, index) => (
                <motion.span key={index} className='inline-block text-[#8ba52f]'>{item}</motion.span>
              ))}
            </h1>
            <div className='cardchild2 w-full h-full rounded-2xl'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="VISE Project" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured


// import React from 'react'

// function Featured() {
//   return (
//     <div className='w-full py-20'>
//       <div className='w-full px-20 border-b-2 border-zinc-700 '>
//         <h1 className='text-8xl tracking-tight mb-6 '>Featured projects</h1>
//       </div>
//       <div className='px-20'>
//         <div className='cards w-full flex gap-20 mt-10'>
          
//           <div className=' card1 w-1/2 h-[75vh] relative rounded-2xl overflow-hidden'>
//             <h1 className='absolute left-full text-6xl bg-[#8ba52f] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight'>
//               {"FYDE".split("").map((item, index) => (
//                 <span key={index}>{item}</span>
//               ))}
//             </h1>
//             <div className=' cardchild1 w-full h-full rounded-2xl'>
//               <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' />
//             </div>
//           </div>

//           <div className=' card2 w-1/2 h-[75vh] relative rounded-2xl overflow-hidden'>
//             <h1 className='absolute right-full text-6xl bg-[#8ba52f] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight'>
//               {"VISE".split("").map((item, index) => (
//                 <span key={index}>{item}</span>
//               ))}
//             </h1>
//             <div className=' cardchild2 w-full h-full rounded-2xl'>
//               <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Featured




// // import React from 'react'

// // function Featured() {
// //   return (
// //     <div className='w-full py-20'>
// //         <div className='w-full px-20 border-b-2 border-zinc-700 '>
// //             <h1 className='text-8xl tracking-tight mb-6 '>Featured projects</h1>
// //       </div>
// //       <div className='px-20'>
// //         <div className='cards w-full flex gap-20 mt-10'>
          
// //        <div className=' card1 w-1/2 h-[75vh] relative rounded-2xl overflow-hidden'>
// //         <h1 className='absolute left-full  text-6xl bg-[#8ba52f] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight'>FYDE</h1>
// //         {"FYDE".split("").map((item,index)=>(
// //     <span className=''>{item}</span>
// //   ))}
// //       <div className=' cardchild1 w-full h-full rounded-2xl'>
// //         <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' />
// //               </div>
// //        </div>
// //        <div className=' card2 w-1/2 h-[75vh] relative rounded-2xl overflow-hidden'>
// //        <h1 className='absolute right-full text-6xl bg-[#8ba52f] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight'>VISE</h1>
// //   {"VISE".split("").map((item,index)=>(
// //     <span className=''>{item}</span>
// //   ))}
// //  <div className=' cardchild2 w-full h-full rounded-2xl '>
// //   <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
// //  </div>
// //         </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Featured
