import React from 'react'
import img12 from "../../src/assets/cda594da-7d5c-431e-a4a2-669782c52350.jpg"
import img13 from "../../src/assets/c84c1a6c-9be7-40c4-8425-c7c0f8d2f57b.jpg"




function Section1() {
  return (
    <>
    
    
      <div className=" lg:h-[50vh] w-full bg-white flex items-center md:flex-row flex-col gap-5 mt-7">
  
  <div className="relative lg:h-[300px]  lg:w-1/2 overflow-hidden group cursor-pointer  transition-all duration-500">
    <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2  " src={img12} alt="" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-4xl font-bold">Men Watches</p>
    </div>
  </div>

  
  <div className="relative lg:h-[300px]  lg:w-1/2 overflow-hidden group cursor-pointer  transition-all duration-500">
    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2  " src={img13} alt="" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-4xl font-bold">Women Watches</p>
    </div>
  </div>
</div>
    
    
    
    </>
  )
}

export default Section1