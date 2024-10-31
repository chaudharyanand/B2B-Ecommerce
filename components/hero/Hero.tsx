import {
  faAnglesLeft,
  faAnglesRight,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import "animate.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import translate from "../../pages/api/translate";

const Hero = ({ home }: any) => {
  return (
    <>
      <div className="">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          stopOnHover={false}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={30}
          className="hero-carousel"
          renderArrowPrev={(onClickHandler: any, hasPrev: any, label: any) =>
            hasPrev && (
              <button
                title="Left"
                type="button"
                onClick={onClickHandler}
                className="hidden lg:block control-btn control-prev text-white bg-themecolor rounded hover:scale-105 duration-150 hover:text-reviewanglecolorHover outline-none"
              >
                <FontAwesomeIcon icon={faAnglesLeft} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler: any, hasNext: any, label: any) =>
            hasNext && (
              <button
                title="Right"
                type="button"
                onClick={onClickHandler}
                className="hidden lg:block control-btn control-next text-white bg-themecolor rounded hover:scale-105 duration-150 hover:text-reviewanglecolorHover outline-none"
              >
                <FontAwesomeIcon icon={faAnglesRight} />
              </button>
            )
          }
        >
          {home?.attributes?.heroImages?.map(
            (heroImage: any, index: number) => (
              <div key={index}>
                <img
                  className="h-[60vh] lg:h-[75vh] max-h-[500px]"
                  alt={"Hero" + index}
                  src={
                    heroImage && heroImage.image && heroImage.image.data
                      ? process.env.NEXT_PUBLIC_BASE_URL +
                        heroImage.image.data.attributes.url
                      : ""
                  }
                />
                <div
                  className={`absolute top-[30%] w-[65%] lg:w-[47%] ${
                    index % 2 === 0
                      ? "captionLeft left-[10%]"
                      : "captionRight right-[10%]"
                  }`}
                >
                  <h5 className="captionTitle mb-4 text-themetextcolor">
                    {heroImage.text}
                  </h5>
                  <h2 className="text-2xl sm:text-[3rem] leading-[110%] mr-0 mb-[1.424rem] ml-0 text-themetextcolor font-semibold captionTitle">
                    {heroImage.headerText}
                  </h2>
                  <div className="w-full">
                    <Link href="#">
                      <a>
                        <button
                          type="button"
                          title=""
                          className={`captionTitle bg-themecolor px-10 py-2.5 text-white hover:bg-opacity-90 ${
                            index % 2 === 0
                              ? "float-left captionLeft"
                              : "float-right captionRight"
                          }`}
                        >
                          Shop Now
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
