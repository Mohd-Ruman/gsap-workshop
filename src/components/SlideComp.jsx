import React from 'react'

const SlideComp = ({num, color, z}) => {
  return (
    <>
         <div id={'container'} className={`w-screen z-${z} h-dvh ${color} flex items-center justify-center`}>
           <h1 className='text-3xl font-black text-white'>
            {num}
           </h1>
        </div>
    </>
  )
}

export default SlideComp