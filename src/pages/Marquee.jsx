'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.pin-section',
        start: 'top top',
        end: '+=4000',
        scrub: 2,
        pin: true,
        markers: false,
      },
    });

    tl.set('.wrapper', {
      x: '50vw',
    });

    tl.to('.wrapper', {
      x: '-300vw',
      ease: 'none',
    });

  

  }, []);

  return (
    <>
      {/* Dummy section before */}
      <section className="h-screen bg-red-800 flex items-center justify-center text-white text-4xl">
        Dummy Section 1
      </section>

      {/* Pinned and animated section */}
      <section className="pin-section h-screen relative overflow-hidden bg-black">
        <div className="wrapper absolute top-1/2 -translate-y-1/2  text-white">
          <h1 className="marquee-text ml-4 text-[50vh] font-light whitespace-nowrap">
            This page is created by me.
          </h1>
        </div>
      </section>

      {/* Dummy section after */}
      <section className="h-screen bg-green-800 flex items-center justify-center text-white text-4xl">
        Dummy Section 2
      </section>
    </>
  );
};

export default Marquee;
