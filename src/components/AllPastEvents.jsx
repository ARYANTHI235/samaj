import React from 'react'
import { Link } from 'react-router-dom';
import pastEvents1 from '../assets/past-events1.jpg'
import pastEvents2 from '../assets/past-events2.jpg'
import pastEvents3 from '../assets/past-events3.jpg'
import pastEvents4 from '../assets/past-events4.jpg'
import pastEvents5 from '../assets/past-events5.jpeg'
import pastEvents6 from '../assets/past-events6.jpg'
import { useTranslation } from 'react-i18next';

const AllPastEvents = () => {

    const { t } = useTranslation();
    
        const events = [
            { id: 1, image: pastEvents1, title: t('pastEvents-title1') },
            { id: 2, image: pastEvents2, title: t('pastEvents-title2') },
            { id: 3, image: pastEvents3, title: t('pastEvents-title3') },
            { id: 4, image: pastEvents4, title: t('pastEvents-title4') },
            { id: 5, image: pastEvents5, title: t('pastEvents-title5') },
            { id: 6, image: pastEvents6, title: t('pastEvents-title6') }
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

export default AllPastEvents
