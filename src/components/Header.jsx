import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { BiLogoFacebook } from "react-icons/bi";
import { SiYoutube } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoSearch, IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";



const Header = () => {
    const [language, setLanguage] = useState("en");
    const [submenuOpen, setSubmenuOpen] = useState({});
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const addGoogleTranslate = () => {
            if (!document.getElementById("google-translate-script")) {
                const script = document.createElement("script");
                script.id = "google-translate-script";
                script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                document.body.appendChild(script);

                window.googleTranslateElementInit = () => {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",
                            includedLanguages: "en,gu",
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
                        },
                        "google_translate_element"
                    );
                };
            }
        };

        addGoogleTranslate();
    }, []);


     const menuItems = [
        {
            label: t('executive-committee'),
            subItems: [
                { label: t('chairperson'), link: '/' },
                { label: t('vice-chairperson'), link: '/' },
                { label: t('treasurer'), link: '/' }
            ]
        },
        {
            label: t('about'),
            link: '/aboutus'
        },
        {
            label: t('our-facilities'),
            subItems: [
                { label: t('library'), link: '/' },
                { label: t('sports-complex'), link: '/' }
            ]
        },
        {
            label: t('more'),
            subItems: [
                { label: t('events'), link: '/' },
                { label: t('news'), link: '/' }
            ]
        },
        {
            label: <LanguageSwitcher />,
        }
    ];


   useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) setLanguage(storedLang);
  }, []);

 const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };

  const toggleSubmenu = (label) => {
    setSubmenuOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (path) => {
  return location.pathname === path;
};


    return (
        <>
            <section>
                <div className="header_top bg-Primary py-4">
                    <div className="container">
                        <div className="row">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className='text-white xs:text-[14px] sm:text-[16px]'>{t('follow-us')}</span>
                                    <ul className='flex items-center gap-3 ms-3'>
                                        {[BiLogoFacebook, SiYoutube, RiInstagramFill].map((Icon, idx) => (
                                            <li key={idx}>
                                                <Link>
                                                    <Icon className='text-white' />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-center gap-4">

                                    <button
                                        className='border-r border-r-white pe-4'
                                        onClick={() => setIsSearchOpen(true)}
                                    >
                                        <IoSearch className='text-white text-[16px] sm:text-[18px]' />
                                    </button>

                                    <Link className='text-white border-r border-r-white pe-4 hidden lg:block'>
                                        {t('phone-no')}
                                    </Link>
                                    <Link className='text-white border-r border-r-white pe-4 hidden lg:block'>
                                        {t('email')}
                                    </Link>
                                    <Link className='text-white border-r border-r-white pe-4 lg:hidden'>
                                        <FaPhoneAlt />
                                    </Link>
                                    <Link className='text-white border-r border-r-white pe-4 lg:hidden'>
                                        <IoMail />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`fixed inset-0 z-[999] bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <div
                        className={`bg-white w-[90%] sm:w-[80%] p-6 rounded-lg shadow-2xl relative transform transition-transform duration-500 ${isSearchOpen ? 'translate-y-0' : '-translate-y-20'
                            }`}
                    >
                        <button
                            className="absolute top-2 right-2 text-black text-lg"
                            onClick={() => setIsSearchOpen(false)}
                        >
                            ✕
                        </button>
                        <h2 className='text-center text-xl font-semibold mb-4'>Search</h2>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
                        />
                    </div>
                </div>


                <div className="header py-4">
                    <div className="container">
                        <div className="row">
                            <div className="w-full flex items-center justify-between">
                                <div className="header_image">
                                    <Link to="/">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="header_navlink hidden lg:block relative z-20">
                                    <ul className="flex items-center justify-center gap-3 lg:gap-6 xl:gap-8 font-Primary">
                                        {menuItems.map((item, idx) => (
                                            <li key={idx} className="relative group transition-all duration-300">
                                                {item.subItems ? (
                                                    <>
                                                        <Link className="flex items-center gap-1">
                                                            {item.label}
                                                            <FaAngleDown />
                                                        </Link>
                                                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 scale-y-0 origin-top transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100">
                                                            {item.subItems.map((sub, subIdx) => (
                                                                <li key={subIdx} className="px-4 py-2 hover:bg-gray-100">
                                                                    {sub.label === "English" || sub.label === "Gujarati" ? (
                                                                        <button
                                                                            onClick={() => handleLanguageChange(sub.label === "English" ? "en" : "gu")}
                                                                            className="w-full text-left"
                                                                        >
                                                                            {sub.label}
                                                                        </button>
                                                                    ) : (
                                                                        <Link to={sub.link}>{sub.label}</Link>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                ) : (
                                                    <Link to={item.link}>{item.label}</Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <Link className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-8 py-4 hidden lg:inline-block group"
                                        type="button"
                                    >
                                        <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                        <span
                                            className="relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                            {t('login-reg')}
                                        </span>
                                    </Link>
                                </div>

                                <div className="hamburger-menu flex items-center gap-[10px] lg:hidden">
                                    <Link
                                        className="text-[20px] border border-black p-2 rounded-md"
                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    >
                                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                                    </Link>
                                </div>
                            </div>

                            {mobileMenuOpen && (
                                <div className="w-full lg:hidden mt-2 bg-white shadow-lg rounded-md px-4 py-4" role="menu" aria-label="Mobile Navigation Menu">
                                    <ul className="flex flex-col gap-3">
                                        {menuItems.map((item, idx) => (
                                            <li key={idx}>
                                                {item.subItems ? (
                                                    <>
                                                        <button
                                                            onClick={() => toggleSubmenu(item.label)}
                                                            className="w-full flex items-center justify-between py-2 border-b border-gray-200 focus:outline-none"
                                                        >
                                                            <span className={`${isActive(item.link) ? 'text-primary font-semibold' : ''}`}>
                                                                {item.label}
                                                            </span>
                                                            <FaAngleDown
                                                                className={`transform transition-transform ${submenuOpen[item.label] ? 'rotate-180' : ''}`}
                                                            />
                                                        </button>
                                                        {submenuOpen[item.label] && (
                                                            <ul className="pl-4 mt-2">
                                                                {item.subItems.map((sub, subIdx) => (
                                                                    <li key={subIdx}>
                                                                        {sub.label === "English" || sub.label === "Gujarati" ? (
                                                                            <button
                                                                                onClick={() => handleLanguageChange(sub.label === "English" ? "en" : "gu")}
                                                                                className="w-full text-left py-2 border-b border-gray-200"
                                                                            >
                                                                                {sub.label}
                                                                            </button>
                                                                        ) : (
                                                                            <Link
                                                                                to={sub.link}
                                                                                className={`block py-2 border-b border-gray-200 ${isActive(sub.link) ? "text-primary font-semibold" : ""
                                                                                    }`}
                                                                            >
                                                                                {sub.label}
                                                                            </Link>
                                                                        )}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        to={item.link}
                                                        className={`block py-2 border-b border-gray-200 ${isActive(item.link) ? 'text-primary font-semibold' : ''}`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                        <li className="flex justify-center">
                                            <Link
                                                to="/login"
                                                className="bg-Primary text-white py-2 px-4 rounded-full text-[14px] text-center block mt-2 w-5/12 sm:w-3/12"
                                            >
                                                Login / Reg.
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Header;
