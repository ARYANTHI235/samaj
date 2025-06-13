import React from 'react'
import CountUp from 'react-countup'

const Count = () => {

    const data = [
        { number: 11960, label: "Total Event" },
        { number: 1265, label: "Education Fund" },
        { number: 29502, label: "Government Guidance Centre" },
        { number: 1230, label: "UPSC / GPSC" },
        { number: 6460, label: "Occasional Building Facilities" },
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
