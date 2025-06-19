import React from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next';

const convertGujaratiDigitsToEnglish = (input) => {
    if (typeof input !== "string") return input;
    const gujaratiDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
    return input.replace(/[૦-૯]/g, d => gujaratiDigits.indexOf(d));
};

const Count = () => {
    const { t } = useTranslation();

    const data = [
        { number: parseFloat(convertGujaratiDigitsToEnglish(t('number1'))) || 0, label: t('label1') },
        { number: parseFloat(convertGujaratiDigitsToEnglish(t('number2'))) || 0, label: t('label2') },
        { number: parseFloat(convertGujaratiDigitsToEnglish(t('number3'))) || 0, label: t('label3') },
        { number: parseFloat(convertGujaratiDigitsToEnglish(t('number4'))) || 0, label: t('label4') },
        { number: parseFloat(convertGujaratiDigitsToEnglish(t('number5'))) || 0, label: t('label5') },
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
