import { takeEvery, put } from "redux-saga/effects";
import * as productTyoes from "../types/productTypes";
import axios from "axios";

function* getProducts() {
  const { data } = yield axios({
    url: `${window.location.origin}/api/products.json`,
    method: "GET",
  });
  console.log("getProducts: ", data);
  yield put({ type: productTyoes.SET_FETCH_PRODUCTS, payload: data.products });
}

export default function* productSaga() {
  yield takeEvery(productTyoes.FETCH_PRODUCTS, getProducts);
}
