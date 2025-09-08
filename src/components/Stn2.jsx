import React from 'react'
import img14 from "../../src/assets/45f9e26c-ff67-4a90-a3fb-76e3d024ae14.jpg"




function Stn2() {
  return (
    <>
    <div className='lg:h-[650px] mt-6 w-[100%]  flex items-center justify-center md:flex-row flex-col gap-4 '>
        <div className=' lg:w-[60%] lg:h-[480px] mt-6 '>
           <img className='w-[730px] h-[480px] ' src={img14} alt="" />
        </div> 
        <div className=' h-auto lg:w-[47%] flex justify-center'>
         <div className= ' lg:h-[450px] lg:w-[80%] mt-30 flex  flex-col lg:items-start gap-6 justify-center m-5 '>
          <h1 className='text-4xl font-bold h-[50px] max-w-[450px] break-words m-4 '>New Prisma Men Watches</h1>
           <p className='h-[28px] max-w-[400px] flex items-center break-words m-2'>Boost your style this season with your favorite accessory!</p>
           <p className='h-[100px] max-w-[500px] flex items-center break-words '>Superb diver and chronograph designs for men. Also a stylish slimline collection that fits perfectly with the business or casual outfit.</p>
           
            <button className='bg-sky-600 hover:bg-sky-700 transition duration-300 rounded-xl text-white h-[40px] w-[230px] mt-6'>
  DISCOVER NEW COLLECTION
</button>
         </div>
</div>




    </div>
    
    
    
    </>
  )
}

export default Stn2