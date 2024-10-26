import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import AddIcon from '@mui/icons-material/Add';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

function Tab() {
  return (
    <div className="first  w-[20vw] text-white hidden md:flex flex-col gap-4 p-2 bg-[#1C1F2E]">
      <a href="/" className="flex text-xl items-center gap-1 hover:bg-blue-600 rounded-lg hover:cursor-pointer h-[7vh] p-2" >
     <span className="text-xl"><HomeIcon/></span>
     <h1 className="font-normal">Home</h1>
      </a>
      <a href="/upcoming" className="flex text-xl items-center gap-1 hover:bg-blue-600  rounded-lg hover:cursor-pointer h-[7vh] p-2">
     <span className="text-xl"><UpcomingIcon/></span>
     <h1 className="font-normal">Upcoming</h1>
      </a>
      <a href="/previous" className="flex text-xl items-center gap-1 hover:bg-blue-600 rounded-lg hover:cursor-pointer h-[7vh] p-2">
     <span className="text-xl"><SkipPreviousIcon/></span>
     <h1 className="font-normal">Previous</h1>
      </a>
      <a href="/recording" className="flex text-xl items-center gap-1 hover:bg-blue-600 rounded-lg hover:cursor-pointer h-[7vh] p-2">
     <span className="text-xl"><EmergencyRecordingIcon/></span>
     <h1 className="font-normal">Recordings</h1>
      </a>
      <a href="/room" className="flex text-xl items-center gap-1 hover:bg-blue-600 rounded-lg hover:cursor-pointer h-[7vh] p-2">
     <span className="text-xl"><AddIcon/></span>
     <h1 className="font-normal">Personal Room</h1>
      </a>
     
    </div>
  )
}

export default Tab
