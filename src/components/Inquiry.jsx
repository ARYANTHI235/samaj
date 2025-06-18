import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Inquiry = () => {
    const { t } = useTranslation();

     const formFields = [
        {
            type: 'input',
            placeholder: t('form-placeholder1'),
            className: 'w-full md:w-6/12',
        },
        {
            type: 'input',
            placeholder: t('form-placeholder2'),
            className: 'w-full md:w-6/12',
        },
        {
            type: 'textarea',
            placeholder: t('form-placeholder3'),
            className: 'w-full',
            rows: 6,
        },
    ];


    return (
        <>
            <section>
                <div className="row">
                    <div className="w-full flex flex-wrap">
                        <div className="w-full lg:w-6/12 bg-[#8b8b8b21]">
                            <div className="py-[50px] px-10">
                                <div className="heading text-center mb-4 md:mb-8">
                                    <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>{t('inquiry-subheading')}</h6>
                                    <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>{t('inquiry-heading')}</h2>
                                </div>
                               <form>
                                <div className="flex flex-wrap w-full">
                                    {formFields.map((field, index) => (
                                        <div className={field.className} key={index}>
                                            <div className="m-3">
                                                {field.type === 'input' ? (
                                                    <input
                                                        type="text"
                                                        placeholder={field.placeholder}
                                                        className="p-4 w-full rounded-md border placeholder:text-black focus:outline-none"
                                                    />
                                                ) : (
                                                    <textarea
                                                        rows={field.rows}
                                                        placeholder={field.placeholder}
                                                        className="p-4 w-full rounded-md border placeholder:text-black focus:outline-none"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="btn mt-4 flex justify-center">
                                    <Link
                                        className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-4 lg:px-8 py-2 lg:py-4 inline-block group"
                                        type="button"
                                    >
                                        <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                        <span className=" text-[14px] lg:text-[16px] relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                            {t('inquiry-btn')}
                                        </span>
                                    </Link>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4614.570629723582!2d72.86927507600234!3d21.240865980458295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3911e45f05%3A0x223a3e62d8fa750e!2sThe%20Hidden%20Ideas!5e1!3m2!1sen!2sin!4v1750245481746!5m2!1sen!2sin" className='w-full h-full' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Inquiry
