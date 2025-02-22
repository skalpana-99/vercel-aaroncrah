"use client";

import { useEffect, useRef, useState } from "react";


interface ReadMoreProps {
    description: string; // Define the type of the `description` prop
}

export default function ReadMore({ description }: ReadMoreProps) {

    const [readmore, setReadmore] = useState(false);
    const [height, setHeight] = useState('170px');
    const [showReadmore, setShowReadmore] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

        if (contentRef.current) {

            if (contentRef.current.scrollHeight > 170 && contentRef.current.scrollWidth < 967) {
                setShowReadmore(true);
            } else {
                setHeight('auto');
            }

        }

    }, []);

    useEffect(() => {
        if (showReadmore) {
            if (readmore && contentRef.current) {
                setHeight(`${contentRef.current.scrollHeight}px`);
            } else {
                setHeight('170px');
            }
        }
    }, [readmore]);

    return (
        <section className="mb-[80px] lg:mb-[124px]">
            <div className="mt-3">
                <div className={`relative overflow-hidden transition-[height]   ease-in-out `} style={{ 'height': `${height}` }}>
                    <p ref={contentRef} className={`text-[18px] font-light leading-7
              after:content-[''] after:absolute after:inset-0 ${!readmore && showReadmore ? 'after:bg-gradient-to-t after:from-white after:to-transparent' : ''}`}
                        dangerouslySetInnerHTML={{ __html: description ? description : "" }} >
                    </p>
                </div>

                {showReadmore &&

                    <div onClick={() => setReadmore(readmore ? false : true)} className="flex gap-2 items-center font-normal leading-8 cursor-pointer mt-2 ">
                        Read more
                        <svg className={`transform transition duration-300 ease-in-out ${readmore ? 'rotate-180' : ''}`} width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9201 0.949219L10.4001 7.46922C9.63008 8.23922 8.37008 8.23922 7.60008 7.46922L1.08008 0.949219" stroke="#161616" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                }
            </div>
        </section>
    )
}