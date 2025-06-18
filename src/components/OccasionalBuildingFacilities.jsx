import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import occasion1 from '../assets/occasion1.jpg'
import occasion2 from '../assets/occasion2.jpg'
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

const OccasionalBuildingFacilities = () => {

      const { t } = useTranslation();
    
        const slides = [
            {
                id: 1,
                image: occasion1,
                title: t('slide-title6')
            },
            {
                id: 1,
                image: occasion2,
                title: t('slide-title6')
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
                                 <ul className='list-disc list-inside mb-5'>
                                    <li className='py-1'>
                                        {t('occasion1')} 
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion2')} 
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion3')} 
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion4')}
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion5')}
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion6')}
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion7')}
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion8')}
                                    </li>
                                </ul>
                                <h4 className='font-Secondry text-[16px] md:text-[20px] xl:text-[24px] mb-2'>{t('occasion-title')}</h4>
                                  <ul className='list-disc list-inside mb-5'>
                                    <li className='py-1'>
                                        {t('occasion9')} 
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion10')} 
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion11')} 
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion12')}
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion13')}
                                    </li>
                                    <li className='py-1'>
                                        {t('occasion14')}
                                    </li>
                                </ul>
                                <span className='text-[14px] md:text-[16px]'>{t('government-adress')} </span>
                                <p className='mb-2 mt-2 text-[14px] md:text-[16px]'>{t('upsc-gpscName2')} <a href="#" className='text-Primary'>{t('upsc-gpscnumber2')}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default OccasionalBuildingFacilities
