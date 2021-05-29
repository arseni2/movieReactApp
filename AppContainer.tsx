import React from 'react'
import App from './App'
import {AppStateType} from "./redux/redux";
import {connect} from "react-redux";
import {initThunk} from "./redux/AppReducer";
import Loader from "./component/loader/loader";
import {ISUserThunk} from "./redux/AuthReducer";
import {Redirect, Route} from 'react-router-dom';
import RealLoginContainer from "./component/RealLogin/RealLoginContainer";


type mapDispatchToProps = {
    initThunk: () => void
    ISUserThunk: () => void
}
type MapPropsType = ReturnType<typeof mapStateToProps>

type PropsType = MapPropsType & mapDispatchToProps



class AppContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initThunk()
        this.props.ISUserThunk()
        if(this.props.eror){

            return <Redirect to={'/reallogin'} />
        }
    }
    render() {
        return <>
            <Route exact path="/reallogin" component={RealLoginContainer}/>
            {!this.props.profile.userPhotos ?
             this.props.profile.isAxiosError ? <Redirect to={'/reallogin'}/> :


            !this.props.isInitilized ? <Loader/> : <App isInitilized={this.props.isInitilized}/> : <App isInitilized={this.props.isInitilized}/>}
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isInitilized: state.app.isInitilized,
        isFetching: state.homePage.isFetching,
        eror: state.app.eror,
        isAuth: state.authPage.isAuthorized,
        profile: state.authPage.profile,
    }
}


export default connect<MapPropsType, mapDispatchToProps, PropsType, AppStateType>(mapStateToProps,
    {initThunk, ISUserThunk})(AppContainer);