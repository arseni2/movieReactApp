import './App.css';
import HomeContainer from './component/Home/HomeContainer'
import Footer from './component/Footer/Footer'
import HeaderContainer from "./component/Header/HeaderContainer";
import MovieDetailContainer from "./component/movieDetail/MovieDetailContainer";
import {Route, Switch} from 'react-router-dom'
import React, {Fragment} from 'react'
import LoginContainer from "./component/Login/LoginContainer";
import RealLoginContainer from "./component/RealLogin/RealLoginContainer";
import { Bin } from './bin/bin';

type propsType = {
    isInitilized: boolean
}

let App:any = React.memo((props: propsType) => {
  return (
    <div className="animate__animated animate__fadeIn">

            <Switch>
                <Route exact path="/login" component={LoginContainer}/>
                <Route exact path="/followed" component={Bin}/>
                <Route exact path="/movie/:pk?" component={MovieDetailContainer}/>
                <Route exact path='/' render={() =>
                    <Fragment>
                       <Route path='' component={HeaderContainer}/>
                       <Route path='' component={HomeContainer}/>



                        <Footer/>
                    </Fragment>
                } />




            </Switch>




    </div>
  );
})

export default App;
