import React from 'react'

const FreshFood = () => {
  return (
    <>
      <div className="
       w-[280px] h-[334px]  md:w-[230px]  mb-8 relative md:-ml-12 ">
        <img
          src='https://img.freepik.com/free-photo/weekend-shopping-all-together-with-family_329181-17376.jpg?size=626&ext=jpg&ga=GA1.2.484382153.1679412127&semt=ais'
          className='h-full '
          alt="" />
        <div className="  mb-4 w-full h-24 absolute top-4 -left-3 flex flex-col">
          <h2 className='pl-6 py-1 text-gray-700 font-black text-sm'>Fresh Food</h2>
          <h1 className='pl-6 font-black text-lg'>Fruits Collection</h1>

          <button
            type="button"
            className=" bg-themecolor py-1 px-2 w-32 ml-6 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  )
}

export default FreshFood;