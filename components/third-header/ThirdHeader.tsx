import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeadphones,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import BrowseCategory from "../browse-category/BrowseCategory";
import { useSelector } from "react-redux";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";
import Link from "next/link";

const ThirdHeader = ({ configurationProps }: any) => {
  const [showBrowseCategory, setShowBrowseCategory] = useState(false);

  const translatedTexts = useSelector(selectAllTranslatedTexts);

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
        .filter((t: any) => t.key === key)
        .map((t: any) => t.translatedText)[0]
      : "";
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="bg-thirdnavbgcolor hidden lg:block">
        <div className="mx-auto max-w-fullscreen px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="">
                <div className="relative ">
                  <button
                    className={`group inline-flex items-center px-10 py-3 bg-themecolor hover:bg-opacity-95 duration-300 text-base text-white hover:text-white outline-none focus:outline-none focus:ring-0`}
                    onClick={() => setShowBrowseCategory(true)}
                  >
                    <FontAwesomeIcon
                      icon={faBars}
                      className={`   mr-4 h-4 w-4 group-hover:text-white duration-300`}
                    />
                    <span>{getText("Label.BrowseCategory")}</span>
                  </button>
                </div>
              </div>

              <div className="flex uppercase">
                <Link
                  href="/"
                  className="mdlg:px-7 px-4 py-1 text-sm text-white border-r border-navrightbordercolor hover:text-themecolor duration-300"
                >
                  <a>{getText("Label.Home")}</a>
                </Link>
                <Link
                  href="/shop"
                  className="mdlg:px-7 px-4 py-1 text-sm text-white border-r border-navrightbordercolor hover:text-themecolor duration-300"
                >
                  <a>{getText("Label.Shop")}</a>
                </Link>
                <a
                  href="#"
                  className="mdlg:px-7 px-4 py-1 text-sm text-white border-r border-navrightbordercolor hover:text-themecolor duration-300"
                >
                  {getText("Label.Catalog")}
                </a>
                <a
                  href="#"
                  className="mdlg:px-7 px-4 py-1 text-sm text-white border-r border-navrightbordercolor hover:text-themecolor duration-300"
                >
                  {getText("Label.News")}
                </a>
                <a
                  href="#"
                  className="mdlg:px-7 px-4 py-1 text-sm text-white border-r border-navrightbordercolor hover:text-themecolor duration-300"
                >
                  {getText("Label.BestDeals")}
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faHeadphones}
                className="h-6 w-6 text-white"
              />
              <div className="flex-col ml-3">
                <div className="text-themecolor text-xs">
                  {getText("Label.Hotline")}
                </div>
                <div className="text-gray-300 hover:text-themecolor text-xs">
                  <Link
                    href={`tel:${configurationProps.attributes.companyPhone}`}
                  >
                    <a>{configurationProps.attributes.companyPhone}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:hidden">
        <div className="flex justify-center px-4 py-2">
          <div className="w-full">
            <div className="input-group relative flex flex-wrap items-stretch w-full">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-sm font-normal text-themetextcolor bg-white bg-clip-padding border border-solid border-themecolor rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-themecolor focus:outline-none focus:ring-0"
                placeholder="Search products, EAN, brands or advice"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                title="Search"
                className="btn inline-block px-6 py-2 bg-themecolor border-2 border-themecolor text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-themecolor focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
                type="button"
                id="button-addon3"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  bg-red-950 lg:hidden px-4">
        {/* <nav className="overflow-x-scroll">
          <ul className="flex justify-evenly   divide-x gap- isolation-auto">
            <li className="px-2 pt-3">Fresh Fruits</li>
            <li className="px-2 pt-3">Fresh Vegetables</li>
            <li className="px-2 pt-3">Fresh Meat</li>
            <li className="px-2 pt-3">Green Seafood</li>
            <li className="px-2 pt-3">Organic Dryfruit</li>
            <li className="px-2 pt-3">Organic Masala</li>
            <li className="px-2 pt-3">Organic Juice</li>
            <li className="px-2 pt-3">Summer Fruits</li>
            <li className="px-2 pt-3">Sea & Fish</li>
            <li className="px-2 pt-3">Bakers Rack</li>
            <li className="px-2 pt-3">Dairy & Chees</li>
            <li className="px-2 pt-3">Organic Wine</li>

          </ul>
        </nav> */}
        <button
          className={` s-mobile:hidden w-full group inline-flex items-center px-4 py-3 bg-themecolor hover:bg-opacity-95 duration-300 text-base text-white hover:text-white outline-none focus:outline-none focus:ring-0`}
          onClick={() => setShowBrowseCategory(true)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`mr-4 h-4 w-4 group-hover:text-white duration-300`}
          />
          <span>{getText("Label.BrowseCategory")}</span>
        </button>
      </div>

      <BrowseCategory
        showBrowseCategory={showBrowseCategory}
        setShowBrowseCategory={setShowBrowseCategory}
      />
    </>
  );
};

export default ThirdHeader;
