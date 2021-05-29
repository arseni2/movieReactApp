import React from 'react'
import {Redirect, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {erorAction} from "../../redux/AppReducer";
import {Link} from 'react-router-dom'

type propsType = {
    LoginRealThunk: (email:string, password:string, name:string)=>void
    profile: any
}

const RealLogin = React.memo((props: propsType)=>{
    let history = useHistory();
    let dispatch = useDispatch()
    async function handleClick() {
        //history.push("");
        await dispatch(erorAction(false))
        //document.location.reload();
        return (<Redirect to={'/'}/>)
    }
    /* можно получать профиль юзера делая запро сна users/me а не в бд
    * нужно получать токен и деалть запрос на users/me
    *
    * */
    return (<>
        <div>
            <input type={'email'} onChange={(e)=>{
                console.log(e.target.value)
                window.email = e.target.value
            }} placeholder={'email'}/> <br/>
            <input type={'password'} onChange={(e)=>{
                console.log(e.target.value)
                window.password = e.target.value
            }} placeholder={'password'}/>
            <input type={'text'} onChange={(e)=>{
                console.log(e.target.value)
                window.name = e.target.value
            }} placeholder={'name'}/>

            <button type={"submit"} onClick={async ()=>{await props.LoginRealThunk(window.email, window.password, window.name);

                await handleClick()

            }}><Link to={'/'}>login</Link></button>

        </div>
    </>)
})

export default RealLogin