import axios, {AxiosResponse} from "axios";
import {currentMovieType, movieType} from "../redux/HomeReducer";
import {dataTokenType} from "../type/types";
import {reviewsType} from "../component/movieDetail/MovieDetail";

export type movieBinType = Array<{ id: number, user: number, moviePoster: string }>
const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api-auth/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});
export type isUserType = {
    isUser: boolean
}

function getCookie(name: string) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const MovieApi = {
    getMovie() {
        return instance.get(`movie`)
            .then((response: AxiosResponse<movieType>) => {
                return response.data;
            })
            .catch(() => {
                return Promise.reject('oh, no!');
            })
    },
    setMovieBin(userid: string, movieid: string) {
        var data = new FormData();
        data.append('userid', String(userid))
        data.append('movieid', String(movieid))
        return axios({
            method: "POST",
            url: `http://localhost:8000/api-auth/moviebin/`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            data: data
        }).then((data) => {
            return data.data
        })
    },
    getGenres() {
        return instance.get(`genres`)
            .then((response) => {
                return response.data
            })
    },
    getMovieBin() {
        return instance.get(`moviebin/`)
            .then((response) => {

                return response.data
            })
    },
    getDetailMovie(pk: number) {
        return instance.get(`movie/${pk}`)
            .then((response: AxiosResponse<currentMovieType>) => {
                //@ts-ignore
                localStorage.setItem('mid', response.data.mid)
                return response.data.movie
            })
    },
    getRating(pk: number) {
        return instance.get(`rating/get/${pk}`, {
            headers: {
                'Content-Type': 'application / x-www-form-urlencoded'
            }
        })
            .then((response) => {
                return response.data
            })
    },
    setRating(star: number, movie: number) {
        return axios({
            method: "POST",
            url: "http://localhost:8000/api-auth/rating",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                star: star,
                movie: movie

            }
        })
            .then(res => {

                return res.data

            })

    },
    searchMovie(text: string) {
        return instance.get(`m?search=${text}`)
            .then((res) => {

                return res.data
            })
    },
    GenreMovie(number: any) {
        /*тут приходит по одному элементу мб тут сдклать один обьект*/
        console.log(number)
        let arr = Object.values(number)
        console.log(arr)
        window.url = 'moviefilter?'
        if (arr.length) {
            let str = `${number[Object.keys(number)[0]]}`
            window.url += `${number[Object.keys(number)[0]]}`.substring(1)
            console.log(number[Object.keys(number)[0]])
        }
        for (let item in number) {
            window.url += number[item]
        }
        let url = window.url
        console.log(url)
        return instance.get(`${url}`)
            .then((res) => {
                return res.data
            })

    },
    CreateReviews(text: string, movie: number | string) {
        return axios({
            method: "POST",
            url: `http://localhost:8000/api-auth/reviews`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                text: String(text),
                movie: Number(movie),
                name: String(localStorage.getItem("name")),
                user: Number(localStorage.getItem("userId"))
            }
        })

            .then(res => {

                return res.data

            })
    },
    getReviews(movieid: number) {

        return instance.get(`reviews/${movieid}`)
            .then((res) => {
                return res.data
            })

    },
    Login(name: string | null, password: string, email: string, file: any) {
        const csrftoken = getCookie('csrftoken');

        let formData = new FormData()
        formData.append('userPhotos', file)
        formData.append('password', password)
        formData.append('email', email)

        formData.append('name', <string>name)

        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/users/',
            method: 'POST',
            data: formData,
            headers: {
                'X-CSRFToken': csrftoken
            }
        }).then((res) => {
            return res.data
        })


    },
    Token(password: string, email: string) {
        const csrftoken = getCookie('csrftoken');

        let formData = new FormData()
        formData.append('password', password)
        formData.append('email', email)

        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/jwt/create',
            method: 'POST',
            data: formData,
            headers: {
                'X-CSRFToken': csrftoken
            }
        }).then((res: AxiosResponse<dataTokenType>) => {
            return res.data
        })

    },
    userProfile() {
        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/users/me/',
            method: 'GET',
            data: localStorage.getItem("name"),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            localStorage.setItem('userId', res.data.id)
            return res.data
        })
            .catch((err) => {
                return err
            })
    },

    tokenRefresh() {
        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/jwt/refresh', //http://localhost:8000/auth/jwt/refresh
            method: 'POST',
            data: {refresh: localStorage.getItem('tokenRefresh')},
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res: AxiosResponse<dataTokenType>) => {
            localStorage.removeItem('token')
            localStorage.setItem('token', res.data.access)
            console.log(res.data.access)
            return res.data
        })
            .catch((err) => {
                return err
            })
    },
    logIn(email: string) {
        return axios({
            withCredentials: true,
            url: `http://localhost:8000/api-auth/loginuser?email=${email}`,
            method: 'GET',
        }).then((res) => {
            console.log(res.data)
            return res.data
        })
            .catch((err) => {
                return err
            })
    },
    userId(email: string) {
        return axios({
            withCredentials: true,
            url: `http://localhost:8000/home/?email=${email}`,
            method: 'GET',
        }).then((res) => {
            console.log(res.data)
            return res.data
        })
            .catch((err) => {
                return err
            })
    },
    deleteReviews(movie_id: string, rid: string) {
        let formData = new FormData()
        formData.append('movie_id', String(movie_id))
        formData.append('reviews_id', String(rid))
        return instance.delete(`delReviews/`, {
            data: formData
        })
            .then((res: AxiosResponse<reviewsType>) => {
                return res.data
            })
    },
    deleteMovieBin(movie_id: string) {
        let formData = new FormData()
        formData.append('movie_id', String(movie_id))
        return instance.delete(`delMovieBin/`, {
            data: formData
        })
            .then((res: AxiosResponse<any>) => {
                return res.data
            })
    }
}
/*
getReviews(movieid:number){

        return instance.get(`reviews/${movieid}`)
            .then((res)=>{
                return res.data
            })

    },
* */

