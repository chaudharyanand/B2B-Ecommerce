import React from "react";
import SortBy from "../sort-by/SortBy";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../features/product/product-slice";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import router from "next/router";

const Item = () => {
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
  return (
    <>
      <div className="bg-white">
        <div className="">
          <SortBy />
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-0 md:gap-4 items-center justify-between">
            {products &&
              products.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="md:pb-6 border-[.5px] md:border-none  overflow-hidden"
                  >
                    <div className="h-52 md:h-64 overflow-hidden">
                      <a
                        href={`/products?id=${product.id}`}
                        key={`${product.id}`}
                        className="cursor-pointer"
                      >
                        <img
                          className={`h-52 md:h-64 w-full hover:scale-110 duration-200`}
                          alt={product.slug}
                          src={
                            product.mainImage
                              ? process.env.NEXT_PUBLIC_BASE_URL +
                                product.mainImage.original
                              : ""
                          }
                        />
                      </a>
                    </div>
                    <div className="flex justify-between items-center px-2 pt-2">
                      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                        <a
                          href={`/products?id=${product.id}`}
                          key={`${product.id}`}
                          className="text-themetextcolor text-base text-left font-medium hover:text-themecolor cursor-pointer"
                        >
                          {/* {product.name} */}
                          {getText("Product." + product.name)}
                        </a>
                      </div>
                      <div className="ml-2">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-gray-400 cursor-pointer hover:text-gray-700"
                        />
                      </div>
                    </div>
                    <div className="mb-1 px-2">
                      <ReactStars
                        count={5}
                        value={4}
                        size={12}
                        activeColor="#ee9c00"
                        color="#eaeaea"
                        isHalf={true}
                        edit={false}
                        className=""
                      />
                    </div>
                    <div className="flex px-2 pb-2">
                      <div className="text-themetextcolor text-sm font-bold">
                        {product.price} USD
                      </div>
                      <div className="text-themetextcolor text-sm opacity-40 ml-2 line-through">
                        $89.04 USD
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
