import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {accountReducer} from "../reducers/accountReducer";

export const store = createStore(accountReducer, {}, applyMiddleware(thunk));