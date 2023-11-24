import React from 'react'
import userJsonCard from './Usercontainer.json'

function CreatedCard() {
  return (
    <div className='w-full h-full'>
      <div className='mt-10'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 md:mx-20 rounded-sm mb-40">
          {userJsonCard.map((card, index) => (
            <div key={index} className="bg-white shadow-2xl rounded-xl px-2">
              <div className='mt-4'>
                <div className='flex gap-4'>
                  <img src={card.image} alt="" className='rounded-[10px] w-12 h-12' />
                  <div>
                    <h2 className="text-xl font-semibold text-[27px] text-center">{card.title}</h2>
                    <p className='font-bold text-center'>{card.service}</p>
                  </div>
                </div>
                <h1 className='text-center font-bold text-[50px]'>{card.ssdNo}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CreatedCard