import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, compose, createStore} from "redux";
import rootReducers from "./rootReducers";
import rootSaga from "./reducers_saga";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware,
];


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(...middlewares)),
    )

    sagaMiddleware.run(rootSaga)

    return store
}

export default configureStore()