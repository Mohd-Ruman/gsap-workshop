import React from 'react'
import AnimatedTitle from '../components/AnimatedTitle'

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
    </>
  )
}

export default Text