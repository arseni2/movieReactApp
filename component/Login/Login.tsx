import React from 'react'
import {useHistory} from "react-router-dom";

type propsType = {
    LoginThunk: (username:string | null, password:string, email:string, file:any)=>void
    username: string | null
    email: string | null
    password: string | null
    token: string | null
    tokenRefresh: string | null
}

const Login = React.memo((props: propsType)=>{
    console.log(props)
    const history = useHistory()

    return(

            <div className="form-group">
                <br/>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" onChange={(e)=>{
                    window.email = e.target.value
                    console.log(window.email)
                }} id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>


                <br/>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" onChange={(e)=>{
                    window.password = e.target.value
                    console.log(window.email)
                }} id="exampleInputPassword1" placeholder="Password"/>

                <br/>
                <label htmlFor="exampleInputPassword1">User name</label>
                <input type="name" className="form-control" onChange={(e)=>{
                    window.username = e.target.value
                    console.log(window.email)
                }} id="exampleInputPassword1" placeholder="enter username..."/>
                <br/>
                <input type={'file'} onChange={(e:any)=>{
                    window.avatar = e.target.files[0]
                }} multiple/>
            <button type="button" className="btn btn-primary" onClick={()=>{
                props.LoginThunk(window.username, window.password, window.email, window.avatar)
                console.log(props.username)
                history.goBack()
                /*без верифиувции емайцла но все-же пользователь становиося активным*/

            }}>Submit</button></div>

    )
})

export default Login