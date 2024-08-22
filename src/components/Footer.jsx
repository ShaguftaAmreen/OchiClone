import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen flex gap-5 bg-zinc-900 p-20'>
      <div className='w-1/2 flex h-full flex-col justify-between'>
        <div className='heading '>
<h1 className='text-9xl mb-11'>Eye-</h1>
<h1 className='text-9xl'>Opening</h1>
</div>
<h1 className='font-bold'>OCHI.</h1>
      </div>
      <div className='w-1/2'>
<h1 className='font-bold text-8xl'>Presentations</h1>
<div className='dets mt-10'>
< a href='#' className='font-bold text-xl'>Facebook</a>
<br></br>
< a href='#' className='font-bold text-xl'>Instagram</a><br></br>
< a href='#' className='font-bold text-xl'>Twitter</a><br></br>
</div>
      </div>
    </div>
  )
}

export default Footer
