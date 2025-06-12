import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GoArrowRight, GoArrowLeft  } from "react-icons/go";


const NextArrow = (props) => {
     const { onClick } = props
    return (
        <div
            className={`absolute top-[30rem] sm:top-80 right-32 sm:!right-10 z-30 cursor-pointer bg-white rounded-full p-1 sm:p-3`}
            onClick={onClick}
        >
             <GoArrowRight size={30} color="black" />
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className={` absolute top-[30rem] sm:top-80 left-32 sm:!left-10 z-30 cursor-pointer bg-white rounded-full p-1 sm:p-3`}
            onClick={onClick}
        >
         <GoArrowLeft size={30} color="black" />
        </div>
    )
}

const slides = [
    {
        bgClass: 'bg-banner1',
        heading: 'Samast Patidar Samaj Trust',
        subHeading: 'Since 2004 in continuous service to society',
        buttonText: 'Login / Registration',
        buttonLink: '/login'
    },
    {
        bgClass: 'bg-banner2',
        heading: 'Empowering Communities',
        subHeading: 'Join our initiatives for social development',
        buttonText: 'Learn More',
        buttonLink: '/learn-more'
    },
    {
        bgClass: 'bg-banner3',
        heading: 'Empowering Communities',
        subHeading: 'Join our initiatives for social development',
        buttonText: 'Learn More',
        buttonLink: '/learn-more'
    }
];


const Banner = () => {
    const settings = {
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <section className='overflow-hidden relative h-[90vh]'>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className='h-full'>
                        <div className="overflow-hidden relative h-full">
                            <div className="absolute inset-0 z-10">
                                <div className={`${slide.bgClass} bg-no-repeat bg-cover bg-center bg-blend-darken bg-[#00000063] w-full h-full animate-zoom-in`}></div>
                            </div>
                            <div className="text-white banner_content relative z-20 h-[90vh] flex flex-col items-center justify-center">
                                <h1 className='text-[24px] md:text-[50px] xl:text-[75px] 2xl:text-[84px] font-Primary text-center'>
                                    {slide.heading}
                                </h1>
                                <p className='font-medium font-Primary text-[16px] sm:text-[20px] my-5 text-center'>
                                    {slide.subHeading}
                                </p>
                                <div className="btn">
                                    <Link
                                        to={slide.buttonLink}
                                        className="relative overflow-hidden border border-white text-white font-semibold tracking-wider leading-none rounded-full px-8 py-4 inline-block group"
                                        type="button"
                                    >
                                        <span className="absolute inset-0 bg-white transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                        <span className="relative z-10 text-white group-hover:text-Primary transition-colors duration-300 ease-in-out">
                                            {slide.buttonText}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Banner
