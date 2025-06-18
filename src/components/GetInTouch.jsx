import React from 'react'
import { useTranslation } from 'react-i18next';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";



const GetInTouch = () => {
    const { t } = useTranslation();

    const contactData = [
    {
        icon: <IoLocationOutline />,
        title: t('ourlocation'),
        text: t('location-adrees'),
    },
    {
        icon: <LuPhone />,
        title: t('phonenumber'),
        text: t('phone-number'),
    },
    {
        icon: <MdOutlineMailOutline />,
        title: "emailaddress",
        text: "jayvaghela2422@gmail.com",
    }
];
    return (
        <>
            <section className='py-[50px] md:py-[100px] relative'>
                <div className="container">
                    <div className="row">
                        <div className="heading text-center mb-4 md:mb-8">
                            <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>{t('getinToch-subheading')}</h6>
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>{t('getinToch-heading')}</h2>
                        </div>
                        <div className="w-full flex flex-wrap justify-center">
                            {contactData.map((item, index) => (
                                <div key={index} className="w-full md:w-6/12 lg:w-4/12 px-3 mb-4">
                                    <div className='bg-getintouch bg-cover bg-center bg-no-repeat bg-blend-darken rounded-xl bg-[#00000091] p-4 text-white h-full flex flex-col justify-center items-center'>
                                        <div className="content flex flex-col gap-2 items-center text-center my-20">
                                            <div className="text-[28px]">{item.icon}</div>
                                            <h3 className='font-Secondry text-[24px]'>{item.title}</h3>
                                            <a href="#" className='text-[16px] font-Primary'>
                                                {item.text}
                                            </a>
                                        </div>
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

export default GetInTouch
