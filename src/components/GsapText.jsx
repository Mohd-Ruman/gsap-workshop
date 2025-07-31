import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapText = () => {

    useGSAP(()=> {
        gsap.to('.heading', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
            duration: 3
        })

        gsap.fromTo('.para', {
            opacity: 0,
            y: 20
        }, {
            opacity:1,
            y: 0,
            delay: 1,
            stagger: 0.5,
            ease: 'bounce'
        })
    }, [])

  return (
    <>
        <h1 className='heading text-2xl font-bolds opacity-0 -translate-y-10'>Gsap Text</h1>

        <p className='para'>Hi this is text sentence 1.</p>
        <p className='para'>Hi this is text sentence 2.</p>
        <p className='para'>Hi this is text sentence 3.</p>
    </>
  )
}

export default GsapText