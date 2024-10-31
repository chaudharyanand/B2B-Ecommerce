import React from 'react'

const NewCustomerOffer = () => {
  return (
    <>

      <div className="  mt-7 grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div className='relative s-mobile:w-[298px] m-mobile:w-[351px] l-mobile:w-[400px] sm:w-[1008px] md:w-[490px] md:ml-[8px] lg:w-[760px] lg:-ml-12 xlg:mt-10 xlg:w-[1045px] xlg:-ml-5 '>
          <img
            alt=""
            src='https://img.freepik.com/premium-photo/vegetable-salad-plastic-disposable-bowl-green-leaf-palm-tree-blue-background_164357-8582.jpg?size=626&ext=jpg&ga=GA1.2.484382153.1679412127&semt=ais'
            className='-ml-1 s-mobile:w-[298px]  m-mobile:w-[351px] l-mobile:w-[400px] sm:w-[1008px] md:w-[746px] lg:w-[1008px]
            s-mobile:h-[300px]  m-mobile:h-[399px] l-mobile:h-[449px] sm:h-[273px] md:h-[273px] lg:h-[273px] lg:ml-24 xlg:w-[1045px] 
            '
          />
          <div className=' absolute md:left-[15px] w-full md:top-8 lg:left-[130px]  lg:top-8 top-10   s-mobile:left-0 m-mobile:left-2 m-mobile:top-20 l-mobile:left-2 l-mobile:top-[100px] h-200px flex flex-col justify-center items-center '>
            <span className='text-themecolor text-lg font-bold   '>
              New Customer Offer</span>
            <span className='text-[24px] font-bold'>
              Cooked Vegetable With <br /><span className='pl-8'>Sauce And Space</span>
            </span>
            <span className='text-[14px] mb-6'>
              Lorem ipsum dolor sit amet consectetur <br /> <span className='pl-5'>adipisicing elit doli Voluptatum odio.</span> <br />
              <span className='pl-16'>unde minus officiis </span>
            </span>
            <button
              type="button"
              className=" bg-themecolor py-1 px-2  w-[122px]  mx-auto text-sm font-semibold text-white shadow-sm s-mobile:hover:bg-green-500 s-mobile:focus-visible:outline s-mobile:focus-visible:outline-2 s-mobile:focus-visible:outline-offset-2 s-mobile:focus-visible:outline-green-100"
            >Shop Now</button>
          </div>
        </div>




      </div>
    </>
  )
}

export default NewCustomerOffer;