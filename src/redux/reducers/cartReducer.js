import * as cartTypes from "../types/cartTypes";

const initialState = [];

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.ADD_TO_CART:
      console.log("Type: ", type, " | ", "PayLoad: ", payload);
      let inCart = state.find((product) =>
        product.id === payload.id ? true : false
      );
      return inCart
        ? state.map((product) =>
            product.id === inCart.id
              ? product.quantity < payload.quantity
                ? {
                    ...product,
                    quantity: product.quantity + 1,
                    maxQuantity: payload.quantity,
                  }
                : product
              : product
          )
        : [
            { ...payload, quantity: 1, maxQuantity: payload.quantity },
            ...state,
          ];

    case cartTypes.REMOVE_FROM_CART:
      console.log("Type: ", type, " | ", "PayLoad: ", payload);
      return [...state.filter((product) => product !== payload)];

    case cartTypes.EMPTY_CART:
      console.log("Type: ", type);
      return [];

    case cartTypes.ADJUST_QTY:
      console.log("Type: ", type, " | ", "PayLoad: ", payload);
      return state.map((product) =>
        product.id === payload.product.id
          ? { ...product, quantity: payload.qty }
          : product
      );

    default:
      return state;
  }
};
