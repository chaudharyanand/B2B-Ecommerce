import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/product-slice";
import SingleProduct from '../limited-quan-single-product';
import TrendingProduct from '../trending-product';

const FeaturedProductCarousel = () => {
  const products = useSelector(selectAllProducts);
  console.log(products);

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? products.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === products.length - 1 ? 0 : curr + 1))


  return (
    <>
      <div className='relative  s-mobile:overflow-hidden m-mobile:overflow-hidden  l-mobile:overflow-hidden sm:overflow-hidden md:overflow-hidden lg:overflow-hidden
        lg:flex   
        s-mobile:w-[280px] s-mobile:h-[290px] s-mobile:ml-2
         m-mobile:w-[330px] m-mobile:h-[300px]  
        l-mobile:w-[370px] l-mobile:h-[300px] l-mobile:ml-5
        md:w-[470px] md:h-[300px] 
        lg:w-[760px] lg:h-[320px] lg:-ml-4 lg:-mt-10
        xlg:w-[1034px] xlg:h-[380px] xlg:-ml-6 xlg:-mt-8

        '>
        <div className=' 
         s-mobile:w-[280px] s-mobile:h-[300px] s-mobile:ml-2 
         m-mobile:w-[330px] m-mobile:h-[300px]  
         l-mobile:w-[370px] l-mobile:h-[300px] l-mobile:ml-5
         md:w-[450px] md:h-[300px] 
         lg:w-[760px] lg:h-[300px] lg:-mr-20
         xlg:w-[1034px] xlg:h-[400px] xlg:ml-[4px]

          flex transition-transform ease-out duration-700 
        '
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {
            products && products.map((prod: any) => (
              <TrendingProduct product={prod} />
            ))
          }
        </div>

        {/* <div className='absolute inset-0 mt-20 lg:mt-20 xlg:mt-32  lg:ml-[8px] md:ml-4 md:mt-30'>
          <button onClick={prev} className='rounded-full shadow float-left mt-10  '>
            <svg className=" lg:w-6  md:w-5 s-mobile:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button onClick={next} className=' rounded-full shadow  border-none  mt-10 flex float-right '>
            <svg className="xlg:w-6 lg:w-6 md:w-5 s-mobile:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </button>
        </div> */}

      </div>


    </>
  );
};

export default FeaturedProductCarousel;
