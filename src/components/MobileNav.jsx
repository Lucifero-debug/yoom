import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';

const MobileNav = () => {
 
    
  return (
    <div className='md:hidden'>
      <Sheet>
  <SheetTrigger><MenuIcon/></SheetTrigger>
  <SheetContent className='fixed inset-0  overflow-auto flex flex-col gap-9'>
          <SheetClose asChild>
          <Link href={'/'} className='flex w-full justify-between'>
            <h1>Home</h1>
            <ChevronRightIcon/>
          </Link>
          </SheetClose>
          <SheetClose asChild>
          <Link href={'/upcoming'} className='flex w-full justify-between'>
            <h1>Upcoming</h1>
            <ChevronRightIcon/>
          </Link>
          </SheetClose>
          <SheetClose asChild>
          <Link href={'/previous'} className='flex w-full justify-between'>
            <h1>Previous</h1>
            <ChevronRightIcon/>
          </Link>
          </SheetClose>
          <SheetClose asChild>
          <Link href={'/recording'} className='flex w-full justify-between'>
            <h1>Recordings</h1>
            <ChevronRightIcon/>
          </Link>
          </SheetClose>
          <SheetClose asChild>
          <Link href={'/room'} className='flex w-full justify-between'>
            <h1>Personal Room</h1>
            <ChevronRightIcon/>
          </Link>
          </SheetClose>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNav
