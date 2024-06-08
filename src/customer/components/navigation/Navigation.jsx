import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import {navigation}  from "./navigation";
import { deepPurple } from "@mui/material/colors";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, logout } from "../../../Redux/Auth/Action";
// import { getCart } from "../../../Redux/Customers/Cart/Action";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../Auth/AuthModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { auth, cart } = useSelector((store) => store);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  // const jwt = localStorage.getItem("jwt");
  // const location = useLocation();

  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser(jwt));
  //     dispatch(getCart(jwt));
  //   }
  // }, [jwt]);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  // useEffect(() => {
  //   if (auth.user) {
  //     handleClose();
  //   }
  //   if (location.pathname === "/login" || location.pathname === "/register") {
  //     navigate(-1);
  //   }
  // }, [auth.user]);

  // const handleLogout = () => {
  //   handleCloseUserMenu();
  //   dispatch(logout());
  // };
  // const handleMyOrderClick = () => {
  //   handleCloseUserMenu();
  //   auth.user?.role === "ROLE_ADMIN"
  //     ? navigate("/admin")
  //     : navigate("/account/order");
  // };

  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p className="-m-2 block p-2 text-gray-500">
                                    {"item.name"}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-zinc-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over 2100rs
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 cursor-pointer">
                  <span className="sr-only ">Your Company</span>
                  <img
                  onClick={() => navigate("/")}
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="h-8 w-8 mr-2"
                  />
              </div>
              {/* Flyout menus */}
               <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                             
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                           <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))} 

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} 
                </div>
              </Popover.Group>  

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {false ? (
                    <div className="flex items-center">
                      <Avatar
                        className="text-white"
                        // onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor:"green",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {/* {auth.user?.firstName[0].toUpperCase()} */}
                        N
                      </Avatar>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleUserClick}
                      >
                        Dashboard
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={()=>navigate("/account/order")} >
                         My Orders
                        </MenuItem>
                        <MenuItem >Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Signin
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex items-center lg:ml-6">
                
                  <p 
                  // onClick={()=>navigate("/products/search")}
                   className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    onClick={() => navigate("/cart")}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {/* {cart.cart?.totalItem} */}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal}/>
    </div>
  );
}