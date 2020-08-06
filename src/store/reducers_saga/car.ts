import Car from "../../models/car.model";
import Action from "../../models/action.model";
import {all, takeLatest, call, put} from "redux-saga/effects";
import api from "../../core/network";

const Actions = {
    LOAD_CARS: 'cars/LOAD',
    LOAD_CARS_SUCCESS: 'cars/LOAD_SUCCESS',
}

export const CarCreators = {
    loadCars: () => ({type: Actions.LOAD_CARS}),
    loadCarsSuccess: (cars: Car[]) => ({type: Actions.LOAD_CARS_SUCCESS, payload: cars}),
}


export interface CarStoreTypes {
    cars: Car[]
}

const INITIAL_STATE: CarStoreTypes = {
    cars: [],
}


export const car = (state = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case Actions.LOAD_CARS_SUCCESS:
            return {...state, cars: action.payload}
        default:
            return state
    }
}


function* loadCars() {
    try {
        const {data} = yield call(api.get, '/5eb553df31000060006994a8')
        yield put(CarCreators.loadCarsSuccess(data))
    } catch (e) {
        console.log(e)
    }

}

export function* carSaga(): any {
    yield all([
        takeLatest(Actions.LOAD_CARS, loadCars),
    ])
}