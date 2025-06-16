import React from 'react'
import { Link } from 'react-router-dom';
import team from '../assets/team.jpeg'
import { useTranslation } from 'react-i18next'; 

const AboutUsTwo = () => {
    const { t } = useTranslation();

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

    return (
        <>
            <section className='py-[50px] bg-[#FBEAEB]'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex flex-wrap justify-between">
                            <div className="w-full lg:w-6/12 text-center lg:text-start">
                                <h5 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>
                                    {t('aboutus-mainheading')}
                                </h5>
                                <h2 className='font-Secondry text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px]'>
                                    {t('banner-heading1')}
                                </h2>
                                <p className='font-Primary text-[14px] sm:text-[16px]'>
                                    {t('about-parafgraf')}
                                </p>
                                <div className="btn mt-4">
                                    <Link
                                        className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-8 py-4 hidden lg:inline-block group"
                                        type="button"
                                    >
                                        <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                        <span className="relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                           {t('about-btn')}
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full lg:w-5/12 flex flex-wrap justify-center">
                                <div className="image">
                                    <img src={team} alt="team" className='rounded-3xl' />
                                </div>
                            </div>
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
        </>
    )
}

export default AboutUsTwo
