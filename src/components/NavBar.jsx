import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import logoText from "../assets/img/logo-text.png";
import Cart from "./Cart";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  let cart = useSelector((state) => state.cart);
  let quantity = 0;
  cart.forEach((product) => {
    quantity += parseInt(product.quantity);
  });

  return (
    <nav className="w-full border-gray-900 shadow bg-gray-300 sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-1 md:py-2 md:block">
            <div className="flex items-center">
              <img src={logo} className="h-6 sm:h-9" alt="Logo" />
              <img src={logoText} className="h-6 sm:h-9" alt="Logo Text" />
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="mt-3 space-y-2 md:hidden sm:inline-block">
              <div
                onClick={() => setShowCart(!showCart)}
                className="cursor-pointer inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                <svg
                  width="24"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill=""
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 sm:block">
          <div
            onClick={() => setShowCart(!showCart)}
            className="cursor-pointer flex gap-2 w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            <svg
              width="24"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill=""
                fillRule="nonzero"
              />
            </svg>
            <span>({quantity})</span>
          </div>
        </div>
      </div>
      {showCart ? (
        <Fade bottom duration={400}>
          <Cart />
        </Fade>
      ) : (
        ""
      )}
    </nav>
  );
}
