import LOGIN from '../redux/AuthReducer'

export let initialStateTS = {
    isAuthorized: null as boolean | null,
    username: null as string | null,
    password: null as string | null,
    email: null as string | null,
    file:null as string | null,
    token: null as string | null,
    tokenRefresh: null as string | null,
    profile: [] as any,
    userId: null as number | null,
}
export type initialStateType = typeof initialStateTS

export type dataLoginType = {
    name: string,
    password: null | string,
    email: null | string,
    userPhotos: null | any,

}
//export type dataLoginType = typeof dataLogin

export type dataTokenType = {
    access: string,
    refresh: string,


}
//export type dataTokenType = typeof dataToken

export type LoginActionType = {
    type: typeof LOGIN,
    username: string | null,
    password: string | null,
    email: string | null,
    file: null | any,

}
let profile = {
    id: null as number | null,
    email: null as string | null,
    name: null as string | null,
    userPhotos: null as string | null,

}
export type profileType = typeof profile
//export type LoginActionType = typeof LoginAction