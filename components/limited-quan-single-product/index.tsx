import React from 'react'
import Price from '../price/Price';

const SingleProduct = ({ product }: any) => {
  return (
    <>
      <div className='xlg:w-[780px] xlg:h-[320px] lg:py-4 s-mobile:flex s-mobile:flex-col s-mobile:gap-4   lg:w-[520px] lg:h-[387px] lg:flex lg:flex-row  md:w-[325px]  md:h-[370px] md:flex md:flex-row'>
        <div className='  
        s-mobile:w-[298px] m-mobile:w-[351px] l-mobile:w-[400px] sm:w-[1008px] lg:w-[220px] lg:h-[387px]
        s-mobile:h-[550px] m-mobile:h-[351px] l-mobile:h-[400px] sm:h-[400px]  
       md:w-[200px] md:h-[190px] md:my-auto
       xlg:w-[430px] xlg:h-[320px] xlg:ml-10
       '>
          <img
            className={`
          
             s-mobile:w-[220px]
             m-mobile:w-[250px]
             lg:w-[140px] lg:h-[190px] lg:mt-[20px] md:w-[150px] md:h-[190px] 
             xlg:w-[191px] xlg:h-[200px]
             md:my-auto  md:ml-4
             s-mobile:mt-10  m-mobile:ml-8 l-mobile:ml-16 s-mobile:bg-green-700
            lg:-mr-8
           hover:opacity-80 duration-200 `}
            alt={product.slug}
            src={
              product.mainImage
                ? process.env.NEXT_PUBLIC_BASE_URL +
                product.mainImage.original
                : ""
            }
          />
        </div>
        <div className='
        flex flex-col justify-center s-mobile:w-[402px] m-mobile:w-[402px] l-mobile:w-[402px] sm:w-[402px]  h-full pl-2 
        md:w-[150px] md:h-[190px] md:mt-[70px] lg:w-[300px] lg:h-[387px]  lg:-mt-[60px] 
       xlg:-ml-10 '>
          <div className='mb-8 md:m-1 '>
            <span className='text-themecolor font-black md:text-[15px] md:font-semibold '>
              Limited Quantities</span>
            <h1 className='text-2xl font-950 md:from-neutral-950 md:text-[16px] md:font-semibold '>
              Deal Of The day  </h1>
          </div>
          <div className='mb-8'>
            <span className='font-semibold md:text-[16px] md:font-semibold md:-mt-10'>
              {product.name}</span>
            <p>
              <span className='font-semibold md:text-[14px] md:font-semibold'>
                <Price price={product.price} symbolAtEnd={true} />
              </span>
              <span className='line-through pl-4 md:text-[12px] md:font-semibold'>$80.00 USD</span>
            </p>
          </div>
          <div className='flex s-mobile:text-xs s-mobile:font-semibold md:text-[12px] md:font-semibold
         mb-5 md:grid md:grid-cols-2 md:gap-2 rounded lg:grid lg:grid-cols-4
         '>
            <span className='bg-themecolor rounded p-2 m-1 md:p-3 md:m-0 md:w-[44px] md:h-[50px]  '>&nbsp;5 DAYS</span>
            <span className='bg-themecolor p-2 m-1 rounded md:p-3 md:m-0 md:w-[44px] md:h-[50px] '>12 HRS</span>
            <span className='bg-themecolor p-2 m-1 md:p-3 rounded md:m-0 md:w-[44px] md:h-[50px]'>35 MIN</span>
            <span className='bg-themecolor p-2 m-1 md:p-3 md:m-0 rounded md:w-[44px] md:h-[50px]'>45 SEC</span>
          </div>

          <div className=' hover:bg-green-500 rounded w-40  h-10 md:pl-1  py-2 md:py-0 px-2 md:px-0 ml-3 md:-mt-0 md:mx-0 flex gap-3 border-2 text-base md:w-[140px] md:h-[40px] md:mb-2  '>
            <span>
              <svg className='w-5 md:w-5 md:pt-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
            </span>
            <span className='text-base  md:mb-5  md:text-[15px] md:from-neutral-950 md:pt-2 '> ADD TO CART</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct;
