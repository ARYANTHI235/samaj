import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { CiDollar } from 'react-icons/ci';
import { PiHandHeartLight } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
     const { t } = useTranslation();

   const boxes = [
              { icon: <FaRegUser className='text-[30px]' />, title: t('about-title1') },
              { icon: <PiHandHeartLight className='text-[30px]' />, title: t('about-title2') },
              { icon: <CiDollar className='text-[30px]' />, title: t('about-title3') },
              { icon: <FaRegHeart className='text-[30px]' />, title: t('about-title4') }
          ];

    return (
        <>
            <section className='py-[50px] bg-[#FBEAEB]'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex flex-wrap justify-between">
                            <div className="w-full lg:w-6/12 text-center lg:text-start">
                                <h5 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>
                                    {t('about-us')}
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

                            <div className="w-full lg:w-5/12 flex flex-wrap">
                                {boxes.map((box, index) => (
                                    <div key={index} className="w-full md:w-6/12">
                                        <div className="bg-white py-10 px-6 xl:px-8 rounded-xl text-center mx-3 my-3">
                                            <div className="flex justify-center mb-4">
                                                {box.icon}
                                            </div>
                                            <h6 className='font-Secondry'>{box.title}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;

