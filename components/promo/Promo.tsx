import Link from "next/link";
import React from "react";

const Promo = ({ home }: any) => {
  return (
    <>
      {home?.attributes?.promoImages?.map((promoImage: any) => (
        <div key={promoImage.id} className="py-4">
          <div className="relative">
            <img
              alt=""
              className="w-full "
              src={
                promoImage && promoImage.image && promoImage.image.data
                  ? process.env.NEXT_PUBLIC_BASE_URL +
                    promoImage.image.data.attributes.url
                  : ""
              }
            />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full">
              <div className="mb-1 font-bold text-themecolor text-sm lg:text-lg text-center">
                {promoImage.text}
              </div>
              <div className="mb-2 md:mb-1 lg:mb-2 font-bold text-themetextcolor text-sm lg:text-2xl text-center">
                {promoImage.headerText}
              </div>
              <div className="mb-2 md:mb-1 lg:mb-3 text-themetextcolor text-xs lg:text-sm text-center max-w-xs lg:max-w-sm">
                {promoImage.description}
              </div>
              <Link href="#">
                <a>
                  <button
                    type="button"
                    title=""
                    className={`bg-themecolor px-2 py-1 text-sm lg:text-base lg:px-10 lg:py-2.5 text-white hover:bg-opacity-90`}
                  >
                    Shop Now
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Promo;
