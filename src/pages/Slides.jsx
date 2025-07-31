import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Slides = () => {

    const scrollRef = useRef(null)

    useGSAP(()=> {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#container',
                start: 'center center',
                end: '+=800 center',
                scrub: 2,
                pin: true,
                pinSpacing: true
            }
        })

        tl.to('#item', {
            width: '100vw',
        })

        tl.to('.text', {
            fontSize : '94px',
            color: '#ffffff'
        }, '<')

        tl.to('#item', {
            height: '100vh',
            borderRadius: 0
        })
    })

    useGSAP(()=> {
        const images = gsap.utils.toArray(scrollRef.current.children)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#image-container',
                start: 'top top',
                end: '1000 center',
                scrub: 2,
                pin: true,
            }
        })

        images.forEach((image) => {
            tl.from(image, {
                
                scale: 0.5,
                borderRadius: '64px',
            })
        })

    })

    

  return (
    <>
      <div 
      id='container'
      className='w-screen h-dvh items-center flex justify-center'
      >
        
        <img
            id='item'
            src='https://images.unsplash.com/photo-1751554827598-c96cb294c0e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
            className='rounded-3xl w-64 h-64 object-cover'
        />
        <p
            className='text absolute font-bold text-2xl'
        >PHOTOGRAPHY</p>

      </div> 

      <div 
      ref={scrollRef}
      id='image-container'
      className='bg-black w-screen h-dvh relative'>

        <img 
            id='image'
            src='https://images.unsplash.com/photo-1752490890954-2641c67312b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
            className='absolute object-cover w-full h-full'
        />
        <img 
            id='image'
            src='https://images.unsplash.com/photo-1752213355617-ca739eaf6773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'
            className='absolute object-cover w-full h-full'
        />
        <img 
            id='image'
            src='https://images.unsplash.com/photo-1752490890954-2641c67312b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
            className='absolute object-cover w-full h-full'
        />
        <img 
            id='image'
            src='https://images.unsplash.com/photo-1751640295309-d807c9bf7282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
            className='absolute object-cover w-full h-full'
        />
    
      </div>

    </>
  )
}

export default Slides