import {getGenres, getMovie, GetStateType, toggleIsFetchingType} from "./HomeReducer";
import {Dispatch} from "redux";
import {ISUserThunk, ProfileThunk} from "./AuthReducer";

type initialStateType = {
    isInitilized: boolean
    eror: boolean
}

let initialState: initialStateType = {
    isInitilized: false,
    eror: false
}


export const INITIALZED = "INITIALZED"
export const EROR = "EROR"

type ActionInitType = {
    type: typeof INITIALZED
    //isInitial: boolean
}
type ActionErorType = {
    type: typeof EROR
    eror: boolean
}

type getMovieType = typeof getMovie

type ActionType = ActionInitType | toggleIsFetchingType | ActionErorType



const AppReducer = (state = initialState, action: ActionType):initialStateType => {/*InitialStateType*/
    switch(action.type) {
        case INITIALZED: {
            return {...state, isInitilized: true}
        }
        case EROR: {
            return {...state, eror: true}
        }

        default:
            return state


    }}

let initAction = ()=>({type: INITIALZED})
export let erorAction = (eror: boolean): ActionErorType=>({type: EROR, eror})
export const initThunk = function (){
    return async function (dispatch:Dispatch<any>, getState:GetStateType){
        var promise = dispatch(getMovie)
        var promise2 = dispatch(getGenres)
        var promise1 = dispatch(ProfileThunk)
        var promise4 = dispatch(ISUserThunk)
        Promise.all([promise, promise1, promise2, promise4]).then(()=>{
            setTimeout(()=>{ dispatch(initAction())},600)

        })
        Promise.reject([promise1]).then(function(success) {
            // не вызывается
        }, function(error) {
           dispatch(erorAction(true))
        });

    }
}




export default AppReducer
