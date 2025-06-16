import React from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'; 

const Count = () => {
    const { t } = useTranslation();

    const data = [
        { number: t('number1'), label: t('label1') },
        { number: t('number2'), label: t('label2') },
        { number: t('number3'), label: t('label3') },
        { number: t('number4'), label: t('label4') },
        { number: t('number5'), label: t('label5') },
    ];

    return (
        <>
            <section className=' bg-[#FBEAEB] py-[50px] '>
                <div className="w-full flex flex-wrap lg:flex-nowrap justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12">
                            <div className="py-3 px-3 text-center border-b lg:border-b-0 border-b-black lg:border-r border-r-black ">
                                <h2 className='text-[50px] xl:text-[60px] 2xl:text-[80px] font-Secondry'>
                                    <CountUp end={item.number} duration={2.5} separator="," />
                                </h2>
                                <span className='font-Primary block text-[14px] lg:text-sm md:text-base'>{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Count
