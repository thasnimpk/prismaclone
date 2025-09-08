import React from 'react'
import img15 from"../../src/assets/new.jpg"

function Stn3() {
  return (
    <>

    <div className='lg:h-[650px] mt-6 w-[100%]  flex items-center justify-center md:flex-row flex-col gap-4 '>

         
        <div className=' h-auto lg:w-[47%] flex justify-center'>
         <div className= ' lg:h-[450px] lg:w-[85%]  flex  flex-col lg:items-start gap-6 justify-center m-5'>
          <h1 className='text-4xl font-bold h-[70px] max-w-[600px] break-words m-2'>New Prisma Women Watches</h1>
           <p className='h-[28px] max-w-[400px] flex items-center break-words mt-5'>The new AW22 collection is now available!
</p>
           <p className='h-[100px] max-w-[500px] flex items-center break-words '>Be surprised by stunning designs that make a beautiful impression. The new collection has a fabulous milanese strap with glitter or how about the new chronograph model?

</p>
           
      <button className='bg-sky-600 hover:bg-sky-700 transition duration-300 rounded-xl text-white h-[40px] w-[230px] mt-6'>
  DISCOVER NEW COLLECTION
</button>

         </div>
</div>
<div className=' lg:w-[54%] lg:h-[450px]'>
  <img className='h-[470px] w-[800px]' src={img15} alt="" />

</div>
        </div>
    
    
    
    
    </>
  )
}

export default Stn3
