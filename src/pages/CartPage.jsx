import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../redux/actions/cartActions";
import CartItems from "../components/CartItems";

export default function CartPage() {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let total = 0;
  cart.forEach((product) => {
    total += parseInt(product.quantity) * parseInt(product.price);
  });

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="sm:flex shadow-md my-10">
          <div className="sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
            </div>
            {cart.length !== 0 ? (
              <span
                onClick={() => dispatch(emptyCart())}
                className="flex mt-5 w-20 font-semibold hover:text-red-500 text-gray-500 text-sm cursor-pointer"
              >
                Empty Cart
              </span>
            ) : (
              ""
            )}
            {cart.length !== 0 ? (
              <div className="flex mt-5 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Total
                </h3>
              </div>
            ) : (
              ""
            )}
            {cart.length !== 0 ? (
              cart.map((product, index) => {
                return <CartItems key={index} product={product} />;
              })
            ) : (
              <div className="text-center py-10 sm:py-20 sm:text-5xl">
                Your Cart is Empty
              </div>
            )}

            <div className="font-semibold text-indigo-600 text-sm mt-10">
              <NavLink to="/" className="flex w-40">
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </NavLink>
            </div>
          </div>

          <div className="sm:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cart.length}
              </span>
              <span className="font-semibold text-sm">${total}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option className="text-muted">
                  Standard-Delivery- $10.00
                </option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full bg-red-500 hover:bg-red-600 px-5 py-2 text-white uppercase"
              />
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${total + 10}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
