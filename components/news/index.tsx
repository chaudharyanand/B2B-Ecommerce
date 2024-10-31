import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const News = ({ }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className=" 
      s-mobile:w-[298px] s-mobile:h-[660px] s-mobile:-ml-1 s-mobile:mt-6 s-mobile:pt-3 s-mobile:pb-5
      m-mobile:w-[351px] m-mobile:h-[660px]
      l-mobile:w-[399px] l-mobile:h-[640px]
      md:w-[490px] md:h-[680px] md:ml-1
      lg:w-[760px] lg:h-[700px]  lg:ml-12 lg:pb-5
      xlg:w-[1034px] xlg:h-[542px] border-2 xlg:mb-[100px] xlg:ml-20 xlg:mt-10 xlg:p-2">
        <div className="text-3xl font-black text-center py-4 before:content-['—'] after:content-['—'] before:mr-4 before:text-themecolor after:ml-4 after:text-themecolor after:w-14">
          Recent News
        </div>
        <Carousel
          dotListClass="custom-dot-list-style"
          swipeable={true}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          responsive={responsive}>

          <div className="py-1  m-2">
            <Link href="/">
              <a className='flex flex-col mb-5'>
                <div className='border'>
                  <img
                    className="h-72 w-full xlg:w-[318px] xlg:h-[165px]"
                    src="https://kimchimari.com/wp-content/uploads/2018/06/Korean-Green-Onion-Salad.jpg"
                    alt=""

                  />
                  <div className="flex justify-between my-2">
                    <div className="text-gray-400 uppercase text-sm font-medium">
                      Jun 17, 2022
                    </div>
                    <div className="text-gray-400 text-sm font-medium">6 comment</div>
                  </div>
                </div>

                <div className="p-2 flex flex-col justify-between gap-5 mt-5">

                  <div className=" s-mobile:text-xs  
                    text-themetextcolor  text-2xl font-black">
                    <p>Green Onion Knife And Salad Placed
                    </p>
                  </div>

                  <div className="
                    text-1xl  text-themetextcolor">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, inventore. Nemo, vitae.
                    </p>
                  </div>

                  <div className="
                    text-themecolor hover:underline font-black">
                    Read More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="py-1  m-2">
            <Link href="/">
              <a className='flex flex-col mb-5'>
                <div className='border'>
                  <img
                    className="h-72 w-full xlg:w-[318px] xlg:h-[165px]"
                    src="https://cdn.shopify.com/s/files/1/0412/8151/9765/articles/blog-2_f16054cd-c759-43fc-a870-37322e322142_1024x1024.jpg?v=1674017013"

                    alt=""

                  />
                  <div className="flex justify-between my-2">
                    <div className="text-gray-400 uppercase text-sm font-medium">
                      Jun 17, 2022
                    </div>
                    <div className="text-gray-400 text-sm font-medium">6 comment</div>
                  </div>
                </div>

                <div className="p-2 flex flex-col justify-between gap-5 mt-5">

                  <div className=" s-mobile:text-xs  
                    text-themetextcolor  text-2xl font-black">
                    <p>All Time Fresh Every Time Healthy
                    </p>
                  </div>

                  <div className="
                    text-1xl  text-themetextcolor">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, inventore. Nemo, vitae.
                    </p>
                  </div>

                  <div className=" 
                    text-themecolor hover:underline font-black">
                    Read More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="py-1  m-2">
            <Link href="/">
              <a className='flex flex-col mb-5'>
                <div className='border'>
                  <img
                    className="h-72 w-full xlg:w-[318px] xlg:h-[165px]"
                    src="https://c.ndtvimg.com/2022-05/6jqtnhig_green-juice-_625x300_09_May_22.jpg"

                    alt=""

                  />
                  <div className="flex justify-between my-2">
                    <div className="text-gray-400 uppercase text-sm font-medium">
                      Jun 17, 2022
                    </div>
                    <div className="text-gray-400 text-sm font-medium">6 comment</div>
                  </div>
                </div>

                <div className="p-2 flex flex-col justify-between gap-5 mt-5">

                  <div className=" s-mobile:text-xs  
                    text-themetextcolor  text-2xl font-black">
                    <p>Health and Skin For Organic
                    </p>
                  </div>

                  <div className="
                    text-1xl  text-themetextcolor">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, inventore. Nemo, vitae.
                    </p>
                  </div>

                  <div className="
                    text-themecolor hover:underline font-black">
                    Read More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                  </div>
                </div>
              </a>
            </Link>
          </div>



        </Carousel>
      </div>



    </>
  )
}

export default News;
