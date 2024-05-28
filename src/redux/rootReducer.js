import { combineReducers } from "redux";
import changeState from "./style/StyleReducer";
import userReducer from "./User/UserReducer";

const rootReducer = combineReducers({ changeState, userReducer });

export default rootReducer;