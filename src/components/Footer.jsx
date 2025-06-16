import React from 'react'
import logo from "../assets/Logo.png"
import { Link } from 'react-router-dom'
import { BiLogoFacebook } from "react-icons/bi";
import { SiYoutube } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <footer className='py-[50px] lg:py-[100px] bg-[#FBEAEB]'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-0">
                            <div className="w-full md:w-6/12 lg:w-5/12">
                                <div className='text-center lg:text-start'>
                                    <div className="image mb-4 flex justify-center lg:justify-start">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className='font-Primary'>{t('Footer-paragraf')}</p>
                                        <ul className='flex justify-center lg:justify-start gap-3 mt-8'>
                                            <li>
                                                <a href='#'><BiLogoFacebook className=' bg-[#40455471] hover:bg-Primary transition-all duration-200 text-white w-10 h-10 p-3 rounded-full' /></a>
                                            </li>
                                            <li>
                                                <a href='#'><SiYoutube className=' bg-[#40455471] hover:bg-Primary transition-all duration-200 text-white w-10 h-10 p-3 rounded-full' /></a>
                                            </li>
                                            <li>
                                                <a href='#'><RiInstagramFill className=' bg-[#40455471] hover:bg-Primary transition-all duration-200 text-white w-10 h-10 p-3 rounded-full' /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12">
                                <div className='text-center lg:text-start'>
                                    <h1 className='text-[24px] font-Secondry mb-5'>{t('Footer-heading')}</h1>
                                    <ul className='flex flex-col gap-2 font-Primary'>
                                        <li>
                                            <a href="#" className='hover:text-Primary'>{t('Footer-encer1')}</a>
                                        </li>
                                         <li>
                                            <a href="#" className='hover:text-Primary'>{t('Footer-encer2')}</a>
                                        </li>
                                         <li>
                                            <a href="#" className='hover:text-Primary'>{t('Footer-encer3')}</a>
                                        </li>
                                         <li>
                                            <a href="#" className='hover:text-Primary'>{t('Footer-encer4')}</a>
                                        </li>
                                         <li>
                                            <a href="#" className='hover:text-Primary'>{t('Footer-encer5')}</a>
                                        </li>
                                         <li>
                                            <a href="#" className='hover:text-Primary'>{t('Footer-encer6')}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-4/12 md:mt-4">
                                <div className='text-center lg:text-start'>
                                    <h1 className='text-[24px] font-Secondry mb-5'>{t('Footer-heading2')}</h1>
                                    <ul className='flex flex-col gap-3 font-Primary'>
                                        <li>
                                            <p>{t('Footer-adrees')}</p>
                                        </li>
                                        <li>
                                            <a href="#" className='hover:text-Primary'>{t('phone-no')}</a>
                                        </li>
                                        <li>
                                            <a href="#" className='hover:text-Primary'>jayvaghela2422@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className='bg-[#FBEAEB] py-5'>
                <div className="container">
                    <div className="row">
                        <div className="w-full block lg:flex justify-between text-center ">
                            <div className='mb-4 lg:mb-0'>
                                <span className='font-Primary  text-[14px] xl:text-[16px]'>{t('copyright-description')} <a href="#" className='text-Primary'>{t('copyright-name1')}</a></span>
                            </div>
                            <div>
                                <ul className='flex gap-3 justify-center lg:justify-start'>
                                    <li className='border-r border-r-Primary pe-3'>
                                        <a href="#" className='font-Primary text-Primary text-[14px] xl:text-[16px]'>{t('copyright-name2')}</a>
                                    </li>
                                    <li>
                                        <a href="#" className='font-Primary text-Primary text-[14px] xl:text-[16px]'>{t('copyright-name3')}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
