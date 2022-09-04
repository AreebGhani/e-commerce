import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, adjustQty } from "../redux/actions/cartActions";

export default function CartItems({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(parseInt(product.quantity));
  const adjustQuantity = (action) => {
    if (action === "increment") {
      quantity < product.maxQuantity
        ? setQuantity(quantity + 1)
        : setQuantity(quantity);
    }
    if (action === "decrement") {
      quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
    }
  };
  useEffect(() => {
    dispatch(adjustQty(product, quantity));
  }, [quantity]);
  return (
    <>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img
              className="max-h-screen w-full"
              src={window.location.origin + "/products/" + product.img + ".jpg"}
              alt="product"
            />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{product.name}</span>
            <span className="text-red-500 w-40 text-xs">
              {product.description}
            </span>
            <div
              onClick={() => {
                dispatch(removeFromCart(product));
              }}
              className="mt-6 w-10 font-semibold hover:text-red-500 text-gray-500 text-sm cursor-pointer"
            >
              Remove
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg
            className="fill-current text-gray-600 w-3"
            viewBox="0 0 448 512"
            onClick={() => adjustQuantity("decrement")}
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>

          <input
            className="mx-2 border text-center w-8"
            type="text"
            value={quantity}
            onChange={({ target }) => {}}
          />

          <svg
            className="fill-current text-gray-600 w-3"
            viewBox="0 0 448 512"
            onClick={() => adjustQuantity("increment")}
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          ${product.price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          ${parseInt(product.quantity) * parseInt(product.price)}
        </span>
      </div>
    </>
  );
}
