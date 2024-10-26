import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'

function Header() {
  return (
    <div className='h-[7vh] flex items-center bg-[#1C1F2E] justify-between p-4'>
      <div className="logo h-[7vh] w-[10vw] text-white flex items-center gap-0">
        <Image alt='' src='/logo.png' height={75} width={65} />
        <h1 className='font-bold text-lg'>YOOM</h1>
      </div>
      <MobileNav/>
      <div className="user">
      <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header
