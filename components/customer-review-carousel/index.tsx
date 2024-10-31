import { useEffect, useState } from 'react';
import CustomerFeedback from "../customer-feedback";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/product-slice";

const CustomerReviewCarousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const products = useSelector(selectAllProducts);
  const reviews = products.filter((_, index) => index < 3);

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? reviews.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === reviews.length - 1 ? 0 : curr + 1))

  // useEffect(() => {
  //   if (!autoSlide) return
  //   const slideInterval = setInterval(next, autoSlideInterval)
  //   return () => clearInterval(slideInterval)
  // })
  return (
    <>
      <div className="md:-ml-5  w-[320px] overflow-hidden relative">
        <div className=
          " w-full  -ml-6 flex transition-transform ease-out duration-700"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {
            reviews && reviews.map((prod: any) => (
              <CustomerFeedback review={prod} />
            ))
          }
        </div>

        {/* <div className='absolute inset-0  lg:mt-8 md:mt-12 '>
          <button onClick={prev} className=' rounded-full shadow float-left mt-32 '>
            <svg className=" lg:w-4 xlg:w-6 md:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button onClick={next} className=' rounded-full shadow    mt-32 ml-56 '>
            <svg className=" lg:w-4 xlg:w-6 md:w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </button>
        </div> */}

        <div className="absolute bottom-4 ml-28">
          <div className="flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <div
                className={`
                   transition-all w-2 h-2 bg-green-600 rounded-full
                   ${curr === i ? "p-1" : "bg-opacity-50"}
  `}
              ></div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
};

export default CustomerReviewCarousel;
