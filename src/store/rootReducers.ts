import {combineReducers} from "redux";
import {car} from "./reducers_saga/car";

const rootReducers = combineReducers({
    car,
})

export default rootReducers