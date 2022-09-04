import * as productTypes from "../types/productTypes";

export const fetchProducts = () => {
  console.log("Action: fetchProducts");
  return {
    type: productTypes.FETCH_PRODUCTS,
  };
};
