import React from 'react'
import { AiFillFacebook,AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {BsEmojiSmile} from 'react-icons/bs'
import {ImSad} from 'react-icons/im'
function Footer() {

  return (
    <>
    <div className='w-full h-full'>
      <div className='bg-[#1B1464]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10  text-white p-10'>
        
          <div className=''>
             <h1 className='text-[4rem]'>logo</h1>
             <h1>we help company to publish their help center ssd number for their services</h1>  
          </div>
          <div className='flex mt-8'>
             
             <AiFillFacebook size={40}/>
             <AiFillInstagram size={40}/>
             <AiFillLinkedin size={40}/>
          </div>
          <div className=' mt-6'>
            <h1 className='text-white'>Please let's know</h1>
            <div className='flex gap-8 mt-2'>
            <BsEmojiSmile size={40} className='cursor-pointer'/>
             <ImSad size={40} className='cursor-pointer'/>
            </div>
             
             
          </div>
          <div className='mt-6 '>
             <h1 className='text-xl'>Contant US</h1>
             <h1><span className='font-bold'>Tel:</span>+250-787-435-234</h1>
             <h1><span className='font-bold'>Email:</span>support@gmail.com</h1>
          </div>
        </div>
        <h1 className='text-center text-white text-sm font-think p-2'>Copyright © COMPANY NAME 2023</h1>
      </div>
    </div>
    </>
  )
}

export default Footer