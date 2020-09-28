import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import { verifyAuth } from "../smactions/auth";
import rootReducer from "../smreducers";


export default function configureStore(runState: any) {
  const store = createStore(
    rootReducer,
    runState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch<any>(verifyAuth());
  return store;
}