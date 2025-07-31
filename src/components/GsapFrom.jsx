import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapFrom = () => {

    useGSAP(() => {
        gsap.from('#yellow-box', {
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
        <h1>GsapFrom</h1>
        <div className='mt-4'>
            <div id='yellow-box' className='bg-yellow-500 rounded-lg w-20 h-20'/>
        </div>
    </>
   
  )
}

export default GsapFrom   