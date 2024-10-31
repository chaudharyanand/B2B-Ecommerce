import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/product-slice";
import FreshVegetable from "../fresh-vegetable";
import FreshVegetableCarousel from "../fresh-vegetable-carousel";

const FreshVegetables = ({ home }: any) => {
  const products = useSelector(selectAllProducts);

  return (
    <>
      <div className=" border-2
      s-mobile:w-[298px] s-mobile:h-[440px]  s-mobile:-ml-1
       m-mobile:w-[350px] m-mobile:h-[440px]
       l-mobile:w-[400px] l-mobile:h-[440px] mt-[60px]
       md:w-[490px] md:h-[440px] md:ml-1 md:mt-10
       lg:w-[760px]  lg:ml-12 
       xlg:w-[1034px] xlg:h-[440px] xlg:ml-20 
    pb-4 w-[1034px]   h-[500px] ml-[92px]">

        <div className=" xlg:pl-[50px] pt-6 md:pl-[40px] 
        text-[16px] font-bold text-center pb-8 before:content-['—'] after:content-['—']  before:text-themecolor after:ml-4 after:text-themecolor after:w-14">
          Fresh Vegetables
        </div>
        <div className="w-full font-bold">
          <div className="bg-white  ">
            <div className=" 
                   s-mobile:w-[280px] s-mobile:h-[300px] 
                   m-mobile:w-[330px] m-mobile:h-[300px]  
                   l-mobile:w-[400px] l-mobile:h-[300px] 
                   md:w-[470px] md:h-[300px] md:-ml-8 md:-mt-2 
                   lg:w-[760px] lg:h-[300px] lg:mt-4 lg:ml-4
                   xlg:w-[1034px] xlg:h-[300px] xlg:-mt-6 
                  ">
              <div className=" xlg:ml-3
                     mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <FreshVegetableCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FreshVegetables;
