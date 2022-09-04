import * as cartTypes from "../types/cartTypes";

export const addToCart = (product) => {
  console.log("Action: addToCart ", "Parameter: ", product);
  return {
    type: cartTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  console.log("Action: removeFromCart ", "Parameter: ", product);
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const adjustQty = (product, value) => {
  console.log("Action: adjustQty ", "Parameter: ", product, value);
  return {
    type: cartTypes.ADJUST_QTY,
    payload: {
      product: product,
      qty: value,
    },
  };
};

export const emptyCart = () => {
  console.log("Action: emptyCart");
  return {
    type: cartTypes.EMPTY_CART,
  };
};
