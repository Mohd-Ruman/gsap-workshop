import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const TextGradient = () => {

    useGSAP(()=> {

        let splitted = SplitText.create(".text-gr-text", { type : "chars"})

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.text-gr-section',
                start : 'center center',
                end: '+=2000',
                scrub: 1,
                pin: true
            }
        })

        tl.to(splitted.chars, {
            color: "#ffffff",
            stagger: 1,
            ease: 'none',
        })

    }, [])


  return (
    <>
        <section className='w-screen h-screen'>

        </section>
        <section className='text-gr-section w-screen h-fit p-8 bg-black flex items-center justify-center'>
          <div className='text-gr-wrapper max-w-4xl'>
            <p className='text-gr-text text-white/20 text-[2vh] sm:text-[2vw]'>When you pin an element with ScrollTrigger, the element’s own height doesn’t matter —
             what matters is the <span className='special'>End Distance.</span> </p>
          </div>

        </section>

        <section className='w-screen h-screen'>

        </section>
    </>
    
  )
}

export default TextGradient