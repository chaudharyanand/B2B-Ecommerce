import React from 'react'

const PureAndNatural = () => {
  return (
    <>
      <div className=" w-[226px] h-[316px]  md:-ml-12 mb-8 relative ">
        <img
          src="https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=600"
          className='w-full h-full '
          alt="" />
        <div className="  mb-4 w-full h-24 absolute top-4 flex flex-col">
          <p className='pl-6 py-1 text-gray-700 font-black text-sm'>Pure and Natural</p>
          <p className='pl-6 font-black text-lg'>The Benefits of  <br /> vegetables</p>
          <button
            type="button"
            className=" bg-themecolor py-1 px-2 w-32  ml-4 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  )
}

export default PureAndNatural;