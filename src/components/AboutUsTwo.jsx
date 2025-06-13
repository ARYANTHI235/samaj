import React from 'react'
import { Link } from 'react-router-dom';
import team from '../assets/team.jpeg'

const AboutUsTwo = () => {

    return (
        <>
            <section className='py-[50px] bg-[#FBEAEB]'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex flex-wrap justify-between">
                            <div className="w-full lg:w-6/12 text-center lg:text-start">
                                <h5 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>
                                    About Us
                                </h5>
                                <h2 className='font-Secondry text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px]'>
                                    Samast Patidar Samaj Trust
                                </h2>
                                <p className='font-Primary text-[14px] sm:text-[16px]'>
                                    Shrimati Maniben Mohanbhai Kheni Bhawan was constructed by our trust for the economic, social, educational, and professional development of the entire Patidar community.
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

                            <div className="w-full lg:w-5/12 flex flex-wrap justify-center">
                                <div className="image">
                                    <img src={team} alt="team" className='rounded-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <section className='py-[50px]'>
                <div className="container">
                    <div className="row">
                        <div className="w-full flex gap-3 flex-wrap lg:flex-nowrap justify-center">
                            <div className="w-full md:w-6/12 lg:w-4/12 border md:border-none border-solid border-black rounded-md">
                                <div className="p-4 text-center lg:text-start">
                                    <h3 className='text-[24px] font-Secondry'>Our Mission</h3>
                                    <p className='font-Primary'>Our mission is to make the world a better place for everyone. Everyone has their rights equally and we want to make sure that people can get food, education, treatment and accommodation for everyone who is living in poverty.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-4/12 border md:border-none border-solid border-black rounded-md">
                                <div className="p-4 text-center lg:text-start">
                                    <h3 className='text-[24px] font-Secondry'>Our Vision</h3>
                                    <p className='font-Primary'>In 2030 we want to see our organization in that position where we can see that only 10 percent people are living under poverty and in 2040 no people will be living under poverty around the world. </p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-4/12 border md:border-none border-solid border-black rounded-md">
                                <div className="p-4 text-center lg:text-start">
                                    <h3 className='text-[24px] font-Secondry'>Our Mission</h3>
                                    <p className='font-Primary'>Only poor people and the people who are working with us will know the value of us. We do not believe in talk we believe in work. So help the poor make the world valuable for all. Make world a good place for them. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsTwo
