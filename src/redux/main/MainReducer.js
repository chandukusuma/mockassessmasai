import handlecartItem from "../Cart/reducer/CartReducer";
import { combineReducers } from "redux";
import { SpageReducer } from "../Individual/SpageReducer";

const rooted = combineReducers({
    handlecartItem,
    SpageReducer
})

export default rooted