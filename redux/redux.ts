
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import HomeReducer from './HomeReducer'
//import { reducer as formReducer } from 'redux-form'
import LoginReducer from "./AuthReducer";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    homePage: HomeReducer,
    authPage: LoginReducer,
    app: AppReducer
    //form: formReducer

});

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;



export default store;