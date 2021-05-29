import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux";

declare global {
    interface Window { name12: any, text: string, email:string, password:string, username: any, avatar:any, url:any, textValue: any, u:any}
}

type PropsType = {
    setReviews: (text: string, pk: number | string)=> void
    isFetching: boolean
    pk: number | string
    ReviewsText: (text:string)=>void
    textReviews: string
}
let isAuth:any;
function FormReviews(props: PropsType) {
    isAuth = useSelector((state:AppStateType) => {return state.authPage.isAuthorized})
    let click = (text:string) => {
        props.setReviews(text, props.pk)
        props.ReviewsText('')

    }
    console.log(props.isFetching)

    return (<>
            {isAuth ?
            <>
                <textarea className={"textarea"}
                          name={"text"}

                          placeholder="text" onChange={(e) => {

                    props.ReviewsText(e.target.value)


                }} value={String(props.textReviews)} /> <br/>

                <button className={'btn btn-success'} onClick={() => {

                    click(props.textReviews)

                }} style={{marginLeft: 230 + 'px'}} disabled={props.isFetching} type={"submit"}>Submit
                </button>
            </>
                : <p> authorization </p>}



        </>

    )
}

export default FormReviews
export {isAuth}