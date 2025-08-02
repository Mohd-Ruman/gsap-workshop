'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const SkillTags = () => {
  const skills = [
    'React', 'Next JS', 'Node JS', 'Express JS', 'GSAP', 'Tailwind',
    'React', 'Next JS', 'Node JS', 'Express JS', 'GSAP', 'Tailwind',
    'Express JS', 'GSAP', 'Tailwind',
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',      //for the outer section to be pinned
        start: 'center center',
        end: '+=3000',
        scrub: 4,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.from('.top', {
      rotateY: 90,
      rotateX: 180,
      rotateZ: 90,
      scale: 20,
      x: '100vw',
      y: '100vh',
      filter: 'blur(8px)',
      border: '#ffffff',
     
      stagger: {
        each: 0.5,
      },
      duration: 2,
      
    });

    tl.to('.top', {
      delay: 1
    })
  }, []);

  return (
    <>
      <section className="h-screen w-screen" />

      {/* Pin this whole section */}
      <section
        id="container"
        className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden"
      >
        <div className="flex flex-wrap items-center justify-center max-w-2xl gap-4 p-8 bg-neutral-900 rounded-4xl">
          {skills.map((skill, idx) => (
            <div key={idx} className="relative inline-flex">
              {/* Bottom frame layer */}
              <div className="absolute inset-0 border border-dashed border-gray-800 rounded-md z-0 pointer-events-none" />

              {/* Top actual card */}
              <div className="top relative z-10 bg-neutral-900 border-[1px] border-cyan-300 text-white px-4 py-2 rounded-md font-medium text-sm shadow-md">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="h-screen w-screen bg-black" />
    </>
  );
};

export default SkillTags;
