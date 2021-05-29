import React, {Fragment} from 'react'
import MovieDetail from "./MovieDetail";
import {connect} from 'react-redux';
import {
    deleteReviews,
    getCurrentMovie,
    getGenres,
    getMovieBin,
    getRating,
    getReviews,
    MovieId,
    movieType,
    Name,
    Reviews,
    ReviewsText,
    setRating,
    setReviews,
    Text
} from '../../redux/HomeReducer'
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from '../../redux/redux';
import HeaderContainer from "../Header/HeaderContainer";

type PathParamsType = {
    pk: string
}
type mapDispatchToProps = {
    deleteReviews: (movie_id:string, rid:string)=>void
    getMovieBin: any
    getCurrentMovie: (pk: number) => Promise<void>
    getGenres: ()=>void
    getRating: (pk: number) => Promise<void>
    getReviews: (pk:number)=>void
    setReviews: (text:string, pk:number | string)=>void
    setRating: (star: number, movie: number) => Promise<void>
    Name: (name:string)=>void
    Text: (text: string) => void
    movie: Array<movieType>
    ReviewsText: (text: string) => void
}

type MapPropsType = ReturnType<typeof mapStateToProps>


type PropsType = MapPropsType & mapDispatchToProps & RouteComponentProps<PathParamsType>;
class MovieDetailContainer extends React.PureComponent<PropsType> {
    constructor(props:PropsType) {
        super(props);

    }
    componentDidMount() {
        this.props.getMovieBin()
        this.props.getCurrentMovie(Number(this.props.match.params.pk))
        this.props.getRating(Number(this.props.match.params.pk))
        this.props.getReviews(Number(this.props.match.params.pk))
    }

    render() {

        return <>
            {this.props.isFetching == false ? <Fragment>
                {/* @ts-ignore */}
                    <HeaderContainer/>
                {/* @ts-ignore */}
                    <MovieDetail movie={this.props.movie}
                                 isFetching={this.props.isFetching}
                                 //@ts-ignore
                                 currentMovie={this.props.currentMovie}

                                 getRating={this.props.getRating}
                                 rating={this.props.rating}
                                 setReviews={this.props.setReviews}
                                 reviews={this.props.reviews}
                                 pk={this.props.match.params.pk}
                                 Name={this.props.Name}
                                 Text={this.props.Text}
                                 setRating={this.props.setRating}
                                 star={this.props.star}
                                 movieId={this.props.movieId}
                                 isAuthorized={this.props.isAuthorized}
                                 userId={this.props.userId}
                                 ReviewsText={this.props.ReviewsText}
                                 textReviews={this.props.textReviews}
                                 deleteReviews={this.props.deleteReviews}
                    />

                </Fragment>



                :console.log('')}


        </>
    }
}
let mapStateToProps = (state: AppStateType) => {
    return {
        movie: state.homePage.movie,
        //@ts-ignore
        currentMovie: state.homePage.currentMovie,
        isFetching: state.homePage.isFetching,
        genres: state.homePage.genres,
        rating: state.homePage.rating,
        reviews: state.homePage.reviews,
        nameReviews: state.homePage.name,
        textReviews: state.homePage.textReviews,
        star: state.homePage.star,
        movieId: state.homePage.movieId,
        isAuthorized: state.authPage.isAuthorized,
        userId: state.authPage.userId
    }
}



export default withRouter( connect(mapStateToProps,
    {getCurrentMovie, MovieId, getGenres, getRating,
        getReviews, Reviews, setReviews,Name, Text, ReviewsText, setRating, getMovieBin, deleteReviews})

(MovieDetailContainer))