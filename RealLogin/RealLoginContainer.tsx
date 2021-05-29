import RealLogin from './RealLogin'
import React from 'react'
import {connect} from 'react-redux';
import {LoginAction, LoginThunk, LoginRealThunk} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux";

type mapDispatchToProps = {
    LoginRealThunk: (email:string, password:string, name:string)=>void
}
type MapPropsType = ReturnType<typeof mapStateToProps>


type PropsType = MapPropsType & mapDispatchToProps

class RealLoginContainer extends React.PureComponent<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render(){
        return(
            <RealLogin
                LoginRealThunk={this.props.LoginRealThunk}
                profile={this.props.profile}

            />
        )
    }
}
let mapStateToProps = (state:AppStateType) => {
    return{
        username: state.authPage.username,
        email: state.authPage.email,
        password: state.authPage.password,
        profile: state.authPage.profile
    }
}
export default connect<MapPropsType,mapDispatchToProps,PropsType, AppStateType>(mapStateToProps,{LoginRealThunk})(RealLoginContainer)