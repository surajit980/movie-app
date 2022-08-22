import { createStore } from "redux";
import rootReducer from "./reducers/index"


//create store and export store
export const store=createStore(rootReducer);