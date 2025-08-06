import React from 'react'
import { useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin( ScrollTrigger, SplitText);

const TextReveal = ({ text }) => {

    useGSAP(() => {

        let splitted = SplitText.create('.rv-text', { type: 'lines'})

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.rv-container',
                start: 'top center',   // starts before reaching center
                end: 'top 50%',
                toggleActions: 'play none none reverse',
                scrub: 2
            }
        });

    
        tl.from(splitted.lines, {
            y: 100,
            autoAlpha: 1,
        })

    }, []);


  return (
    <>
        <div className='rv-container'>
             {text.split("<br/>").map((line, index) => (
                <div key={index} className="rv-text overflow-hidden">
                <p className="text-white text-[5vw] leading-snug">{line}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default TextReveal