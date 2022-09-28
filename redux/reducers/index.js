import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import productReducer from "redux/reducers/productReducer";
import userReducer from "./userReducer";
import { persistReducer } from "redux-persist";

const userConfig = {
  key: "user",
  storage,
  blacklist: ["loading"],
};

export default combineReducers({
  product: productReducer,
  user: persistReducer(userConfig, userReducer),
});
