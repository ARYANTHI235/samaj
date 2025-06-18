import React from 'react'
import { useTranslation } from 'react-i18next';

const ContactAccodian = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className='relative py-[150px] h-[10%] bg-banner3 bg-cover bg-bottom bg-no-repeat bg-blend-darken bg-[#00000091] before:absolute before:top-[370px] before:left-0 before:w-full before:h-[10%] before:bg-cuverImage before:bg-contain before:bg-no-repeat before:bg-blend-darken '>
                <div className="container">
                    <div className="row">
                        <div className="content text-center">
                            <h2 className='text-[60px] font-Secondry text-white'>{t('contact-mainheading')}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactAccodian
