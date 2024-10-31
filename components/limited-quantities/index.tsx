import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../features/product/product-slice';
import LimitedQuantityCarousel from '../limited-quantities-carousel';

const LimitedQuantity = () => {
  return (
    <>
      {/* <div className=" w-[1008px] h-80 ml-24 my-[60px] mrrrr-24   flex  ">
        <div className='w-  mx-4 my-4'>
          <LimitedQuantityCarousel />
        </div>
        <div className='w- w-48 h-72 bg-themecolor my-auto mrrrr-3 relative'>
          <img
            src="https://img.freepik.com/free-photo/assortment-different-fresh-vegetables_23-2148655292.jpg?size=338&ext=jpg&.484382153.1679412127&semt=ais"
            className='w-full h-full'
            alt="" />
          <div className='absolute top-0 left-4 flex flex-col '>
            <span className='px-4 py-1 text-slate-500'>Winter Veg</span>
            <span className='px-4 py-1 text-2xl font-black'>VEGAN</span>
            <span className='px-10 py-1 text-base font-black'>49.99$</span>
            <button
              type="button"
              className=" bg-themecolor p w-32  mx-auto text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:o focus-visible:outline- focus-visible:outline-green-100"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div> */}

      <div className=" border-2 m-mobile:w-[351px] l-mobile:w-[400px]  l-mobile:h-[1010px]
       lg:ml-12 lg:flex lg:flex-row md:flex md:flex-row md:w-[492px] md:h-[350px] md:ml-[1px]
        s-mobile:w-[298px] s-mobile:-ml-[6px] lg:w-[760px] lg:h-[387px] mt-7 grid grid-cols-1 
        sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-8
        xlg:w-[1030px] xlg:h-[387px] xlg:ml-20
      ">

        <div className=' lg:flex lg:flex-row lg:w-[760px] lg:h-[387px]  lg:mt-[30px] s-mobile:w-[298px]  s-mobile:mb-3  l-mobile:w-[400px] sm:w-[1008px] md:w-[492px] md:h-[453px] md:flex md:flex-col 
         s-mobile:h-[1020px] m-mobile:h-[990px] l-mobile:h-[1010px] sm:h-[387px] xlg:w-[1030px]
        '>

          <div className=' s-mobile:w-[298px] m-mobile:w-[351px] l-mobile:w-[400px]  sm:w-[1008px] md:w-[325px]  md:h-[350px]  
          s-mobile:h-[570px] m-mobile:h-[627px] l-mobile:h-[400px] sm:h-[387px]  lg:w-[520px] lg:h-[387px]
         s-mobile:mb-16 xlg:w-[780px] xlg:h-[320px] 
         
         '>
            <LimitedQuantityCarousel autoSlide={false} />
          </div>

        </div>

        <div className='s-mobile:-mt-[400px]  lg:w-[200px] h-[350px] md:w-[140px] md:h-[320px] md:ml-[50px]    md:-mt-12'>

          <div className='s-mobile:w-[298px] m-mobile:w-[351px]  l-mobile:w-[390px] l-mobile:-mb-40px] sm:w-[1008px] md:w-[140px] md:h-[320px] md:pt-2 lg:w-[200px]
          s-mobile:h-[400px] m-mobile:h-[375px] l-mobile:h-[350px] sm:h-[387px]  lg:h-[390px]
         relative   m-mobile:mt-[25px]  md:-ml-10 md:my-16
'>

            <img
              src="https://img.freepik.com/free-photo/assortment-different-fresh-vegetables_23-2148655292.jpg?size=338&ext=jpg&.484382153.1679412127&semt=ais"
              className='m-mobile:w-[340px] h-full l-mobile:w-[390px]  l-mobile:h-[430px]   lg:px-1
          s-mobile:w-[290px] md:w-full md:h-full lg:w-[200px] lg:h-[340px]
                '
              alt="" />

            <div className='absolute top-0 md:-top-[40px] left-4 flex flex-col '>
              <span className='px-4 py-1 m-mobile:mt-20 text-slate-500'>Winter Veg</span>
              <span className='px-4 py-1 text-2xl font-black'>VEGAN</span>
              <span className='px-10 py-1 text-base font-black'>49.99$</span>
              <button
                type="button"
                className=" bg-themecolor py-1 px-2 md:-ml-[6px] md:mt-2  w-[122px]  mx-auto text-sm font-semibold text-white shadow-sm s-mobile:hover:bg-green-500 s-mobile:focus-visible:outline s-mobile:focus-visible:outline-2 s-mobile:focus-visible:outline-offset-2 s-mobile:focus-visible:outline-green-100"
              >Shop Now</button>

            </div>

          </div>

        </div>
      </div>



    </>
  )
}

export default LimitedQuantity;