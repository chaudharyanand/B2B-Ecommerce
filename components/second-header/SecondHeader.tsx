import React, { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";
import Link from "next/link";
import cart from "../../features/cart/cart";
import { selectAllCartItems } from "../../features/cart/cart-slice";



const SecondHeader = ({ home, configurationProps }: any) => {
  const translatedTexts = useSelector(selectAllTranslatedTexts);
  const cartItems = useSelector(selectAllCartItems);

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
          .filter((t: any) => t.key === key)
          .map((t: any) => t.translatedText)[0]
      : "";
  };

  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-fullscreen px-4">
          <div className="flex items-center justify-between py-2 md:justify-start md:space-x-10">
            <div className="flex items-center">
              <div className="-mb-2 mr-8 lg:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0">
                  <FontAwesomeIcon icon={faBars} className="text-gray-600" />
                </Popover.Button>
              </div>
              <div className="">
                <Link href="/">
                  <a>
                    <img
                      className="w-auto"
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        home.attributes.headerLogo.data.attributes.url
                      }
                      alt={configurationProps.attributes.companyBusinessName}
                    />
                  </a>
                </Link>
              </div>
            </div>

            <Popover.Group
              as="nav"
              className="hidden space-x-10 md:flex w-full"
            >
              <div className="flex items-center px-6 py-1 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0 w-full">
                <div className="w-full">
                  <div className="flex justify-center">
                    <div className="w-full max-w-xl">
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
              </div>
            </Popover.Group>

            <div className="flex items-center">
              <div className="items-center justify-end md:flex">
                <a
                  href="#"
                  className="relative whitespace-nowrap lg:text-2xl text-gray-400 hover:text-gray-900 px-2"
                >
                  <FontAwesomeIcon icon={faHeart} className="" />
                  <span className="absolute lg:top-0 right-[-4px] inline-flex items-center rounded-full bg-themecolor py-0.5 px-1 text-xs font-medium text-white">
                    0
                  </span>
                </a>
                <a
                  href="/cart"
                  className="ml-2 md:ml-8 relative whitespace-nowrap lg:text-2xl text-gray-400 hover:text-gray-900 px-2"
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                  <span className="absolute lg:top-0 right-[-4px] inline-flex items-center rounded-full bg-themecolor py-0.5 px-1 text-xs font-medium text-white">
                    {cartItems.length}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-left transform p-2 transition lg:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="w-auto"
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        home.attributes.headerLogo.data.attributes.url
                      }
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white px-2 py-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0">
                      <FontAwesomeIcon icon={faXmark} />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      {getText("Label.Home")}
                    </a>
                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      {getText("Label.Shop")}
                    </a>
                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      {getText("Label.Catalog")}
                    </a>
                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      {getText("Label.News")}
                    </a>
                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      {getText("Label.BestDeals")}
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default SecondHeader;
