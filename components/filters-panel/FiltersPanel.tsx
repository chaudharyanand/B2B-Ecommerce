import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition, Dialog, Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";

const FiltersPanel = ({ showFilters, setShowFilters }: any) => {
  const translatedTexts = useSelector(selectAllTranslatedTexts);

  const handleClose = () => {
    setShowFilters(false);
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
          .filter((t: any) => t.key === key)
          .map((t: any) => t.translatedText)[0]
      : "";
  };

  return (
    <>
      <Transition.Root show={showFilters} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 md:hidden"
          onClose={handleClose}
        >
          <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 flex pr-28 lg:pr-14">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500"
                      enterFrom="opacity-100 translate-y-full"
                      enterTo="opacity-100 translate-y-0"
                      leave="transform transition ease-in-out duration-500"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-100 translate-y-full"
                    >
                      <div className="flex h-full flex-col overflow-y-scroll bg-white">
                        <div className="pt-3 pb-2 px-2 z-[3] sticky top-0 w-full">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-sm text-themetextcolor flex items-center">
                              <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="text-themetextcolor hover:opacity-80 mr-3 text-xs"
                                onClick={handleClose}
                              />
                              {getText("Label.Filters")}
                            </Dialog.Title>
                            <button
                              type="button"
                              title="Clear all"
                              className="outline-none text-xs text-themecolor uppercase"
                            >
                              {getText("Label.ClearAll")}
                            </button>
                          </div>
                        </div>
                        <div className="flex w-full overflow-y-auto text-themetextcolor border-t border-themetextcolor border-opacity-10">
                          <Tab.Group vertical={true}>
                            <div className="w-2/6 bg-reviewsbgcolor">
                              <Tab.List className={`divide-y text-sm`}>
                                <Tab
                                  className={({ selected }: any) =>
                                    classNames(
                                      "px-2 py-3 border-gray-200 w-full text-sm ease-out duration-300 flex whitespace-nowrap",
                                      "ring-offset-0 outline-none focus:outline-none focus:ring-0",
                                      selected
                                        ? "text-themecolor bg-white"
                                        : "ring-0 text-themetextcolor"
                                    )
                                  }
                                >
                                  {getText("Label.Categories")}
                                </Tab>
                                <Tab
                                  className={({ selected }: any) =>
                                    classNames(
                                      "px-2 py-3 border-gray-200 w-full text-sm ease-out duration-300 flex whitespace-nowrap",
                                      "ring-offset-0 outline-none focus:outline-none focus:ring-0",
                                      selected
                                        ? " text-themecolor bg-white"
                                        : "ring-0 text-themetextcolor"
                                    )
                                  }
                                >
                                  {getText("Label.PriceRange")}
                                </Tab>
                                <Tab
                                  className={({ selected }: any) =>
                                    classNames(
                                      "px-2 py-3 border-gray-200 w-full text-sm ease-out duration-300 flex whitespace-nowrap",
                                      "ring-offset-0 outline-none focus:outline-none focus:ring-0",
                                      selected
                                        ? "text-themecolor bg-white"
                                        : "ring-0 text-themetextcolor"
                                    )
                                  }
                                >
                                  {getText("Label.Rating")}
                                </Tab>
                                <Tab
                                  className={({ selected }: any) =>
                                    classNames(
                                      "px-2 py-3 border-gray-200 w-full text-sm ease-out duration-300 flex whitespace-nowrap",
                                      "ring-offset-0 outline-none focus:outline-none focus:ring-0",
                                      selected
                                        ? "text-themecolor bg-white"
                                        : "ring-0 text-themetextcolor"
                                    )
                                  }
                                >
                                  {getText("Label.Discount")}
                                </Tab>
                                <Tab
                                  className={({ selected }: any) =>
                                    classNames(
                                      "px-2 py-3 border-gray-200 w-full text-sm ease-out duration-300 flex whitespace-nowrap",
                                      "ring-offset-0 outline-none focus:outline-none focus:ring-0",
                                      selected
                                        ? "text-themecolor bg-white"
                                        : "ring-0 text-themetextcolor"
                                    )
                                  }
                                >
                                  {getText("Label.Tags")}
                                </Tab>
                              </Tab.List>
                            </div>
                            <div className="w-4/6 p-4">
                              <Tab.Panels>
                                <Tab.Panel className={`space-y-3`}>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments1"
                                        aria-describedby="comments-description"
                                        name="comments"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments1"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          Green Searfood
                                        </label>
                                        <div className="text-sm text-themetextcolor">
                                          (19)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments2"
                                        aria-describedby="comments2-description"
                                        name="comments2"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments2"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          Green Searfood
                                        </label>
                                        <div className="text-sm text-themetextcolor">
                                          (19)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments3"
                                        aria-describedby="comments3-description"
                                        name="comments3"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments3"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          Green Searfood
                                        </label>
                                        <div className="text-sm text-themetextcolor">
                                          (19)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments4"
                                        aria-describedby="comments4-description"
                                        name="comments4"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments4"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          Green Searfood
                                        </label>
                                        <div className="text-sm text-themetextcolor">
                                          (19)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab.Panel>
                                <Tab.Panel className={`space-y-3`}>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments5"
                                        aria-describedby="comments5-description"
                                        name="comments5"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments5"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          0 - 100
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments6"
                                        aria-describedby="comments6-description"
                                        name="comments6"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments6"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          100 - 200
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments7"
                                        aria-describedby="comments7-description"
                                        name="comments7"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments7"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          200 - 300
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex mb-2 w-full">
                                    <div className="flex items-center w-full">
                                      <input
                                        id="comments8"
                                        aria-describedby="comments8-description"
                                        name="comments8"
                                        type="checkbox"
                                        className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
                                      />
                                      <div className="ml-3 text-sm flex items-center justify-between w-full">
                                        <label
                                          htmlFor="comments8"
                                          className="text-themetextcolor hover:text-themecolor cursor-pointer select-none"
                                        >
                                          300 - 400
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </Tab.Panel>
                                <Tab.Panel>Content 3</Tab.Panel>
                                <Tab.Panel>Content 4</Tab.Panel>
                                <Tab.Panel>Content 5</Tab.Panel>
                              </Tab.Panels>
                            </div>
                          </Tab.Group>
                        </div>
                        <div className="fixed bottom-0 w-full border p-2 bg-white">
                          <div className="w-full grid grid-cols-2 divide-x divide-solid">
                            <div
                              className="text-center text-sm uppercase text-themetextcolor hover:opacity-80 flex items-center justify-center"
                              onClick={handleClose}
                            >
                              {getText("Label.Close")}
                            </div>
                            <div className="text-center text-sm uppercase text-themecolor hover:opacity-80 flex items-center justify-center">
                              {getText("Label.Apply")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default FiltersPanel;
