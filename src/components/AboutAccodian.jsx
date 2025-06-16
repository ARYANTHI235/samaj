import React from 'react'
import { useTranslation } from 'react-i18next'; 

const AboutAccodian = () => {
  const { t } = useTranslation();
  return (
    <>
        <section className='relative py-[150px] bg-banner2 bg-cover bg-bottom bg-no-repeat bg-blend-darken bg-[#00000091] before:absolute before:top-[370px] before:left-0 before:w-full before:h-full before:bg-cuverImage before:bg-contain before:bg-no-repeat before:bg-blend-darken '>
            <div className="container">
                <div className="row">
                      <div className="content text-center">
                        <h2 className='text-[60px] font-Secondry text-white'>{t('aboutus-mainheading')}</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutAccodian
