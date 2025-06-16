import React from 'react'
import TeamMamber from '../assets/team.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

const Member = () => {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: t('Team-name1'),
            role: "President",
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        },
        {
            name: t('Team-name1'),
            role: t('Team-role1'),
            image: TeamMamber
        }
    ];


    return (
        <>
            <section className='py-[100px] relative'>
                <div className="container">
                    <div className="row">
                        <div className="heading text-center mb-4 md:mb-8">
                            <h6 className='font-Primary text-[16px] sm:text-[20px] xl:text-[22px] font-semibold italic text-Primary'>{t('Team-heading')}</h6>
                            <h2 className='text-[22px] sm:text-[36px] lg:text-[50px] xl:text-[60px] font-Secondry'>{t('Team-heading3')}</h2>

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
        </>
    )
}

export default Member
