import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  let cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="cart transition duration-300">
        <div className="h-5 mt-2 flex flex-col align-middle">
          <div className="min-w-fit h-fit bg-slate-100 border shadow-2xl">
            <h5 className="p-3 font-bold text-center bg-slate-200">
              <u>CART</u>
            </h5>
            <hr />
            <div className="flex p-6">
              <div className="w-full">
                {cart.length !== 0 ? (
                  <div
                    className="grid sm:grid-cols-4 gap-3 text-center mb-2"
                    style={{ alignItems: "center" }}
                  >
                    <u>Image</u>
                    <u>Name</u>
                    <u>Price</u>
                    <u>Quantity</u>
                  </div>
                ) : (
                  ""
                )}
                {cart.length !== 0 ? (
                  cart.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="grid sm:grid-cols-4 gap-3 text-center"
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={window.location.origin + "/products/" + product.img + ".jpg"}
                          className="w-full max-h-screen"
                          alt="product"
                        />
                        <h1>{product.name}</h1>
                        <p>${product.price}</p>
                        <p>{product.quantity}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center">Your Cart is Empty</div>
                )}
                {cart.length !== 0 ? (
                  <div className="text-center mt-5">
                    <NavLink
                      to="/cart"
                      className="px-2 py-1 font-bold rounded-full shadow-2xl border border-black bg-blue-800 text-white cursor-pointer hover:bg-white hover:text-blue-800"
                    >
                      CheckOut
                    </NavLink>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
