import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapTo = () => {

    useGSAP(() => {
        gsap.to('#blue-box', {
            x : 800,
            repeat: -1,
            yoyo: true,
            rotate: 360,
            duration: 2,
            ease: 'elastic.inOut'
        })
    }, [])

  return (
    <>
        <h1>GsapTo</h1>
        <div className='mt-4'>
            <div id='blue-box' className='bg-blue-500 rounded-lg w-20 h-20'/>
        </div>
    </>
   
  )
}

export default GsapTo   