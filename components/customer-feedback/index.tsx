import React from 'react'
import ReactStars from "react-rating-stars-component";
const CustomerFeedback = ({ reviewData }: any) => {
  return (
    <>

      <div className='w-[226px] h-[320px]flex flex-col   mx-auto'>
        <div className='w-[226px] h-[90px]'>
          <span className="w-14 h-14 mt-4 flex rounded mx-auto  border-2 border-themecolor">

            <i className='w-12 h12 mx-1 my-1 rounded bg-themecolor'>
              <svg className='w-8 mx-1 my-1 px-1 pt-1 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
            </i>
          </span>
        </div>
        <div className='flex flex-col  items-center'>
          <span className='text-[14px] font-black py-2'>"Friendly Support"</span>
          <span className='pl-2 py-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid tempore facilis!</span>
          <span className='py-2 text-[14px] font-black'>{reviewData.name}</span>
          <span className='mb-8 '>
            <ReactStars
              count={5}
              value={4}
              size={20}
              activeColor="#ffd700"
              color="#eaeaea"
              isHalf={true}
              edit={false}
            />
          </span>
        </div>

      </div>


    </>
  )
}

export default CustomerFeedback;