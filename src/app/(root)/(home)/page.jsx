import Upcoming from '../../../components/Upcoming'
import Card from '../../../components/Card'
import Meeting from '../../../components/CallList'
import CallList from '../../../components/CallList';

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-5 text-white">
    <div className="second w-full p-5">
      <Upcoming/>
      <div className="card flex mt-4 gap-3 w-full">
        <Card/>
      </div>
      <div className="last flex text-white flex-col mt-4 gap-3">
      <div className="head flex justify-between pl-3 pr-3">
        <h1 className="font-bold text-2xl">Today&apos;s Upcoming Meetings</h1>
        <a href="#" className="text-[rgba(255,255,255,0.25)] text-lg">See all</a>
      </div>   
      <div className="tail flex gap-2">
      <CallList type='upcoming'/>
      </div>
      </div>
    </div>
    </div>
  );
}
