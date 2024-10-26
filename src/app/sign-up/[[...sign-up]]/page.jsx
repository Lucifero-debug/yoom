import {  SignUp } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div className='bg-black w-full h-[100vh] flex justify-center items-center'>
      <SignUp/>
    </div>
  )
}

export default page
