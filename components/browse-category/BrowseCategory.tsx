import React, { Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const BrowseCategory = ({ showBrowseCategory, setShowBrowseCategory }: any) => {
  const team = [
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
    {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
    },
  ];

  const handleClose = () => {
    setShowBrowseCategory(false);
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Transition.Root show={showBrowseCategory} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-[415px] pr-28 lg:pr-14">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-9 flex pt-6 pr-2 sm:-mr-14 sm:pr-4">
                        <button
                          title="Close"
                          type="button"
                          className="text-white hover:opacity-60 duration-300 focus:ring-0 text-xl lg:text-2xl"
                          onClick={handleClose}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="bg-thirdnavbgcolor">
                        <div className="relative flex items-start justify-between p-6">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Hello, Infinite
                          </Dialog.Title>
                        </div>
                      </div>
                      <ul
                        role="list"
                        className="flex-1 divide-y divide-gray-200 overflow-y-auto"
                      >
                        {team.map((person) => (
                          <li key={person.handle}>
                            <div className="group relative flex items-center py-6 px-5">
                              <a
                                href={person.href}
                                className="-m-1 block flex-1 p-1"
                              >
                                <div
                                  className="absolute inset-0 group-hover:bg-gray-50"
                                  aria-hidden="true"
                                />
                                <div className="relative flex min-w-0 flex-1 items-center">
                                  <span className="relative inline-block flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={person.imageUrl}
                                      alt=""
                                    />
                                    <span
                                      className={classNames(
                                        person.status === "online"
                                          ? "bg-green-400"
                                          : "bg-gray-300",
                                        "absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                  <div className="ml-4 truncate">
                                    <p className="truncate text-sm font-medium text-gray-900">
                                      {person.name}
                                    </p>
                                    <p className="truncate text-sm text-gray-500">
                                      {"@" + person.handle}
                                    </p>
                                  </div>
                                </div>
                              </a>
                              <Menu
                                as="div"
                                className="relative ml-2 inline-block flex-shrink-0 text-left"
                              >
                                <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-0">
                                  <span className="flex h-full w-full items-center justify-center rounded-full"></span>
                                </Menu.Button>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute top-0 right-9 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                            View profile
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
                                            Send message
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default BrowseCategory;
