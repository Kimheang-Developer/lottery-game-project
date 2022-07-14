import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner01 from '../assets/img/banner/1.png'
import Banner02 from '../assets/img/banner/2.png'
import Banner03 from '../assets/img/banner/3.png'

const Slide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            <Slider {...settings}>
                <div className=''>
                    <img src={Banner01} alt='' className='w-56'/>
                </div>
                <div>
                    <img src={Banner02} alt='' className='w-56'/>
                </div>
                <div>
                    <img src={Banner03} alt='' className='w-56'/>
                </div>
            </Slider>
        </>
    )
}

export default Slide