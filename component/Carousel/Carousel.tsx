import React,{Component} from 'react'

import Carousel, {CarouselProps} from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'
import {movieType} from "../../redux/HomeReducer";
//import logo from '../Terminator_Genisys.png'
type PropsType = {
    movie: Array<movieType>
}
export class OwlDemo extends Component<PropsType, CarouselProps> {
    constructor(props: PropsType & CarouselProps) {
        super(props);

    }


    render() {



        return(<><Carousel
                // @ts-ignore
                slidesPerPage={3}
                animationSpeed={125}
                offset={-40}
            >
                {Array.from(this.props.movie).map((m, i)=>{
                   return <img key={i} style={{cursor: "grab", userSelect:"none", marginTop:65+'px'}}
                               height={450+'px'} src={`http://localhost:8000${m.poster}`} />



                })}</Carousel></>



        )

    }


}



export default OwlDemo