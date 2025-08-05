import React from 'react'
import AnimatedTitle from '../components/AnimatedTitle'
import TextReveal from '../components/text/TextReveal'

const Text = () => {
  return (
    <>
        <div className='w-screen h-dvh bg-blue-950 flex justify-center'>

        
        </div>
        <div className='w-screen h-dvh bg-cyan-950 flex items-center justify-center'>

            <div className='max-w-4xl text-center'>
                <AnimatedTitle
                title={'Welcome to my animation workshop'}

                />

            </div>
        </div>
        <div className='w-screen h-dvh bg-blue-950 flex justify-center'>

        
        </div>

        <section className='w-screen h-screen bg-black flex items-center justify-center'>
          <TextReveal text={'This text revelation animation <br/> is amazing.'}/>
        </section>
  
    </>
  )
}

export default Text