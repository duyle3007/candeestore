import { combineReducers } from "redux";
import productReducer from "redux/reducers/productReducer";

export default combineReducers({
  product: productReducer,
});
