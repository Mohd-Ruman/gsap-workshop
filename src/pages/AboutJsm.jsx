'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const AboutJsm = () => {

  useGSAP(() => {
    // Set initial small size for the image container
    gsap.set('.mask-clip-path', {
      width: '300px',
      height: '300px'
    })

    // Scroll-triggered animation to expand the image container
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'top center',
        end: '+=800',
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      ease: 'none'
    })
  }, [])

  return (
    <div id='about' className='min-h-screen w-screen bg-white text-black'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='text-sm uppercase md:text-[18px]'>Welcome To Ruman's GSAP</h2>

        <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
          <b>D</b>iscover the w<b>o</b>rld's <br /> l<b>a</b>rgest shared advent<b>u</b>re.
        </div>

        <div className='about-subtext text-center mt-4 text-base md:text-lg'>
          <p>The game of games begins — your life, now an epic MMORPG.</p>
          <p>Zentry unites every player from countless games and platforms.</p>
        </div>
      </div>

      <div id='clip' className='relative h-[100vh] w-screen overflow-hidden'>
        <div className='mask-clip-path about-image relative overflow-hidden'>
          <img
            src='/desktop-1.jpg'
            className='absolute left-0 top-0 size-full object-cover'
            alt='Expanding Visual'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutJsm
