import React from 'react'
import Login from "./Login";
import {connect} from 'react-redux';
import {LoginThunk} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux";

//type ConnectType = MapPropsType & mapDispatchToProps & PropsType & AppStateType
type MapPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    LoginThunk: (username:string | null, password:string, email:string, file:any)=>void

}
type PropsType = MapPropsType & mapDispatchToProps
class LoginContainer extends React.PureComponent<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render(){
        return(
            <Login
                username={this.props.username}
                email={this.props.email}
                password={this.props.password}
                //LoginAction={this.props.LoginAction}
                LoginThunk={this.props.LoginThunk}
                token={this.props.token}
                tokenRefresh={this.props.tokenRefresh}

            />
        )
    }
}
let mapStateToProps = (state: AppStateType) => {
    return{
        username: state.authPage.username,
        email: state.authPage.email,
        password: state.authPage.password,
        token: state.authPage.token,
        tokenRefresh: state.authPage.tokenRefresh
    }
}
export default connect<MapPropsType,mapDispatchToProps,PropsType, AppStateType>(mapStateToProps,{LoginThunk})(LoginContainer)