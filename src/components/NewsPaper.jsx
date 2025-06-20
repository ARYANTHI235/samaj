// import React from 'react'
// import paper1 from '../assets/News1.jpeg'
// import paper2 from '../assets/News2.jpeg'
// import paper3 from '../assets/News3.jpeg'
// import paper4 from '../assets/News4.jpeg'
// import paper5 from '../assets/News5.jpg'
// import paper6 from '../assets/News6.jpeg'
// import { useTranslation } from 'react-i18next';

// const NewsPaper = () => {
//     const { t } = useTranslation();

//     const papers = [
//         { id: 1, src: paper1, link: '#', title: t('newsPaper-Text1'), },
//         { id: 2, src: paper2, link: '#', title: t('newsPaper-Text2'), },
//         { id: 3, src: paper3, link: '#', title: t('newsPaper-Text3'), },
//         { id: 4, src: paper4, link: '#', title: t('newsPaper-Text4'), },
//         { id: 5, src: paper5, link: '#', title: t('newsPaper-Text5'), },
//         { id: 6, src: paper6, link: '#', title: t('newsPaper-Text6') },
//     ];

//     return (
//         <>
//             <section className="py-[50px] md:py-[100px]">
//                 <div className="container mx-auto px-4">
//                     <div className="flex flex-wrap -mx-3">
//                         {papers.map((paper, index) => (
//                             <div key={index} className="w-full sm:w-6/12 md:w-4/12 px-3 py-4">
//                                 <div className="relative group overflow-hidden rounded-lg  cursor-pointer">
//                                     {paper.link ? (
//                                         <a href={paper.link}>
//                                             <img
//                                                 src={paper.src}
//                                                 alt={`paper-${index + 1}`}
//                                                 className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
//                                             />
//                                         </a>
//                                     ) : (
//                                         <img
//                                             src={paper.src}
//                                             alt={`paper-${index + 1}`}
//                                             className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
//                                         />
//                                     )}

//                                     <div className="absolute bottom-0 left-0 w-full h-full bg-black/70 text-white flex flex-col items-center justify-center text-center px-4 transition-all duration-300 translate-y-full group-hover:translate-y-0">
//                                         <h2 className="text-lg font-bold">{paper.title}</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default NewsPaper


import React, { useState } from 'react';
import paper1 from '../assets/News1.jpeg';
import paper2 from '../assets/News2.jpeg';
import paper3 from '../assets/News3.jpeg';
import paper4 from '../assets/News4.jpeg';
import paper5 from '../assets/News5.jpg';
import paper6 from '../assets/News6.jpeg';
import { useTranslation } from 'react-i18next';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const NewsPaper = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const papers = [
        { id: 1, src: paper1, title: t('newsPaper-Text1') },
        { id: 2, src: paper2, title: t('newsPaper-Text2') },
        { id: 3, src: paper3, title: t('newsPaper-Text3') },
        { id: 4, src: paper4, title: t('newsPaper-Text4') },
        { id: 5, src: paper5, title: t('newsPaper-Text5') },
        { id: 6, src: paper6, title: t('newsPaper-Text6') },
    ];

    const slides = papers.map(paper => ({
        src: paper.src,
        title: paper.title,
    }));

    return (
        <>
            <section className="py-[50px] md:py-[100px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-3">
                        {papers.map((paper, i) => (
                            <div key={i} className="w-full sm:w-6/12 md:w-4/12 px-3 py-4">
                                <div
                                    className="relative group overflow-hidden rounded-lg cursor-pointer"
                                    onClick={() => {
                                        setIndex(i);
                                        setOpen(true);
                                    }}
                                >
                                    <img
                                        src={paper.src}
                                        alt={`paper-${i + 1}`}
                                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-black/70 text-white flex flex-col items-center justify-center text-center px-4 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                                        <h2 className="text-lg font-bold">{paper.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
            />
        </>
    );
};

export default NewsPaper;
