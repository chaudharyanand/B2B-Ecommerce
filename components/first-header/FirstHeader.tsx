import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";

const FirstHeader = ({ }: any) => {
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
      <div className="bg-themecolor xs:relative xs:le     ft-0 xs:right-0">
        <div className="max-w-fullscreen mx-auto px-4">
          <div className="flex justify-between items-center md:py-1">
            <div className="text-xs hidden lg:block text-white w-full">
              <b>{getText("Label.AdvancedReservation")}</b>{" "}
              {getText("Label.OrderFromAllItems")}
            </div>
            <div className="flex items-center justify-end w-full">
              <Link href="/">
                <a
                  href="#"
                  className="hidden lg:block text-xs uppercase text-white pr-2 whitespace-nowrap hover:text-gray-700"
                >
                  {getText("Label.ContactUs")}
                </a>
              </Link>
              <div className="">
                <Menu as="div" className="relative inline-block text-left">
                  {({ open }: any) => (
                    <>
                      <div>
                        <Menu.Button
                          className={classNames(
                            open ? "text-gray-700" : "text-white",
                            "uppercase inline-flex items-center w-full justify-center p-2 md:px-4 md:py-2 text-xs focus:outline-none hover:text-gray-700"
                          )}
                        >
                          {getText("Label.Account")}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="-mr-1 ml-2 text-xs group-hover:text-gray-700"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }: any) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Account settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }: any) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Support
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }: any) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  License
                                </a>
                              )}
                            </Menu.Item>
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }: any) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full px-4 py-2 text-left text-sm"
                                    )}
                                  >
                                    Sign out
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
              <div className="">
                <Menu as="div" className="relative inline-block text-left">
                  {({ open }: any) => (
                    <>
                      <div>
                        <Menu.Button
                          className={classNames(
                            open ? "text-gray-700" : "text-white",
                            "uppercase inline-flex items-center w-full justify-center p-2 md:px-4 md:py-2 text-xs focus:outline-none hover:text-gray-700"
                          )}
                        >
                          {getText("Label.Eng")}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="-mr-1 ml-2 text-xs group-hover:text-gray-700"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }: any) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {getText("Label.DE")}
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }: any) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {getText("Label.Support")}
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstHeader;
