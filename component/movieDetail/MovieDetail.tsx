import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style.css'
import '../../style/styleDetail.css'
import React from "react";
import Footer from "../Footer/Footer";
import {FaStar} from "react-icons/fa";
import FormReviews from "./FormReviews";
import {currentMovieType, deleteMovieBin, movieType, setMovieBin} from "../../redux/HomeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {Link, useHistory} from 'react-router-dom';
import classNames from 'classnames';

export type reviewsType = {
    name: string
    text: string
    movie: number
    user: number
    id: number | string
}

export type ActorsDirectors = {
    name: string
    image: string
    age: number
    description: string
}

type propsType = {
    deleteReviews: (movie_id: string, rid: string)=>void
    setMovieBin: (userid: number, movieid: number) => void
    movie: Array<movieType>
    isFetching: boolean
    currentMovie: currentMovieType
    getRating: (pk: number) => Promise<void>
    rating: any
    setReviews: (text: string, pk: number | string) => void
    reviews: Array<any>
    pk: number | string
    Name: (name: string) => void
    Text: (text: string) => void
    setRating: (star: number, movie: number) => Promise<void>
    star: null | number
    movieId: number
    isAuthorized: boolean | null
    userId: number | null
    ReviewsText: (text: string) => void
    textReviews: string
}


let userRiviewsId: any = []
//@ts-ignore
window.userRiviewsId = userRiviewsId

let MovieDetail = React.memo((props: propsType): JSX.Element => {
    let movieId:any = useSelector((state:AppStateType)=>{return state.homePage.movieId})


    var follow = Number(props.currentMovie.id) == Number(localStorage.getItem('mid')) ? true : false
    let dispatch = useDispatch()
    let history = useHistory()
    const users: any = useSelector((state: AppStateType) => {
        return state.homePage.movieBin
    })

    const isAuthorized = useSelector((state: AppStateType) => {
        return state.authPage.isAuthorized
    })
    let arr = [1, 2, 3, 4, 5]
    let star = props.star
    console.log(star)
    return (<>


            {props.isFetching ? <></> : <>
                <div style={{marginTop: 70 + 'px'}}></div>
                <img style={{paddingLeft: 30 + 'px', paddingTop: 20 + 'px'}} width={430 + 'px'} height={500 + 'px'}
                    //@ts-ignore
                     src={`http://localhost:8000${props.currentMovie.poster}`}/>
                <div className={"cont"}>
                    <strong>title: </strong><p>{props.currentMovie.title}</p><br/>
                    <strong>description: </strong><p>{props.currentMovie.description}</p><br/>
                    <strong>rating: </strong><p>{arr.map((s, i) => {
                    let ratingValue = i + 1
                    return <>
                        <label>
                            <input type="radio" name="rating" onClick={() => {

                                console.log(Number(ratingValue))
                                props.setRating(Number(ratingValue), props.movieId)

                            }}/>
                            <FaStar
                                className={"star"}
                                color={(ratingValue < Number(star) + 1) ? "#eac424" : "grey"}
                                size={20}
                            />
                        </label>
                    </>
                })}</p>
                    <strong>year: </strong><p>{props.currentMovie.year}</p>
                    <strong>бюджет: </strong><p>{props.currentMovie.budget}$</p>

                    {Array.from(users).map((u: any, i) => {
                        {
                            props.currentMovie.id == Number(localStorage.getItem("mid")) && props.currentMovie.user == Number(localStorage.getItem("userId")) ? follow = true : follow = false
                        }
                        console.log(u)
                        return <></>
                    })}
                    {isAuthorized ?
                        <>
                            <button type={'button'} className={classNames('btn ', { 'btn-success': follow==false,'btn-danger': follow  })} onClick={async () => {
                                if(!follow){await dispatch(setMovieBin(localStorage.getItem("userId"), props.currentMovie.id)); history.push('/followed')}
                                else{await dispatch(deleteMovieBin(String(props.currentMovie.id))); follow=false; history.push('/followed')}

                            }}>{<p  onClick={(e) => {}}>{follow ? 'delete' : 'add'}</p>}

                            </button>
                        </> : <></>}
                </div>
                <h1>Reviews</h1>
                <FormReviews isFetching={props.isFetching}
                             setReviews={props.setReviews} pk={props.pk} textReviews={props.textReviews}
                             ReviewsText={props.ReviewsText}/>

                {props.isFetching == false ? Array.from(props.reviews).map((r, i) => {


                    return <div key={i}>

                        <>
                            <div className="actionBox">
                                <ul className="commentList">
                                    <li>
                                        <div className="commenterImage">
                                            <img className={"avtar"} width={50 + 'px'} height={50 + 'px'}
                                                 src="https://www.elmechtechnology.com/sites/all/themes/aganhost/demos/no-avatar.jpg"/>
                                        </div>
                                        <div className="commentText">
                                            <strong className={'dataId'}
                                                    data-id={r.user}>{r.name}</strong> <p
                                            className="" style={{wordBreak: "break-all"}}>{r.text}</p>


                                            {r.user == Number(localStorage.getItem("userId")) ? <>
                                                <button onClick={() => {
                                                    props.deleteReviews(movieId,r.id)
                                                }}>delete
                                                </button>
                                            </> : <></>}


                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </>


                    </div>


                }) : <div>loading...</div>}

                <Footer/>

            </>}


        </>
    )
})

export default MovieDetail