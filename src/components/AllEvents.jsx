import React from 'react'
import { Link } from 'react-router-dom';
import events1 from '../assets/Events1.jpeg'
import events2 from '../assets/Events2.jpg'
import events3 from '../assets/Events3.jpg'
import events4 from '../assets/Events4.jpg'
import events5 from '../assets/Events5.jpg'
import events6 from '../assets/about1.jpg'
import { useTranslation } from 'react-i18next';


const AllEvents = () => {
    const { t } = useTranslation();

    const events = [
        { id: 1, image: events1, title: t('events-title1') },
        { id: 2, image: events2, title: t('events-title2') },
        { id: 3, image: events3, title: t('events-title3') },
        { id: 4, image: events4, title: t('events-title4') },
        { id: 5, image: events5, title: t('events-title5') },
        { id: 6, image: events6, title: t('events-title6') }
    ];

    return (
        <>
            <section className='py-[100px]'>
                <div className="container">
                    <div className="row flex flex-wrap -mx-3">
                        {events.map(event => (
                            <div key={event.id} className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                                <div className='flex flex-col h-full border border-[#0000003a] rounded-2xl hover:shadow-2xl transition-all duration-300'>
                                    <Link className="flex flex-col h-full">
                                        <div className="image">
                                            <img
                                                src={event.image}
                                                alt="events"
                                                className='rounded-t-2xl w-full h-[300px] object-cover'
                                            />
                                        </div>
                                        <div className="content flex flex-col justify-between flex-1 p-5">
                                            <h2 className='font-Secondry text-[24px] mb-4 hover:text-Primary transition-all duration-200'>
                                                {event.title}
                                            </h2>
                                            <div className="btn mt-auto">
                                                <Link
                                                    className="relative overflow-hidden border border-Primary text-Primary font-semibold tracking-wider leading-none rounded-full px-8 py-4 inline-block group"
                                                    type="button"
                                                >
                                                    <span className="absolute inset-0 bg-Primary transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                                    <span className="relative z-10 text-Primary group-hover:text-white transition-colors duration-300 ease-in-out">
                                                        {t('about-btn')}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default AllEvents
