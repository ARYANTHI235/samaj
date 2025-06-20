import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Government1 from '../assets/government1.jpg'
import Government2 from '../assets/goverment2.jpg'
import skill1 from '../assets/skill.jpeg'
import skill2 from '../assets/skill1.jpeg'
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


const SkillDevelopmentCenter = () => {

    const { t } = useTranslation();

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

    const slides = [
        {
            id: 1,
            image: Government1,
            title: t('slide-title2')
        },
        {
            id: 1,
            image: Government2,
            title: t('slide-title2')
        },
    ];

    const skills = [
        {
            image: skill1,
            title: t('skill-title1'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
        {
            image: skill2,
            title: t('skill-title2'),
            duration: t('skill-duration1'),
            desc1: t('skill-desc1'),
            desc2: t('skill-desc2'),
        },
       
    ];

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

                                <div className="w-full mt-6 flex flex-wrap">
                                    {skills.map((skill, index) => (
                                        <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12" key={index}>
                                            <div className="my-3 mx-2">
                                                <div className="image">
                                                    <img src={skill.image} alt="skill" className="w-[350px] sm:w-[300px] md:w-[220px] h-[200px] object-cover" />
                                                </div>
                                                <div className="content font-Primary text-center sm:text-start">
                                                    <h3 className="text-[25px] my-2">{skill.title}</h3>
                                                    <p className="text-[14px]">{skill.duration}</p>
                                                    <p className="text-[14px]">{skill.desc1}</p>
                                                    <p className="text-[14px]">{skill.desc2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default SkillDevelopmentCenter
