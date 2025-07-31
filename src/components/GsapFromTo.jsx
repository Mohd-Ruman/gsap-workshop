import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapFromTo = () => {

    useGSAP(() => {
        gsap.fromTo('#green-box', 
            
        {
            x : 200,
            rotation: 0,
            borderRadius: '0%'
        }, 
        {
            x : 800,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            rotate: 360,
            duration: 2,
            ease: 'elastic.inOut'
        })
    }, [])

  return (
    <>
        <h1>GsapFromTo</h1>
        <div className='mt-4'>
            <div id='green-box' className='bg-green-700 rounded-lg w-20 h-20'/>
        </div>
    </>
   
  )
}

export default GsapFromTo   