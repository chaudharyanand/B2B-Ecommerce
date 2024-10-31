import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/product-slice";
import SingleProduct from '../limited-quan-single-product';

const LimitedQuantityCarousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const products = useSelector(selectAllProducts);

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? products.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === products.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  })
  return (
    <>
      <div className='relative s-mobile:overflow-hidden m-mobile:overflow-hidden  l-mobile:overflow-hidden sm:overflow-hidden md:overflow-hidden lg:overflow-hidden
        lg:flex   s-mobile:w-[298px] m-mobile:w-[351px] l-mobile:w-[400px] sm:w-[1008px]  md:w-[325px]  md:h-[350px] 
         s-mobile:h-[590px] m-mobile:h-[627px] l-mobile:h-[640px] sm:h-[387px]   lg:w-[520px] lg:h-[387px]
         xlg:w-[780px] xlg:h-[320px]
        '>
        <div className=' s-mobile:w-[298px]  m-mobile:w-[395px] l-mobile:w-[400px] sm:w-[1008px]  md:w-[325px]  md:h-[330px] md:my-3 
         s-mobile:h-[600px] m-mobile:h-[627px] l-mobile:h-[700px] sm:h-[387px] lg:w-[520px] lg:h-[387px]
          flex transition-transform ease-out duration-700   xlg:w-[780px] xlg:h-[320px]
        '
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {
            products && products.map((prod: any) => (
              <SingleProduct product={prod} />
            ))
          }
        </div>

        {/* <div className='absolute inset-0  mt-20 lg:mt-24   md:mt-40'>
          <button onClick={prev} className='rounded-full shadow float-left mt-10 '>
            <svg className="lg:w-6 md:w-5 s-mobile:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button onClick={next} className=' rounded-full shadow  border-none  mt-10 flex float-right '>
            <svg className=" lg:w-6 md:w-5 s-mobile:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </button>
        </div> */}

        {/* <div className="absolute bottom-4 s-mobile:-bottom-1 ml-28">
          <div className="flex items-center justify-center gap-2">
            {products.map((_, i) => (
              <div
                className={`
                   transition-all w-2 h-2 bg-green-600 rounded-full
                   ${curr === i ? "p-1" : "bg-opacity-50"}
  `}
              ></div>
            ))}
          </div>
        </div> */}

      </div>


    </>
  );
};

export default LimitedQuantityCarousel;
