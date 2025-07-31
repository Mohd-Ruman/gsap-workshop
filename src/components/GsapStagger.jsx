import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapStagger = () => {

    useGSAP(()=> {
        gsap.to('.stagger-box', {
            y: 200,
            rotation : 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,

            // stagger: 0.2

            stagger: {
                amount: 1.5,
                grid: [2, 1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        })
    })

  return (
    <>
        <h1>Gsap Stagger</h1>
        <div className='mt-4 flex gap-4'>
            <div className='stagger-box bg-indigo-200 rounded-lg w-20 h-20'/>
            <div className='stagger-box bg-indigo-300 rounded-lg w-20 h-20'/>
            <div className='stagger-box bg-indigo-400 rounded-lg w-20 h-20'/>
            <div className='stagger-box bg-indigo-500 rounded-lg w-20 h-20'/>
            <div className='stagger-box bg-indigo-600 rounded-lg w-20 h-20'/>
            <div className='stagger-box bg-indigo-700 rounded-lg w-20 h-20'/>
        </div>
    </>
  )
}

export default GsapStagger