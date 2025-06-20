import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { BiLogoFacebook } from "react-icons/bi";
import { SiYoutube } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoSearch, IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [language, setLanguage] = useState("en");
    const [submenuOpen, setSubmenuOpen] = useState({});
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
        setLanguage(lng);
    };

    useEffect(() => {
        const storedLang = localStorage.getItem("language");
        if (storedLang) {
            setLanguage(storedLang);
            i18n.changeLanguage(storedLang);
        }
    }, []);

     useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSubmenu = (label) => {
        setSubmenuOpen((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const menuItems = [
        {
            label: t('executive-committee'),
            subItems: [
                { label: t('officers'), link: '/officers-of-the-executive-committee' },
                { label: t('members'), link: '/members-of-the-executive-committee' },
                { label: t('trustees'), link: '/trustees' }
            ]
        },
        {
            label: t('about'),
            link: '/aboutus'
        },
        {
            label: t('our-facilities'),
            subItems: [
                { label: t('government'), link: '/government-scheme-guidance-centre' },
                { label: t('skill'), link: '/skill-development-centre' },
                { label: t('reading'), link: '/reading-room' },
                { label: t('upsc/gpsc'), link: '/upsc-gpsc-training-centre' },
                { label: t('education'), link: '/education-fund' },
                { label: t('occasional'), link: '/occasional-building-facilities' },
            ]
        },
        {
            label: t('more'),
            submenuItems: [
                {
                    label: t("events"),
                    link: "/events",
                    subItems: [
                        { label: t("past-events"), link: "/events/past-events" },
                    ],
                },
                { label: t('news&articles'), link: '/news-articles' },
                { label: t('gallery'), link: '/gallery' },
                { label: t('contactus'), link: '/contactus' },
            ]
        },
        {
            label: t('language1'),
            subItems: [
                { label: t('language1'), action: () => changeLanguage('en') },
                { label: t('language2'), action: () => changeLanguage('gu') }
            ]
        }
    ];

    return (
        <>
            <section>
                <div className="row">
                    <div className="header_top bg-Primary py-4 w-full">
                        <div className="container">
                            <div className="row">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className='text-white xs:text-[14px] sm:text-[16px]'>{t('follow-us')}</span>
                                        <ul className='flex items-center gap-3 ms-3'>
                                            {[BiLogoFacebook, SiYoutube, RiInstagramFill].map((Icon, idx) => (
                                                <li key={idx}>
                                                    <Link><Icon className='text-white' /></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => setIsSearchOpen(true)} className='border-r border-r-white pe-4'>
                                            <IoSearch className='text-white text-[16px] sm:text-[18px]' />
                                        </button>
                                        <Link className='text-white border-r border-r-white pe-4 hidden lg:block'>{t('phone-no')}</Link>
                                        <Link className='text-white border-r border-r-white pe-4 hidden lg:block'>{t('email')}</Link>
                                        <Link className='text-white border-r border-r-white pe-4 lg:hidden'><FaPhoneAlt /></Link>
                                        <Link className='text-white border-r border-r-white pe-4 lg:hidden'><IoMail /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`fixed inset-0 z-[999] bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <div className={`bg-white w-[90%] sm:w-[80%] p-6 rounded-lg shadow-2xl relative transform transition-transform duration-500 ${isSearchOpen ? 'translate-y-0' : '-translate-y-20'}`}>
                            <button onClick={() => setIsSearchOpen(false)} className="absolute top-2 right-2 text-black text-lg">✕</button>
                            <h2 className='text-center text-xl font-semibold mb-4'>{t('Search')}</h2>
                            <input type="text" placeholder={t('placeholder-Search')} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none" />
                        </div>
                    </div>
                </div>
            </section>

            <header className={`transition-all duration-300 ${isScrolled ? 'sticky top-0 z-[999] bg-white shadow-lg' : ''}`}>
                <div className="h-[80px] flex items-center">
                    <div className="container">
                        <div className="w-full flex items-center justify-between">
                            <div className="header_image">
                                <Link to="/"><img src={logo} alt="logo" className="h-12" /></Link>
                            </div>

                            <div className="header_navlink hidden lg:block relative z-50">
                                <ul className="flex items-center gap-6 font-Primary">
                                    {menuItems.map((item, idx) => (
                                        <li key={idx} className="relative group">
                                            {(item.subItems || item.submenuItems) ? (
                                                <div className="relative group">
                                                    <span className="flex items-center gap-1 cursor-pointer ">{item.label}<FaAngleDown /></span>
                                                    <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg opacity-0 scale-y-0 origin-top transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100 z-50">
                                                        {item.subItems && item.subItems.map((sub, subIdx) => (
                                                            <li key={subIdx} className="px-4 py-2 hover:bg-gray-100">
                                                                {sub.action ? (
                                                                    <button onClick={sub.action} className="w-full text-left">{sub.label}</button>
                                                                ) : (
                                                                    <Link to={sub.link}>{sub.label}</Link>
                                                                )}
                                                            </li>
                                                        ))}
                                                        {item.submenuItems && item.submenuItems.map((submenu, subIdx) => (
                                                            <li key={subIdx} className="relative group/submenu px-4 py-2 hover:bg-gray-100">
                                                                {submenu.subItems ? (
                                                                    <>
                                                                        <div className="flex items-center justify-between cursor-pointer">
                                                                            <Link to={submenu.link} className="flex-1">{submenu.label}</Link>
                                                                            <FaAngleDown className="ml-2" />
                                                                        </div>
                                                                        <ul className="absolute left-full top-0 mt-0 ml-1 w-56 bg-white shadow-lg opacity-0 scale-y-0 origin-top-left transform transition-all duration-300 group-hover/submenu:opacity-100 group-hover/submenu:scale-y-100 z-50">
                                                                            {submenu.subItems.map((deepSub, deepIdx) => (
                                                                                <li key={deepIdx} className="px-4 py-2 hover:bg-gray-100">
                                                                                    <Link to={deepSub.link}>{deepSub.label}</Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </>
                                                                ) : (
                                                                    <Link to={submenu.link}>{submenu.label}</Link>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <Link to={item.link}>{item.label}</Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/login" className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-8 py-4 hidden lg:inline-block group">
                                <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">{t("login-reg")}</span>
                            </Link>

                            <div className="hamburger-menu flex items-center gap-2 lg:hidden">
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-xl border border-black p-2 rounded-md">
                                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>
                            </div>
                        </div>

                        {mobileMenuOpen && (
                            <div className="w-full lg:hidden mt-2 bg-white shadow-lg rounded-md px-4 py-4">
                                <ul className="flex flex-col gap-3">
                                    {menuItems.map((item, idx) => (
                                        <li key={idx}>
                                            {item.subItems ? (
                                                <>
                                                    <button onClick={() => toggleSubmenu(item.label)} className="w-full flex items-center justify-between py-2 border-b border-gray-200">
                                                        <span>{item.label}</span>
                                                        <FaAngleDown className={`transition-transform ${submenuOpen[item.label] ? 'rotate-180' : ''}`} />
                                                    </button>
                                                    {submenuOpen[item.label] && (
                                                        <ul className="pl-4 mt-2">
                                                            {item.subItems.map((sub, subIdx) => (
                                                                <li key={subIdx}>
                                                                    {sub.action ? (
                                                                        <button onClick={sub.action} className="block py-2 w-full text-left border-b border-gray-200">{sub.label}</button>
                                                                    ) : (
                                                                        <Link to={sub.link} className="block py-2 border-b border-gray-200">{sub.label}</Link>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : (
                                                <Link to={item.link} className="block py-2 border-b border-gray-200">{item.label}</Link>
                                            )}
                                        </li>
                                    ))}
                                    <li className="flex justify-center">
                                        <Link to="/" className="bg-Primary text-white py-2 px-4 rounded-full text-sm mt-2">
                                            {t("login-reg")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
