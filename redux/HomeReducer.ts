import {MovieApi, movieBinType} from "../api/api";
import {AppStateType} from "./redux";
import {Dispatch} from "redux";
import {ActorsDirectors, reviewsType} from "../component/movieDetail/MovieDetail";

export type currentMovieType = {
    movie?: any;
    user?: any;
    budget?: number
    category?: string
    description?: string
    fees_in_usa?: number
    fess_in_world?: number
    tagline?: string
    title?: string
    url?: string
    world_premiere?: string
    year?: number
    country?: string
    draft?: boolean
    directors?: any
    actors?: Array<ActorsDirectors>
    id?: number
    genres?: any
    poster?: string
    reviews?: Array<reviewsType>
}
export type movieType = {
    budget: number
    results?: any
    category: string
    description: string
    fees_in_usa: number
    fess_in_world: number
    tagline: string
    title: string
    url: string
    count?: number
    world_premiere: string
    year: number
    country: string
    draft: boolean
    directors: any
    actors: any
    id: number
    poster: string
    reviews: Array<reviewsType>
}

type initialStateType = {
    movieBin: Array<movieBinType>
    text: string,
    movie: Array<movieType>,
    currentMovie: currentMovieType,
    isFetching: boolean,
    genres: Array<any>,
    rating: Array<any>,
    reviews: Array<reviewsType>,
    genresCheck: any,
    movieId: number,
    nameReviews: string | null,
    textReviews: string,
    star: number | null,
    numberState: number
    count: null | number
    results: null | Array<movieType>
    name: null

}

let initialState: initialStateType = {
    movieBin: [],
    text: '',
    movie: [],
    currentMovie: {},
    isFetching: true,
    genres: [],
    rating: [],
    reviews: [],
    results: [],
    genresCheck: [],
    movieId: 0,
    nameReviews: '',
    textReviews: '',
    star: 0,
    numberState: 0,
    count: null,
    name: null
};
//type initialStateType = typeof initialState
const LOAD_MOVIE = "LOAD_MOVIE"
const LOAD_CURRENT_MOVIE = "LOAD_CURRENT_MOVIE"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const GENRES = "GENRES"
const RATING = "RATING"
const TEXT = "TEXT"
const MOVIEBIN = "MOVIEBIN"
const CHECKBOX = "CHECKBOX"
const REVIEWS = "REVIEWS"
export const NAME = "NAME"
const TEXTREVIEWS = "TEXTREVIEWS"
const REVIEWSTEXT = "REVIEWSTEXT"
const SETSTAR = "SETSTAR"
const GETSTAR = "GETSTAR"
const SETMOVIEID = "SETMOVIEID"
const SETNUMBER = "SETNUMBER"
const SETCOUNT = "SETCOUNT"
const SETRESULTS = "SETRESULTS"
/*сервак при пост зопросе возвращает все отзывы вклюсая толькочто добавленный*/
const HomeReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case LOAD_MOVIE: {
            return {...state, movie: action.movie}
        }
        case MOVIEBIN: {
            return {...state, movieBin: action.movieBin}
        }
        case SETRESULTS: {
            return {...state, results: action.results}
        }
        case SETCOUNT: {
            return {...state, count: action.count}
        }
        case SETSTAR: {
            return {...state, star: action.star}
        }
        case REVIEWS: {
            return {...state, reviews: action.reviews}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFething}
        }
        case GENRES: {
            return {...state, genres: action.genres}
        }
        case LOAD_CURRENT_MOVIE: {
            return {...state, currentMovie: action.currentMovie}
        }
        case SETNUMBER: {
            return {...state, numberState: action.number}
        }
        case RATING: {
            return {...state, rating: action.rating}
        }
        case SETMOVIEID: {
            return {...state, movieId: action.movieId}
        }
        case REVIEWSTEXT: {
            return {...state, textReviews: action.text}
        }
        case TEXT: {
            return {...state, text: action.text}
        }
        case NAME: {
            return {...state, nameReviews: action.name}
        }
        case CHECKBOX: {
            return {...state, genresCheck: action.check}
        }
        default:
            return state


    }
}
type ActionType =
    setMovieType
    | setResultsType
    | setCountType
    | setGenresType
    | toggleIsFetchingType
    | setCurrentMovieType
    | RatingCurrentMovieType
    | SearchTextType
    | CheckType
    | ReviewsType
    | SetNumberType
    | MovieIdType
    | StarType
    | TextType
    | RiviewsTextType
    | NameType
    | setMovieBinActionType
type setMovieBinActionType = {
    type: typeof MOVIEBIN
    movieBin: Array<movieBinType>
}
type setMovieType = {
    type: typeof LOAD_MOVIE
    movie: any
}
type setResultsType = {
    type: typeof SETRESULTS
    results: Array<movieType>
}
type setCountType = {
    type: typeof SETCOUNT
    count: number | null
}
type setGenresType = {
    type: typeof GENRES
    genres: any
}
export type toggleIsFetchingType = {
    type: typeof TOGGLE_FETCHING
    isFething: boolean
}
type setCurrentMovieType = {
    type: typeof LOAD_CURRENT_MOVIE
    currentMovie: any
}
type RatingCurrentMovieType = {
    type: typeof RATING
    rating: any
}
type SearchTextType = {
    type: typeof TEXT
    text: string
}
type CheckType = {
    type: typeof CHECKBOX
    check: any
}
type ReviewsType = {
    type: typeof REVIEWS
    reviews: any
}
export type NameType = {
    type: typeof NAME
    name: string
}
export type TextType = {
    type: typeof TEXTREVIEWS
    text: string
}
type RiviewsTextType = {
    type: typeof REVIEWSTEXT
    text: string;
}
type StarType = {
    type: typeof SETSTAR
    star: number
}
type MovieIdType = {
    type: typeof SETMOVIEID
    movieId: number
}
type SetNumberType = {
    type: typeof SETNUMBER
    number: number
}
export const setMovie = (movie: any): setMovieType => ({type: LOAD_MOVIE, movie})
export const setGenres = (genres: any): setGenresType => ({type: GENRES, genres})
export const toggleIsFetching = (isFething: boolean): toggleIsFetchingType => ({type: TOGGLE_FETCHING, isFething})
export const setCurrentMovie = (currentMovie: any): setCurrentMovieType => ({type: LOAD_CURRENT_MOVIE, currentMovie})
export const RatingCurrentMovie = (rating: any): RatingCurrentMovieType => ({type: RATING, rating})
export const SearchText = (text: string): SearchTextType => ({type: TEXT, text})
export const Check = (check: any): CheckType => ({type: CHECKBOX, check})
export const Reviews = (reviews: any): ReviewsType => ({type: REVIEWS, reviews})
export const Name = (name: string): NameType => ({type: NAME, name})
export const Text = (text: string): TextType => ({type: TEXTREVIEWS, text})
export const ReviewsText = (text: string): RiviewsTextType => ({type: REVIEWSTEXT, text})
export const Star = (star: number): StarType => ({type: SETSTAR, star})
export const MovieId = (movieId: number): MovieIdType => ({type: SETMOVIEID, movieId})
export const SetNumber = (number: number): SetNumberType => ({type: SETNUMBER, number})
export const getCount = (count: number): setCountType => ({type: SETCOUNT, count})
export const getResults = (results: Array<movieType>): setResultsType => ({type: SETRESULTS, results})
export const setMovieBinAction = (movieBin: Array<movieBinType>): setMovieBinActionType => ({type: MOVIEBIN, movieBin})

export type GetStateType = () => AppStateType

export const getMovie = function () {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.getMovie().then((data: any) => {
            dispatch(setMovie(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
export const setReviews = function (text: string, movie: string | number) {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.CreateReviews(text, movie).then((data: any) => {
            dispatch(Reviews(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
export const setMovieBin = function (userid: string | null, movieid: number | undefined) {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        // @ts-ignore
        await MovieApi.setMovieBin(userid, movieid).then((data: Array<movieBinType>) => {
            dispatch(toggleIsFetching(true));
            dispatch(setMovieBinAction(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
export const getMovieBin = function () {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.getMovieBin().then((data: Array<movieBinType>) => {
            dispatch(toggleIsFetching(true));
            dispatch(setMovieBinAction(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
export const deleteMovieBin = function (movie_id: string) {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.deleteMovieBin(movie_id).then((data: Array<any>) => {
            dispatch(toggleIsFetching(true));
            dispatch(setMovieBinAction(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
/*export const getMovie = async (dispatch) => {


    await MovieApi.getMovie().then(data => {


            dispatch(setMovie(data));
            dispatch(toggleIsFetching(false));
        });
    }*/
export const searchMovie = function (text: string) {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.searchMovie(text).then((data: any) => {
            dispatch(setMovie(data));
            dispatch(toggleIsFetching(false));
            dispatch(getCount(data.count))
            dispatch(getResults(data.results))
        })
    }
}
export const FilterMovie = function (number: any) {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.GenreMovie(number).then((data: any) => {
            dispatch(setMovie(data));
            dispatch(getCount(data.count))
            dispatch(toggleIsFetching(false));
            dispatch(getResults(data.results))
        })
    }
}
export const getGenres = () => {
    return async (dispatch: Dispatch<ActionType>, getState: GetStateType) => {


        await MovieApi.getGenres().then((data: any) => {


            dispatch(setGenres(data));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const getCurrentMovie = function (pk: number) {

    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {

        await MovieApi.getDetailMovie(pk).then((data: any) => {


            dispatch(setCurrentMovie(data));
            dispatch(MovieId(data.id));


        });
        await MovieApi.getRating(pk).then((data: any) => {
            dispatch(RatingCurrentMovie(data))
            dispatch(Star(data))
            dispatch(toggleIsFetching(false));
        })

    }
}
export const getRating = function (pk: number) {

    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.getRating(pk).then((data: any) => {
            dispatch(Star(data))
            dispatch(RatingCurrentMovie(data))
            dispatch(toggleIsFetching(false));
        })

    }
}
export const setRating = function (star: number, movie: number) {

    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.setRating(star, movie).then((data: any) => {
            dispatch(RatingCurrentMovie(data))
            dispatch(Star(data))
            dispatch(toggleIsFetching(false));
        })

    }
}
export const getReviews = function (pk: number) {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.getReviews(pk).then((data: any) => {
            dispatch(Reviews(data))
            dispatch(toggleIsFetching(false));

        })

    }
}
export const deleteReviews = function (movie_id: string, rid:string) {
    return async function (dispatch: Dispatch<ActionType>, getState: GetStateType) {
        await MovieApi.deleteReviews(movie_id, rid).then((data: any) => {
            dispatch(Reviews(data))
            dispatch(toggleIsFetching(false));

        })

    }
}


export default HomeReducer