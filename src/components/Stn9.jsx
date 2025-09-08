import React from 'react'
import img81 from "../../src/assets/l1.png"
import img82 from "../../src/assets/icons8-facebook-50 (1).png"
import img83 from "../../src/assets/icons8-x-30.png"
import img84 from "../../src/assets/icons8-pinterest-50.png"
import img85 from "../../src/assets/icons8-instagram-30.png"
import img86 from "../../src/assets/icons8-youtube-30.png"
import img87 from "../../src/assets/icons8-linkedin-30.png"
import { useState } from 'react';

function Stn9() {

const [arrow, setarrow] = useState()

  const button = () => {
    setarrow(!arrow)
  }

  return (
    <> 
     <div className='h-auto w-full '>
    <div className='w-full bg-gray-200  '>
        <div className='h-auto lg:flex items-center justify-center border-b-gray-300 border-b-2 ml-9'>
            <div className=' h-[325px] w-[40%px] flex items-center '>
          <img src={img81} alt="" />
        
        </div>
         <div className='h-[203px] w-[30%] font-bold text-sm flex justify-center flex-col '>
            <div className='h-[200px] flex items-center flex-col'>
                <h2 className='h-[40px] '>TERMS & CONDITIONS</h2>
                <div className='h-[90px] gap-5 list-none ml-2'>
                    <li className='h-[35px] '>shipment policy</li>
                    <li className='h-[35px] '>privacy statement</li>
                    <li className='h-[35px] '>Terms & conditions</li>
                </div>
            </div>
         </div>

 <div className='h-[205px] w-[50%] text-sm font-bold'>
 <div className='h-[100px] w-[50%]'>
   <h3 className='h-[45px] '>GET CONNECTED</h3>
   <div className='h-[90px] w-[307px] flex justify-between'>
    <img className='h-[24px] w-[24px]' src={img82} alt="" />
    <img className='h-[24px] w-[24px]' src={img83} alt="" />
    <img className='h-[24px] w-[24px]' src={img84} alt="" />
    <img className='h-[24px] w-[24px]' src={img85} alt="" />
    <img className='h-[24px] w-[24px]' src={img86} alt="" />
    <img className='h-[24px] w-[24px]' src={img87} alt="" />

   </div>
 </div>
 </div>
 

 <div className='h-[205px]  text-sm '>
    <div className='h-[125px] w-[50%]'> 
<div className='h-[40px]'>
 <h3 className='font-bold'>KEEP ME POSTED !</h3>
</div>

<div className='h-[78px] w-[50%] flex justify-between flex-col mr-5'>
<div className='h-[35px]'>
<input placeholder='email address' type="text" className='text-gray-400 bg-white w-[330px] h-[35px]' />
</div>
<div className='flex gap-2 items-center'>
<select className='bg-white h-[40px] w-[150px]  text-gray-400 text-center mt-2'>
    <option className=' hover:bg-gray-400 transition bg-white cursor-pointer h-[25px] '> </option>
    <option className=' hover:bg-gray-400 transition bg-white cursor-pointer h-[25px] pl-2  text-start ' > Men's watches</option>
    <option className=' hover:bg-gray-400 transition bg-white cursor-pointer h-[25px] pl-2 text-start '> Women's watches</option>

</select>
<div className='h-[32px] p-2.5 bg-zinc-400 font-bold flex justify-center items-center rounded-xs text-white  texr-sm hover:bg-zinc-400 duration-300 '> SUBSCRIBE

</div>
</div>
</div>
    </div>
 </div>







         </div>



         <div className=' text-gray-400 h-[130px] w-full flex justify-center items-center text-sm font-sans'>© Prisma Watches | All rights reserved 1948 - 2024</div>
</div>




    </div>
    
    </>
  )
}

export default Stn9