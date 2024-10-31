import { faArrowUpWideShort, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition, Dialog, Menu } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectAllTranslatedTexts } from '../../features/translate/translate-slice'

const SortByPanel = ({showSortBy,setShowSortBy}:any) => {
  const translatedTexts = useSelector(selectAllTranslatedTexts);

  const handleClose = () => {
    setShowSortBy(false);
  };

	function classNames(...classes: any) {
		return classes.filter(Boolean).join(' ')
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
    	<Transition.Root show={showSortBy} as={Fragment}>
				<Dialog as="div" className="relative z-10 md:hidden" onClose={handleClose}>
					<div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed bottom-0 flex pr-28 lg:pr-14">
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
                      <div className="flex flex-col overflow-y-scroll bg-white p-4">
                        <div className="">
                          <div className="relative flex items-center justify-between pt-0.5 pb-1.5 mb-3 border-b border-themetextcolor border-opacity-60 opacity-60">
                            <Dialog.Title className="text-xs font-medium text-themetextcolor uppercase flex items-center">
                              {getText("Label.SortBy")}
                            </Dialog.Title>
                            {/* <button
                                type="button"
                                title="Close"
                                className="outline-none"
                                onClick={handleClose}
                            >
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  className="text-gray-600 hover:text-gray-500 py-1 px-2 rounded-md hover:bg-gray-100"
                                />
                            </button> */}
                          </div>
                        </div>
                        <ul role="list" className="overflow-y-auto text-themetextcolor space-y-3">
                          <li>
                            <a href="" className="outline-none flex">
                              {getText("Label.PriceLowToHigh")}
                            </a>
                          </li>
                          <li>
                            <a href="" className="outline-none flex">
                              {getText("Label.PriceHighToLow")}
                            </a>
                          </li>
                          <li>
                            <a href="" className="outline-none flex">
                              {getText("Label.WhatsNew")}
                            </a>
                          </li>
                          <li>
                            <a href="" className="outline-none flex">
                              {getText("Label.Discount")}
                            </a>
                          </li>
                          <li>
                            <a href="" className="outline-none flex">
                              {getText("Label.Popularity")}
                            </a>
                          </li>
                        </ul>
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
  )
}

export default SortByPanel