import '../../style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/anim.css'
import React from 'react'
import {Link} from "react-router-dom";
import SearchMovie from "./SearchMovie";
import {isAuth} from "../movieDetail/FormReviews";
/*faSearch*/

type propsType = {
    profile: any
    FilterMovie: (number: any)=>void
    isFetching: boolean
    ProfileThunk: ()=>void
    SearchText: (test: string)=>void
    genres: Array<any>
    text: string
    check: (check: any)=>void
    AuthorizedAction: (is: boolean)=>void
    searchMovie: (text: string)=>void

}

let Header = React.memo((props: propsType) => {

    if(props.profile){
    if(props.profile.request){
        // значит токена нет
        console.log('TOKENA NETY')
        console.log(props.profile.code)
        props.AuthorizedAction(false)

    } else{
        let token = localStorage.getItem('token')
        console.log(token)
        props.AuthorizedAction(true)
    }}
    let arrGenres: any = {}



    //arrGenres.genres = null
    /* сделать свой гамбургер меню,
    дальше отптимизировать,добвлеть новые фичи,
    писать на ts и использовать много новых технологий = ит камас*/
    /*<div className="hamburger-menu">
                    <input id="menu__toggle " type="checkbox"/>
                    <label className="menu__btn " htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="menu__box " style={{paddingTop: 60+'px'}}>

                        {props.isFetching === false ? props.genres.map((g,i)=>{

                            return <li key={i} style={{marginTop: 10+'px'}}><p style={{marginTop: 60 + 'px'}} className="menu__item">
                                <input onClick={(e)=>{
                                if(e.target.checked){
                                    Object.assign(arrGenres, {[g.name]: e.target.value})
                                    props.check(arrGenres)
                                    props.FilterMovie(arrGenres)
                                }else{
                                    delete arrGenres[g.name]
                                }

                            }} type="checkbox" name=""
                                                                                className="menu__item" value={`&genres=${g.id}`}/>{g.name}</p></li>
                        }) : console.log("bad")}






                    </ul>

                </div>*/
    return (

        <header className="header " id="header">


            <div className="container">
                <div className="row">

                    <div className={"indexz"}>
                        <div className="hamburger-menu">
                            <input id="menu__toggle" type="checkbox"/>
                            <label className="menu__btn" htmlFor="menu__toggle">
                                <span> </span>
                            </label>
                            <ul className="menu__box">

                                {props.isFetching === false ? props.genres.map((g: any,i: number)=>{

                                    return (<li key={i} style={{marginTop: 10+'px'}}><label htmlFor={g.id}><p style={{marginTop: 50 + 'px', fontSize: '25px'}} className="menu__item">
                                        <input onClick={(e:any)=>{

                                            if(e.target.checked){

                                                Object.assign(arrGenres, {[g.name]: e.target.value})
                                                props.check(arrGenres)
                                                props.FilterMovie(arrGenres)
                                            }else{
                                                delete arrGenres[g.name]
                                            }
/*можно чекбоксы прятать и при клике на нейм фильтрвать по нужной категории*/

                                        }} type="radio" name="flexRadioDefault"
                                               className="menu__item form-check-input" id={g.id} style={{opacity: 0}} value={`&genres=${g.id}`}/>{g.name}</p></label></li>)
                                }) : <p> </p>}
                            </ul>
                        </div>
                    </div>

                   <SearchMovie text={props.text} searchMovie={props.searchMovie} SearchText={props.SearchText}/>
                    <div className='col-lg-4' style={{zIndex: 9999999999999999}}>

                        {props.profile ? !props.profile.request ? <><p>{props.profile.name}</p> <img width={'60px'} height={'60px'} src={props.profile.userPhotos}/><button onClick={()=>{localStorage.removeItem('token'); localStorage.removeItem("tokenRefresh");localStorage.removeItem('userId'); localStorage.removeItem('name'); props.ProfileThunk()}}>logout</button></> : <><Link to={'/realLogin'}> <>login</> </Link><Link to={'/login'}> <>register</> </Link>
                            {localStorage.removeItem('token')} {localStorage.removeItem('userId')} {localStorage.removeItem('name')}
                            </>
                        : <></>
                        }


                    </div>
                    {isAuth ?
                        <div style={{marginTop: '15px', position: 'relative'}}> <Link to='/followed'>followed movie</Link> </div>

                        : <></>}
                </div>

            </div>

        </header>
    )
})
/*
* name - arsenii
* email - test@gmail.com
* password - qwerty123098-
* */
export default Header
