// import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "@headlessui/react";
import React from "react";
import ReactStars from "react-rating-stars-component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/product-slice";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";
import product from "../../models/product";
import TrendingProduct from "../trending-product";
import FeaturedProductCarousel from "../featured-product-carousel";

const FeaturedProducts = ({ home }: any) => {
  const products = useSelector(selectAllProducts);
  const translatedTexts = useSelector(selectAllTranslatedTexts);

  console.log(products);

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
        .filter((t: any) => t.key === key)
        .map((t: any) => t.translatedText)[0]
      : "";
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1680 },
      items: 5,
    },
    LargeDesktop: {
      breakpoint: { max: 1680, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>

      <div className=" border-2
       s-mobile:w-[298px] s-mobile:h-[440px]  s-mobile:-ml-1
       m-mobile:w-[350px] m-mobile:h-[440px]
       l-mobile:w-[400px] l-mobile:h-[440px] 
       md:w-[490px] md:h-[440px] md:ml-1
       lg:w-[760px] lg:ml-12
       xlg:w-[1034px] xlg:h-[518px] xlg:ml-20 
    pb-4 w-[1034px]    ml-[92px]">

        <div className=" xlg:pl-[50px] pt-2 md:pl-[40px]
        text-[16px] font-bold text-center pb-4 before:content-['—'] after:content-['—']  before:text-themecolor after:ml-4 after:text-themecolor after:w-14">
          Featured Products
        </div>
        <div className="w-full font-bold">
          <Tab.Group>
            <div className="overflow-hidden relative pb-4">

              <div>
                <div className="sm:hidden  ">
                  <label className="sr-only">Select a tab</label>
                  <select id="tabs" name="tabs"
                    className="
                     s-mobile:w-[280px]  s-mobile:ml-[9px] m-mobile:w-[330px] l-mobile:w-[380px] 
                   rounded-md border-gray-300 py-2   text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option>New Product</option>

                    <option>Featured Product</option>

                    <option selected>BestSeller</option>

                  </select>
                </div>
                <div className="hidden sm:block md:w-[480px]">
                  <div className=" ">
                    <nav className="  md:pl-16 lg:pl-[200px] xlg:pl-96 flex space-x-8 uppercase" aria-label="Tabs">
                      {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                      <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-[12px] font-medium">New Product</a>

                      <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-[12px] font-medium">Featured Product</a>

                      <a href="#" className="border-themecolor text-themecolor whitespace-nowrap border-b-2 py-4 px-1 text-[12px] font-medium" aria-current="page">BestSeller</a>

                    </nav>
                  </div>
                </div>
              </div>

            </div>
            <Tab.Panels>
              <Tab.Panel>

                <div className="bg-white 
              
                ">
                  <div className=" 
                   s-mobile:w-[280px] s-mobile:h-[300px] 
                   m-mobile:w-[330px] m-mobile:h-[300px]  
                   l-mobile:w-[400px] l-mobile:h-[300px] l-mobile:-ml-1
                   md:w-[470px] md:h-[300px] md:-ml-3 md:-mt-5 
                   lg:w-[760px] lg:h-[100px] lg:mt-4 lg:ml-4
                   xlg:w-[1034px] xlg:h-[400px] xlg:-mt-6 
                  ">
                    <div className=" xlg:ml-2
                     mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <FeaturedProductCarousel />

                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
