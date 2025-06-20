import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import TeamMamber from '../assets/team.jpeg'
import Teammamber1 from '../assets/team1.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useTranslation } from 'react-i18next';



const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className={`absolute top-[26rem] sm:top-[21rem]  md:top-[28rem] lg:-top-24 right-28 sm:right-44 md:right-[17rem] lg:!right-0 z-30 cursor-pointer bg-white rounded-full p-1 sm:p-3 border border-black`}
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
            className={` absolute top-[26rem] sm:top-[21rem]  md:top-[28rem] lg:-top-24 left-28 sm:left-44 md:left-[17rem] lg:!left-[48rem] xl:!left-[62rem] 2xl:!left-[72rem] z-30 cursor-pointer bg-white rounded-full p-1 sm:p-3 border border-black`}
            onClick={onClick}
        >
            <GoArrowLeft size={30} color="black" />
        </div>
    )
}

const Team = () => {
    const { t } = useTranslation();
    const teamMembers = [
        {
            name: t('Team-name1'),
            role: "President",
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        }
    ];

    const teamMembers2 = [
        {
            name: t('Team-member1'),
            image: Teammamber1,
        },
        {
            name: t('Team-member1'),
            image: Teammamber1,
        },
        {
            name: t('Team-member1'),
            image: Teammamber1,
        },
        {
            name: t('Team-member1'),
            image: Teammamber1,
        },
        {
            name: t('Team-member1'),
            image: Teammamber1,
        },
        {
            name: t('Team-member1'),
            image: Teammamber1,
        },
    ];
    
     const missionData = [
        {
            title: t('mission-title'),
            content: t('mission-content'),
        },
        {
            title: t('vision-title'),
            content: t('vision-content'),
        },
        {
            title: t('values-title'),
            content: t('values-content'),
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 5 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };
    return (
        <>
            <section className='bg-[#FBEAEB] py-[50px] md:py-[100px]'>
                <div className="container">
                    <div className="row">
                        <div className="heading text-center mb-4 md:mb-8">
                            <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>{t('Team-heading1')}</h6>
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>{t('Team-heading2')}</h2>
                            <div className="btn mt-4">
                                <Link
                                    className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-4 lg:px-8 py-2 lg:py-4 inline-block group"
                                    type="button"
                                >
                                    <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                    <span className=" text-[14px] lg:text-[16px] relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                        {t('Team-btn')}
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 group">
                                    <div className="mx-2 my-3 cursor-pointer">
                                        <div className="Image">
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className="content border border-solid border-Primary p-5 text-center bg-white group-hover:bg-Primary group-hover:text-white transition-all duration-200">
                                            <h5 className='text-[14px] md:text-[18px] font-Secondry'>{member.name}</h5>
                                            <span className='text-[#999999] uppercase font-Primary text-[12px] md:text-[14px]'>{member.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-[50px]'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex gap-3 flex-wrap lg:flex-nowrap justify-center">
                            {missionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-6/12 lg:w-4/12 border md:border-none border-solid border-black rounded-md"
                                >
                                    <div className="p-4 text-center lg:text-start">
                                        <h3 className="text-[24px] font-Secondry">{item.title}</h3>
                                        <p className="font-Primary">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-[100px] bg-[#FBEAEB] relative'>
                <div className="container">
                    <div className="row">
                        <div className="heading text-center mb-4 md:mb-8">
                            <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>{t('Team-heading')}</h6>
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>{t('Team-subheading')}</h2>
                            <div className="btn mt-4">
                                <Link
                                    className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-4 lg:px-8 py-2 lg:py-4 inline-block group"
                                    type="button"
                                >
                                    <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                    <span className=" text-[14px] lg:text-[16px] relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                        {t('Team-btn')}
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full px-2">
                            <Slider {...settings}>
                                {teamMembers2.map((member, index) => (
                                    <div key={index} className="px-2">
                                        <div className="p-2">
                                            <div className="image">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className='rounded-3xl w-full h-auto'
                                                />
                                            </div>
                                            <div className="content text-center mt-2">
                                                <Link className='hover:text-Primary transition-all duration-200 font-Secondry text-[18px]'>
                                                    {member.name}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
