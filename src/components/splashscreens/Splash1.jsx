import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Splash1 = () => {

    useGSAP(()=> {

        const tl = gsap.timeline();

        tl.fromTo('.title', {
            scale: 0.4,
        },{
            scale: 2,
            ease: 'power4.out'
        })

        tl.to('.wrapper > div', {
            delay: 0.5,
            y: '-100vh',
            duration: 1,
            stagger: { each: 0.1},
            ease: 'expo.out'
        })

         

    }, [])


  return (
    <>
        <section className=''>
            <div className='wrapper flex flex-row'>
                <div className='w-1/5 bg-lime-400 h-screen border-l-1 border-black'></div>
                <div className='w-1/5 bg-lime-400 h-screen border-l-1 border-black'></div>
                <div className='w-1/5 bg-lime-400 h-screen border-l-1 border-black'>
                    <h1 className='title absolute text-4xl font-black top-[50%] left-[50%]'>F1</h1>
                </div>
                <div className='w-1/5 bg-lime-400 h-screen border-l-1 border-black'></div>
                <div className='w-1/5 bg-lime-400 h-screen border-l-1 border-black'></div>
            </div>
            
        </section>
    </>
  )
}

export default Splash1