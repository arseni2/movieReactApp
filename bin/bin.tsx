import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getMovieBin} from '../redux/HomeReducer';
import {AppStateType} from "../redux/redux";
import {Link} from "react-router-dom";

export const Bin = (props: any) => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieBin())
    }, [])
    let movies = useSelector((state: AppStateType) => state.homePage.movieBin)
    console.log(movies)
    return (<>
        {movies.map((m: any, i) => {
            return <div>
                <Link to={`movie/${m.movieid}`}>
                    <img src={`http://localhost:8000${m.moviePoster}`}/>
                </Link>
            </div>
        })}
    </>)
}

