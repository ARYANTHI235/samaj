import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { CiDollar } from 'react-icons/ci';
import { PiHandHeartLight } from 'react-icons/pi';

const WhatWeDo = () => {
     const boxes = [
            { icon: <FaRegUser className='text-[30px]' />, title: 'Social' },
            { icon: <PiHandHeartLight className='text-[30px]' />, title: 'Educational' },
            { icon: <CiDollar className='text-[30px]' />, title: 'Economic' },
            { icon: <FaRegHeart className='text-[30px]' />, title: 'Self-Sufficient' }
        ];

  return (
    <>
           <section className='py-[50px]'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex flex-wrap justify-between">
                            <div className="w-full lg:w-6/12 text-center lg:text-start">
                                <h5 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>
                                    what we do?
                                </h5>
                                <h2 className='font-Secondry text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px]'>
                                    We’re On A Mission To Solve The Problems
                                </h2>
                                <p className='font-Primary text-[14px] sm:text-[16px]'>
                                    Shrimati Maniben Mohanbhai Kheni Bhawan was constructed by our trust for the economic, social, educational and professional development of the entire Patidar community.
                                </p>
                                <div className="btn mt-4">
                                    <Link
                                        className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-8 py-4 hidden lg:inline-block group"
                                        type="button"
                                    >
                                        <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                        <span className="relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                            Read More
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full lg:w-5/12 flex flex-wrap">
                                {boxes.map((box, index) => (
                                    <div key={index} className="w-full md:w-6/12">
                                        <div className="bg-[#FBEAEB] py-16 px-6 xl:px-8 rounded-xl text-center mx-3 my-3">
                                            <div className="flex justify-center mb-4">
                                                {box.icon}
                                            </div>
                                            <h6 className='font-Secondry text-[16px]'>{box.title}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default WhatWeDo
