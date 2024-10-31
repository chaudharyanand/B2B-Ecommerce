import React from 'react'

const BigOffer = () => {
  return (
    <>
      <div className='bg-red-500 items-center mt-32 h-56 flex flex-col justify-center relative'>
        <img
          className='w-full h-full'
          src='https://img.freepik.com/free-photo/composition-delicious-fresh-vegetables-with-copy-space_23-2148642972.jpg?size=626&ext=jpg&ga=GA1.1.484382153.1679412127&semt=sph'
          alt="" />
        <div className='absolute '>
          <span className='text-4xl text-themecolor  font-black'>BIG 50%</span>
          <span className='text-3xl text-white font-black grid place-content-center'>OFFER</span>
          <p className='text-white'>Only Accessories <br /><span className='grid place-content-center'> Fashion</span></p>
        </div>

      </div>
    </>
  )
}

export default BigOffer;