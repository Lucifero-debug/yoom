import React from 'react'
import CallList from '../../../../components/CallList'

function page() {
  return (
    <div className='flex flex-col bg-black w-full h-[93vh] text-white p-4 gap-3'>
      <h1 className='text-white text-2xl font-bold'>Meeting Recording</h1>
<CallList type='recordings'/>
    </div>
  )
}

export default page
