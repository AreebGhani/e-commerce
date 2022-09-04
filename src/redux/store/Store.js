import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";
import productSaga from "../saga/productSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const Store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default Store;
