import { createStore } from "redux";
import rooted from "./redux/main/MainReducer";

const store = createStore(
    rooted,
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store