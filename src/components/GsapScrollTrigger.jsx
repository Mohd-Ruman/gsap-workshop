import React from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {

    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children)

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 200 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: true
                },
                ease: 'power1.inOut'
            })
        },)

    }, {scope: scrollRef})


  return (
    <>
        <h1>Gsap ScrollTrigger</h1>
        <div className='mt-4' ref={scrollRef}>
            <div id='scroll-orange' className='bg-orange-500 rounded-lg w-20 h-20'/>
            <div id='scroll-pink' className='bg-pink-500 rounded-lg w-20 h-20'/>
        </div>
    </>
    
  )
}

export default GsapScrollTrigger