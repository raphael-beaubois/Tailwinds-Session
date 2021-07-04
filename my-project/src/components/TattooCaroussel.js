import React from 'react'
import {Carousel} from '3d-react-carousal';
import ink1 from "../assets/ink1.jpeg"
import ink2 from "../assets/ink2.jpeg"
import ink3 from "../assets/ink3.jpeg"

function TattooCaroussel() {
    let slides = [
        <img className="lg:w-100 lg:h-80 md:w-50 md:40 sm:w-25" src={ink1} alt="1" />,
        <img className="lg:w-100 lg:h-80 md:w-50 md:40 sm:w-25" src={ink2} alt="2" />  ,
        <img className="lg:w-100 lg:h-80 md:w-50 md:40 sm:w-25" src={ink3} alt="3" />  ,
        // <img style={{width: "650px", height:"320px"}} src={ink1} alt="1" />,
        // <img style={{width: "650px", height:"320px"}} src={ink2} alt="2" />  ,
        // <img style={{width: "650px", height:"320px"}} src={ink3} alt="3" />  ,
    ]
        return (
        <div className="py-20 bg-gray-800">
            <Carousel slides={slides} autoplay={true} interval={3000}/>

        </div>
    )
}

export default TattooCaroussel
