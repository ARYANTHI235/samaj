import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reading1 from '../assets/reding.png'
import reading2 from '../assets/reding2.png'
import qrcode from '../assets/qr_code.jpeg'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useTranslation } from 'react-i18next';

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className={`absolute top-[30rem] sm:top-72 right-32 sm:right-4 lg:!right-10 z-30 cursor-pointer bg-white rounded-full p-1 sm:p-3`}
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
            className={` absolute top-[30rem] sm:top-72 left-32 sm:left-4 lg:!left-10 z-30 cursor-pointer bg-white rounded-full p-1 sm:p-3`}
            onClick={onClick}
        >
            <GoArrowLeft size={30} color="black" />
        </div>
    )
}

const ReadingRoom = () => {
    const { t } = useTranslation();

    const slides = [
        {
            id: 1,
            image: reading1,
            title: t('slide-title3')
        },
        {
            id: 1,
            image: reading2,
            title: t('slide-title3')
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    const videoUrls = [
        "https://www.youtube.com/embed/2QjfpyxwTMI?si=8IVb8po3vKaaDxR5",
        "https://www.youtube.com/embed/kpWjfaplPE0?si=gobh7BGqlp1ijWsC",
        "https://www.youtube.com/embed/eHOcSu_mtFg?si=2iiQRvC8HZTfDIp3",
        "https://www.youtube.com/embed/eHOcSu_mtFg?si=2iiQRvC8HZTfDIp3",
        "https://www.youtube.com/embed/6Td0zvi-mfE?si=VN2yWMoXYQKuv4Sy",
        "https://www.youtube.com/embed/KHYXbmtbCJg?si=OLOKsJt_OqsEAYx0"
    ];

    return (
        <>
            <div className="w-full  mx-auto pb-[50px] md:pb-[100px]">
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="mb-10">
                                <Slider {...settings}>
                                    {slides.map((slide) => (
                                        <div key={slide.id} className="relative h-[600px] rounded-xl">
                                            <img
                                                src={slide.image}
                                                alt="Slide"
                                                className="w-full h-full object-cover rounded-3xl"
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-3xl">
                                                <h2 className="text-white text-md md:text-3xl font-semibold text-center font-Secondry">
                                                    {slide.title}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="content font-Primary">
                                <p className='mb-4'>{t('skill-paragraf')}</p>
                                <span>{t('government-adress')} <a href="#" className='text-Primary'>{t('government-nomber')}</a></span>
                                <p>{t('reading-paragraf')} <a href="#" className='text-Primary'>{t('reading-encer')}</a></p>
                                    <div>
                                        <img src={qrcode} alt="qrcode" className='w-full md:w-[250px] h-full  md:h-[250px]' />
                                    </div>
                                <div className="w-full mt-10 px-4">
                                    <div className="flex flex-wrap -mx-3 justify-center">
                                        {videoUrls.map((url, index) => (
                                            <div key={index} className="w-full md:w-6/12 lg:w-4/12 md:px-3 mb-6">
                                                <div className="aspect-video overflow-hidden">
                                                    <iframe
                                                        className="w-full h-full"
                                                        src={url}
                                                        title={`YouTube video player ${index + 1}`}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadingRoom
