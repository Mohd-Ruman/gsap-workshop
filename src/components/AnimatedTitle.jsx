import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({title, classContainer}) => {

    useGSAP(()=>{
        gsap.to('.animated-word', {
            transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
            stagger: 0.09,
            opacity: 1,
            ease: 'power3.inOut',
            markers: true,
            
            scrollTrigger: {
                start: '+=800 center',
                end: 'center center',
                toggleActions: 'play none none reverse',
                scrub: 2,
            }
        })

    }, [])

  return (
    <>
     <div>

        <div
            className={`${classContainer}
            text-white text-7xl items-center flex-col uppercase font-black flex flex-wrap gap-2
            `}
        >
            {title.split(' ').map((word, index)=> (
                <span className='animated-word'>{word}</span>
            ))}
        </div>
       
     </div>
    </>
  )
}

export default AnimatedTitle