import React from 'react'
import award from "../assets/award.jpg"
import award1 from "../assets/award1.png"
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Events = () => {

     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: dots => (
        <div style={{ marginTop: "20px" }}>
            <ul style={{ display: "flex", justifyContent: "center" }} className='pt-6'>{dots}</ul>
        </div>
    ),
    customPaging: i => (
        <div
            className="w-[12px] h-[12px] bg-Primary rounded-full opacity-50 hover:opacity-100 transition-all duration-300"
        />
    )
    };

     const slides = [
        {
            image: award,
            title: "Aatmanirbhar exhibition",
            description: "A two-day self-sustaining exhibition has begun A two-day Atmanirbhar […]"
        },
        {
            image: award1,
            title: "Another Facility",
            description: "Description of another facility here..."
        }
    ];

    return (
        <>
            <section className='py-[100px]'>
                <div className="container">
                    <div className="row">
                        <div className="heading text-center mb-4 md:mb-8">
                            <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>All Events</h6>
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>Our Past Events</h2>
                        </div>
                        <Slider {...settings} className="w-full">
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full !flex flex-wrap md:flex-nowrap">
                                    <div className="w-full md:w-6/12">
                                        <div className="image">
                                            <img
                                                src={slide.image}
                                                alt={`facilities-${index}`}
                                                className="w-full h-full object-cover 
                                                rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-6/12 md:ps-8 flex flex-col justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-[#FBEAEB]">
                                        <div className="content p-3 text-center md:text-start">
                                            <Link className=' md:text-[20px] lg:text-[24px] xl:text-[30px] font-Secondry'>
                                                {slide.title}
                                            </Link>
                                            <p className='font-Primary my-2 lg:my-5 text-[14px] lg:text-[16px]'>
                                                {slide.description}
                                            </p>
                                            <div className="btn mt-4">
                                                <Link
                                                    className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-4 lg:px-8 py-2 lg:py-4 inline-block group"
                                                    type="button"
                                                >
                                                    <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                                    <span className="text-[14px] lg:text-[16px] relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                                        Read More
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='pt-[50px] md:pt-[100px] pb-[50px]'>
                <div className="container">
                    <div className="row">
                         <div className="heading text-center ">
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>Our Future Events</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events
