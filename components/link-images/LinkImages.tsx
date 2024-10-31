import React from 'react'

const LinkImages = () => {
	return (
		<>

			<div className=" text-white mb-7 grid grid-cols-1 xlg:gap-1 gap-8 mx-0 s-mobile:-ml-1  md:ml-1 sm:ml-24  lg:ml-12   sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2 xlg:ml-[78px]">

				<div className="   relative w-[351px] h-[201px] s-mobile:w-[298px] m-mobile:w-[351px] l-mobile:w-[400px]  sm:w-[493px] lg:w-[373px] xlg:w-[483px]">
					<img className="h-full w-full"
						src='https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbWMxMS1ha2UzMzA4LWNoaW0uanBn.jpg'
						alt=""
					/>

					<div className='w-full  h-[200px] absolute top-0  flex flex-col justify-center ml-3 '>
						<p className=' font-black '>Winter Fruits</p>
						<p className='font-black text-lg pb-1'>Oranges and monstera</p>
						<p className='font-medium text-lg pb-1'>Flat 25% Discount</p>
						<button
							type="button"
							className=" mt-2 m-mobile:mx-auto
							 bg-themecolor py-1 px-2  w-[122px]  mx-auto text-sm font-semibold text-white shadow-sm s-mobile:hover:bg-green-500 s-mobile:focus-visible:outline s-mobile:focus-visible:outline-2 s-mobile:focus-visible:outline-offset-2 s-mobile:focus-visible:outline-green-100"
						>Shop Now </button>
					</div>
				</div>

				<div className="relative w-[351px] h-[201px] s-mobile:w-[298px] m-mobile:w-[351px] l-mobile:w-[400px]  sm:w-[493px]   lg:w-[373px] xlg:w-[483px]">
					<img
						className="h-full w-full "
						src='https://media.istockphoto.com/id/821583034/photo/various-fruits-juices.jpg?b=1&s=170667a&w=0&k=20&c=9qYLUVr1UXv0il7SFbMw-_XNityX0-zYFPOOcWylKTs='
						alt=""
					/>

					<div className='w-full  h-[200px] absolute top-0  flex flex-col justify-center ml-3 '>
						<p className=' font-black '>Prod Of India</p>
						<p className='font-black text-lg pb-1'>Organic Fresh Drinks</p>
						<p className='font-medium text-lg pb-1'>Get 30% Off On Your Order</p>
						<button
							type="button"
							className=" mt-2 m-mobile:mx-auto
							 bg-themecolor py-1 px-2  w-[122px]  mx-auto text-sm font-semibold text-white shadow-sm s-mobile:hover:bg-green-500 s-mobile:focus-visible:outline s-mobile:focus-visible:outline-2 s-mobile:focus-visible:outline-offset-2 s-mobile:focus-visible:outline-green-100"
						>Shop Now </button>
					</div>
				</div>


			</div>





		</>
	)
}

export default LinkImages