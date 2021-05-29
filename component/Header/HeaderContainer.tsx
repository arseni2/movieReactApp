import Header from "./Header";
import React, {ReactNode} from 'react'
import {connect} from 'react-redux';
import {Check, FilterMovie, getGenres, searchMovie, SearchText, SetNumber} from '../../redux/HomeReducer' //thunk
import {AuthorizedAction, ProfileThunk} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux";

type mapDispatchToProps = {

    getGenres: ()=>void
    ProfileThunk: ()=>ReactNode
    searchMovie: (test: string)=>void
    SearchText: (test: string)=>void
    FilterMovie: (number: any)=>void
    Check: (check: any)=>void
    AuthorizedAction: (is: boolean)=>void
    SetNumber: (number: number)=>void
}
type MapPropsType = ReturnType<typeof mapStateToProps>

export type PropsType = MapPropsType & mapDispatchToProps
class HeaderContainer extends React.PureComponent<PropsType> {
    componentDidMount() {
        this.props.getGenres()
        this.props.ProfileThunk()
    }

    render() {
        return <>
            { this.props.isFetching ? <p>loading...</p> : <Header genres={this.props.genres}
                                                                isFetching={this.props.isFetching}
                                                                  SearchText={this.props.SearchText}
                                                                  text={this.props.text}
                                                                  searchMovie={this.props.searchMovie}
                                                                  check={this.props.Check}
                                                                  FilterMovie={this.props.FilterMovie}
                                                                  AuthorizedAction={this.props.AuthorizedAction}
                                                                  profile={this.props.profile}
                                                                  ProfileThunk={this.props.ProfileThunk}





            /> }

        </>
    }
}
let mapStateToProps = (state: AppStateType) => {
    return {
        genres: state.homePage.genres,
        isFetching: state.homePage.isFetching,
        text: state.homePage.text,
        genresCheck: state.homePage.genresCheck,
        isAuthorized: state.authPage.isAuthorized,
        profile: state.authPage.profile,
    }
}
export default connect<MapPropsType,mapDispatchToProps,PropsType, AppStateType>(mapStateToProps,
    {getGenres, SearchText, searchMovie, Check, FilterMovie, SetNumber, AuthorizedAction, ProfileThunk})(HeaderContainer);