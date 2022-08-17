import { createStore } from "redux";
import moveReducer from "./reducers/index"

//create store and export store
export const store=createStore(moveReducer);