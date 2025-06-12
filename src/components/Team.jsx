import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import TeamMamber from '../assets/team.jpeg'
import Teammamber1 from '../assets/team1.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
    const teamMembers = [
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        },
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        },
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        },
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        },
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        },
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        },
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        },
        {
            name: "Mr. Veljibhai M. Sheta",
            role: "President",
            image: TeamMamber
        }
    ];

    const teamMembers2 = [
        {
            name: 'Padmashri Mathurbhai M. Savani',
            image: Teammamber1,
        },
        {
            name: 'Padmashri Mathurbhai M. Savani',
            image: Teammamber1,
        },
        {
            name: 'Padmashri Mathurbhai M. Savani',
            image: Teammamber1,
        },
        {
            name: 'Padmashri Mathurbhai M. Savani',
            image: Teammamber1,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <section className='bg-[#1173b942] py-[50px] md:py-[100px]'>
                <div className="container">
                    <div className="row">
                        <div className="heading text-center mb-4 md:mb-8">
                            <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>Our Facilities</h6>
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>Our Popular Facility</h2>
                            <div className="btn mt-4">
                                <Link
                                    className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-4 lg:px-8 py-2 lg:py-4 inline-block group"
                                    type="button"
                                >
                                    <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                    <span className=" text-[14px] lg:text-[16px] relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                        Know More
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 group">
                                    <div className="mx-2 my-3 cursor-pointer">
                                        <div className="Image">
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className="content p-5 text-center bg-white group-hover:bg-Primary group-hover:text-white transition-all duration-200">
                                            <h5 className='text-[14px] md:text-[18px] font-Secondry'>{member.name}</h5>
                                            <span className='text-[#999999] uppercase font-Primary text-[12px] md:text-[14px]'>{member.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
            <section className='py-[50px] md:py-[100px]'>
                <div className="container">
                    <div className="row">
                        <div className="heading text-center mb-4 md:mb-8">
                            <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>Our Team</h6>
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>Members of the Executive Committee</h2>
                            <div className="btn mt-4">
                                <Link
                                    className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-4 lg:px-8 py-2 lg:py-4 inline-block group"
                                    type="button"
                                >
                                    <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                    <span className=" text-[14px] lg:text-[16px] relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                        Know More
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="w-full flex flex-wrap">
                            {teamMembers2.map((member, index) => (
                                <div key={index} className="w-2/12">
                                    <div className="p-4">
                                        <div className="image">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className='rounded-3xl'
                                            />
                                        </div>
                                        <div className="content text-center mt-2">
                                            <Link className='hover:text-Primary transition-all duration-200 font-Secondry text-[18px]'>
                                                {member.name}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        <Slider {...settings}>
                            <div className="w-full flex">
                                {teamMembers2.map((member, index) => (
                                    <div key={index} className="px-2">
                                        <div className="p-4">
                                            <div className="image">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className='rounded-3xl w-full'
                                                />
                                            </div>
                                            <div className="content text-center mt-2">
                                                <Link className='hover:text-Primary transition-all duration-200 font-Secondry text-[18px]'>
                                                    {member.name}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
