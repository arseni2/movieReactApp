import {MovieApi} from "../api/api";
import {GetStateType, toggleIsFetching, toggleIsFetchingType} from "./HomeReducer";
import {dataLoginType, dataTokenType, initialStateType, profileType} from "../type/types";
import {Dispatch} from "redux";
import {erorAction} from "./AppReducer";


let initialState: initialStateType = {
    isAuthorized: false,
    username: '',
    password: '',
    email: '',
    file:'',
    token: null,
    tokenRefresh: null,
    profile: [],
    userId: null,
}
/*
это для homereducer для мувиков
* let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null// if null, then captcha is not required
};

export type InitialStateType = typeof initialState;
* */
export const LOGIN = "LOGIN"
export const TOKEN = "TOKEN"
export const PROFILE = "PROFILE"
export const AUTHORIZED = "AUTHORIZED"
export const USERID = "USERID"

type ActionType = LoginActionType | TokenActionType | ProfileActionType | AuthorizedActionType | setUserIdType | toggleIsFetchingType

type LoginActionType = {
    type: typeof LOGIN,
    username: string | null,
    password: string | null,
    email: string | null,
    file: null | any,

}
type TokenActionType = {
    type: typeof TOKEN,
    token: string | null,
    tokenRefresh: string | null,

}
type ProfileActionType = {
    type: typeof PROFILE,
    profile: any,

}
type AuthorizedActionType = {
    type: typeof AUTHORIZED,
    is: boolean,

}
type setUserIdType = {
    type: typeof USERID,
    userId: number,

}
const LoginReducer = (state = initialState, action: any):initialStateType => {/*InitialStateType*/
    switch(action.type) {
        case LOGIN: {
            return {...state, username: action.username, password: action.password, email: action.email, file: action.file}
        }
        case TOKEN: {
            return {...state, token: action.token, tokenRefresh: action.tokenRefresh}
        }
        case PROFILE: {
            return {...state, profile: action.profile}
        }
        case AUTHORIZED: {
            return {...state, isAuthorized: action.is}
        }
        case USERID: {
            return {...state, userId: action.userId}
        }
        default:
            return state


    }}
export const LoginAction = (username: string | null, password: string | null, email: string | null, file: any):LoginActionType => ({type: LOGIN, username, password, email, file})
export const TokenAction = (token:string | null, tokenRefresh:string | null):TokenActionType => ({type: TOKEN, token, tokenRefresh})
export const ProfileAction = (profile:profileType):ProfileActionType => ({type: PROFILE, profile}) //Array<customtype>
export const AuthorizedAction = (is:boolean):AuthorizedActionType => ({type: AUTHORIZED, is})
export const setUserId = (userId:number):setUserIdType => ({type: USERID, userId})

export const LoginThunk = function (username:string | null, password:string, email:string, file:any){
    return async function (dispatch:Dispatch<ActionType>, getState:GetStateType){
        dispatch(toggleIsFetching(true))
        await MovieApi.Login(username, password, email, file).then((data:dataLoginType) => {
            dispatch(LoginAction(data.name, password, data.email, data.userPhotos));
            localStorage.setItem('name', data.name);
            if(localStorage.getItem('token')){
                // @ts-ignore
                dispatch(erorAction(false))
            }



        })
        await MovieApi.Token(password, email).then((data: dataTokenType) => {
            dispatch(TokenAction(data.access, data.refresh))
            localStorage.removeItem('token')
            localStorage.removeItem('tokenRefresh')
            localStorage.setItem('token', data.access)
            localStorage.setItem('tokenRefresh', data.refresh)
        })
        await MovieApi.userProfile().then((data: profileType) => {
            dispatch(ProfileAction(data));
        })
        /*await MovieApi.userId(email).then((data: any) => {
            dispatch(setUserId(data[0].id));
            console.log(data[0].id)
            localStorage.setItem('userId', data[0].id)
            dispatch(toggleIsFetching(false))
        })*/
    }
}
export const ProfileThunk = function (){
    return async function (dispatch:Dispatch<ActionType>, getState:GetStateType){
        await MovieApi.userProfile().then((data: any) => {
            dispatch(ProfileAction(data));
        })
    }
}
export const ISUserThunk = function (){
    return function (dispatch:Dispatch<ActionType>, getState:GetStateType){
            dispatch(AuthorizedAction(true));

    }
}
export const LoginRealThunk = function (email:string, password: string, name:string){
    return async function (dispatch:Dispatch<ActionType>, getState:GetStateType){
        await MovieApi.Token(password, email).then((data: dataTokenType) => {
            dispatch(TokenAction(data.access, data.refresh));
            localStorage.removeItem('token');
            localStorage.removeItem('tokenRefresh');
            localStorage.setItem('token', data.access);
            localStorage.setItem('tokenRefresh', data.refresh);

                // @ts-ignore
                dispatch(erorAction(false))

        })
        /*await MovieApi.logIn(email).then(data => {
            dispatch(ProfileAction(data));
        })*/
        await MovieApi.userProfile().then((data:profileType) => {
            localStorage.setItem("name", <string>data.name)
            dispatch(ProfileAction(data));
        })
      /*  await MovieApi.userId(email).then((data: any) => {
            dispatch(setUserId(data[0].id));
            console.log(data[0].id)
            localStorage.removeItem('userId')
            localStorage.setItem('userId', data[0].id)
        })*/

    }
}


export default LoginReducer
