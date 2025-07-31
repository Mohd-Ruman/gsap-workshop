import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'  

const GsapTimeline = () => {

    const timeline = gsap.timeline({
        repeat: -1, yoyo: true, repeatDelay: 1
    })

    useGSAP(() => {

        timeline.to('#red-box', {
            x : 250,
            rotate: 0,
            boxShadow: "0px 20px 20px 1px #bfbfbf",
            borderRadius: '20%',
            ease: 'back.inOut'
        })

        timeline.to('#red-box', {
            x : 500,
            rotate : 360,
            borderRadius: '40%',
            duration: 2,
            ease: 'circ.inOut'
        })

        timeline.to('#red-box', {
            boxShadow: "0px 20px 20px 20px #ffffff",
            x : 150,
            scale: 2,
            rotate : 360,
            borderRadius: '40%',
            duration: 2,
            ease: 'circ.inOut'
        })

    })

  return (
    <>
        <h1>GSAP timeline</h1>
        <button 
        onClick={()=> {
            if(timeline.paused()){
                timeline.play();
            }else{
                timeline.pause();
            }
        }}
        className='bg-gray-600 text-white p-2 w-fit rounded-2xl'>
            Play / Pause
        </button>
        <div className='mt-4'>
            <div id='red-box' className='bg-red-500 rounded-lg w-20 h-20'/>
        </div>
    </>
  )
}

export default GsapTimeline