import React from 'react'
import {ActorsDirectors} from "./MovieDetail";
import {currentMovieType} from "../../redux/HomeReducer";

type propsType = {
    isFetching: boolean
    actors: Array<ActorsDirectors>
}

let Actors = (props: propsType)=>{
    return(
        <div style={{paddingLeft: 30 + 'px'}}>
            <h1>actors and directors</h1>

            {props.isFetching == false ? props.actors.map((a:ActorsDirectors, i:number) => {
                return <div key={i + 1 ?? 1}>
                    <img width={200 + 'px'} height={200 + 'px'} style={{borderRadius: 50 + '%'}}
                         src={`http://localhost:8000${a.image}`}
                         key={i}/>
                    <p key={i}>{a.name}</p>


                </div>
            }) : <div>loading...</div>}
        </div>
    )
}

export default Actors