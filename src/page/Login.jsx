import React, {useState} from 'react'
import login from '../assets/login.png'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { t } from 'i18next';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <section className='py-[50px] md:py-[100px] bg-[#f8f8fb]'>
                <div className="container">
                    <div className="row">
                        <div className="flex flex-col gap-8 justify-center items-center">
                            <div className='w-full md:w-8/12 xl:w-6/12  rounded-md'>
                                <div className='heading w-full flex justify-between bg-Primary p-4 sm:p-8 text-white rounded-t-md'>
                                    <div className="w-full lg:w-6/12 text-center lg:text-left">
                                        <h2 className='text-[20px] sm:text-[24px] font-Secondry mb-2'>{t('login-heading')}</h2>
                                        <span className='text-[12px] sm:text-[14px] font-Primary'>{t('login-subheading')}</span>
                                    </div>
                                    <div className="w-6/12  justify-end hidden lg:flex">
                                        <img src={login} alt="Login" className='w-[230px] h-[150px]' />
                                    </div>
                                </div>
                                <div className="p-5 bg-white rounded-b-md">
                                    <form>
                                        <div className="w-full">
                                            <div className="input-field mb-5">
                                                <label className='text-[13px] font-Primary'>{t('login-email')}</label>
                                                <br />
                                                <input
                                                    type="email"
                                                    placeholder='Email id'
                                                    className='p-2 border w-full mt-3 rounded-[6px] placeholder:font-Primary placeholder:text-[14px] focus:outline-none'
                                                />
                                            </div>

                                            <div className="input-field mb-5 relative">
                                                <label className='text-[13px] font-Primary'>{t('login-password')}</label>
                                                <br />
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder='Password'
                                                    className='p-2 border w-full mt-3 rounded-[6px] placeholder:font-Primary placeholder:text-[14px] focus:outline-none pr-12'
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-0 top-[36px] text-[13px] bg-blue-500 py-[14px] px-3 rounded-r-[6px] text-white font-medium focus:outline-none"
                                                >
                                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                                </button>
                                            </div>

                                            <div className="btn mb-3 pb-6 border-b-2 border-solid border-[#807e7e86]">
                                                <button
                                                    type='submit'
                                                    className='bg-Primary hover:bg-[#990012e7] transition-all duration-300 text-[14px] text-white px-5 py-2 rounded-[6px] font-Primary w-full'
                                                >
                                                    {t('login-submit')}
                                                </button>
                                            </div>

                                            <div className="create-btn flex justify-center mb-4">
                                                <button
                                                    type='button'
                                                    className='py-2 px-3 bg-[#34C38F] hover:bg-[#2CA67A] transition-all duration-300 rounded-[6px] border-none text-[13px] text-white font-Primary'
                                                >
                                                    {t('create-account')}
                                                </button>
                                            </div>

                                            <div className="create-btn flex justify-center">
                                                <button
                                                    type='button'
                                                    className='py-2 px-3 bg-[#50A5F1] hover:bg-[#448CCD] transition-all duration-300 rounded-[6px] border-none text-[13px] text-white font-Primary'
                                                >
                                                    {t('forgot-password')}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-center">
                                <span className='text-[14px]'> {t('copy-right')} <a href="#" className='text-Primary hover:text-[#990012e7] transition-all duration-300'>{t('riofos')}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
