import React from 'react'
import CallList from '../../../../components/CallList'

function page() {
  return (
    <div className='flex flex-col bg-black w-full h-[93vh] text-white p-4 gap-3'>
      <h1 className='text-white text-2xl font-bold'>Previous Meetings</h1>
      <CallList type='ended'/>
    </div>
  )
}

export default page
