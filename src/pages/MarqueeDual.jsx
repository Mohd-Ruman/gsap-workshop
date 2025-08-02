import React, { useState } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const MarqueeDual = () => {

    window.addEventListener("wheel", function(dets){
        console.log(dets.deltaY);
    })

    useGSAP(()=> {

        gsap.set('#marquee', {
            transform: 'translateX(-100%)'
        })

        window.addEventListener("wheel", function(dets){
            if(dets.deltaY > 0){
                    gsap.to('#marquee', {
                        transform : 'translateX(-200%)',
                        duration: 4,
                        ease: 'none',
                        repeat: -1
                    })

                    gsap.to('#marquee img', {
                        rotate: 180
                    })
            }else{
                gsap.to('#marquee', {
                    transform : 'translateX(0%)',
                    duration: 4,
                    ease: 'none',
                    repeat: -1
                })

                gsap.to('#marquee img', {
                    rotate: 0
                })
            }
        })

        
    }, [])


  return (
    <> 
        <section className='h-screen w-screen bg-black'>

        </section>
        <section className='text-white'>
            <div id='move' className='bg-lime-400 flex py-[2vw]'>
                <div id='marquee' className='flex items-center gap-[3vw] px-[1.5vw] shrink-0'>
                    <h1 className='text-black text-[70px] font-bold'>DESIGN & DEVELOP</h1>
                    <img className='h-[80px]' src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg'/>
                </div>
                <div id='marquee' className='flex items-center gap-[3vw] px-[1.5vw] shrink-0'>
                    <h1 className='text-black text-[70px] font-bold'>DESIGN & DEVELOP</h1>
                    <img className='h-[80px]' src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg'/>
                </div>
                <div id='marquee' className='flex items-center gap-[3vw] px-[1.5vw] shrink-0'>
                    <h1 className='text-black text-[70px] font-bold'>DESIGN & DEVELOP</h1>
                    <img className='h-[80px]' src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg'/>
                </div>
                <div id='marquee' className='flex items-center gap-[3vw] px-[1.5vw] shrink-0'>
                    <h1 className='text-black text-[70px] font-bold'>DESIGN & DEVELOP</h1>
                    <img className='h-[80px]' src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg'/>
                </div>
                <div id='marquee' className='flex items-center gap-[3vw] px-[1.5vw] shrink-0'>
                    <h1 className='text-black text-[70px] font-bold'>DESIGN & DEVELOP</h1>
                    <img className='h-[80px]' src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg'/>
                </div>
            </div>
        </section>
        <section className='h-screen w-screen bg-black'>

        </section>
    </>
  )
}

export default MarqueeDual