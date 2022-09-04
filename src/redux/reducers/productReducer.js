import * as productTypes from "../types/productTypes";

const initialState = [];

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productTypes.SET_FETCH_PRODUCTS:
      console.log("Type: ", type, "Payload: ", payload);
      return [...payload];

    default:
      return state;
  }
};
