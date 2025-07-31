import React from 'react'

const WorkshopJsm = () => {
  return (
    <>
        <h1>Workshop</h1>

        <div className='flex flex-col'>
            <GsapTo/>
            <GsapFrom/>
            <GsapFromTo/>
            <GsapTimeline/>
            <GsapStagger/>
            <div className='mt-80'>
            <GsapScrollTrigger/>
            </div>
            <GsapText/>
        </div>
      
        <div className='w-full h-screen bg-gray-500 mt-40'/>
    </>
  )
}

export default WorkshopJsm