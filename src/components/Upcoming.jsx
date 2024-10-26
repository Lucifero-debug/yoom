import React from 'react'

function Upcoming() {

  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <div className='text-white sm:w-full sm:h-[30vh] rounded-xl  bg-[url("/hero.png")] bg-cover bg-center flex justify-between flex-col sm:p-3'>
      <div className="first sm:w-[24%] p-2">
        <h2 className='glassmorphism'>Upcoming Meeting at: 12:30 PM</h2>
      </div>
      <div className="second w-full flex flex-col gap-2">
        <h1 className='text-7xl font-extrabold'>{time}</h1>
        <p className='sm:ml-2 text-[#c9DDFF]'>{date}</p>
      </div>
    </div>
  )
}

export default Upcoming
