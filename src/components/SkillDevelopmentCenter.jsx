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
            title: t('slide-title1')
        },
        {
            id: 1,
            image: Government2,
            title: t('slide-title1')
        },
    ];

  return (
    <>
           <div className="w-full  mx-auto pb-[100px]">
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
                                <p className='mb-5'>{t('government-paragraf1')}</p>
                                <h3 className='mb-6'>{t('government-heading')}</h3>
                               
                                <span>{t('government-adress')} <a href="#" className='text-Primary'>{t('government-nomber')}</a></span>
                            
                                <div className="w-full mt-8 flex flex-wrap">
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill2} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Basic mehndi course</h3>
                                                <p className='text-[14px]'>Time : 2 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Making Mehndi Con, Pencil</p>
                                                <p className='text-[14px]'>Work, Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="w-2/12">
                                        <div className='my-3'>
                                            <div className='image'>
                                                <img src={skill1} alt="skill" className='w-[200px] h-[200px] object-cover'/>
                                            </div>
                                            <div className="content font-Primary">
                                                <h3 className='text-[25px] my-2'>Advance Mehndi course</h3>
                                                <p className='text-[14px]'>Time : 3 Month, Daily 2 Hours</p>
                                                <p className='text-[14px]'>Theme wise Mehndi, Bridal,</p>
                                                <p className='text-[14px]'>Portrait Shading Mehndi Work</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div className="w-full mt-10 px-4">
                                    <div className="flex flex-wrap -mx-3 justify-center">
                                        <div className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                                            <div className="aspect-video overflow-hidden">
                                                <iframe className="w-full h-full" src="https://www.youtube.com/embed/2QjfpyxwTMI?si=8IVb8po3vKaaDxR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                                            <div className="aspect-video overflow-hidden">
                                                <iframe className="w-full h-full" src="https://www.youtube.com/embed/kpWjfaplPE0?si=gobh7BGqlp1ijWsC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                                            <div className="aspect-video overflow-hidden">
                                               <iframe className="w-full h-full" src="https://www.youtube.com/embed/eHOcSu_mtFg?si=2iiQRvC8HZTfDIp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                                            <div className="aspect-video overflow-hidden">
                                               <iframe className="w-full h-full" src="https://www.youtube.com/embed/eHOcSu_mtFg?si=2iiQRvC8HZTfDIp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                         <div className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                                            <div className="aspect-video overflow-hidden">
                                               <iframe className="w-full h-full" src="https://www.youtube.com/embed/6Td0zvi-mfE?si=VN2yWMoXYQKuv4Sy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                         <div className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                                            <div className="aspect-video overflow-hidden">
                                             <iframe className="w-full h-full" src="https://www.youtube.com/embed/KHYXbmtbCJg?si=OLOKsJt_OqsEAYx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div>
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
