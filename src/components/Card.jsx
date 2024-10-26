'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Textarea } from './ui/textarea';
import ReactDatePicker from 'react-datepicker';
import HomeCard from './HomeCard'
import {Input} from './ui/input'
import MeetingModal from './MeetingModal';
import Loader from './Loader';
import { useToast } from './ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { useStreamVideoClient,Call } from '@stream-io/video-react-sdk';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

function Card() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState(undefined);
  const [callDetail, setCallDetail] = useState();
  const [values, setValues] = useState(initialValues);
  const {user} = useUser();
  const { toast } = useToast();
  const client = useStreamVideoClient();
  const [meetingLink, setMeetingLink] = useState("");
  
  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      console.log("call created")
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/Meeting/${call.id}`);
      }
      toast({
        title: 'Meeting Created',
      });
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to create Meeting' });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && callDetail?.id) {
      const currentDomain = window.location.origin;
      setMeetingLink(`${currentDomain}/meeting/${callDetail?.id}`);
    }
  }, [callDetail?.id]);
  if (!client || !user) return <Loader />;


  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 w-full">
    <HomeCard
      img="/icons/add-meeting.svg"
      title="New Meeting"
      description="Start an instant meeting"
      handleClick={() => setMeetingState('isInstantMeeting')}
    />
    <HomeCard
      img="/icons/join-meeting.svg"
      title="Join Meeting"
      description="via invitation link"
      className="bg-blue-1"
      handleClick={() => setMeetingState('isJoiningMeeting')}
    />
    <HomeCard
      img="/icons/schedule.svg"
      title="Schedule Meeting"
      description="Plan your meeting"
      className="bg-purple-1"
      handleClick={() => setMeetingState('isScheduleMeeting')}
    />
    <HomeCard
      img="/icons/recordings.svg"
      title="View Recordings"
      description="Meeting Recordings"
      className="bg-yellow-1"
      handleClick={() => router.push('/recording')}
    />

  

    <MeetingModal
      isOpen={meetingState === 'isJoiningMeeting'}
      onClose={() => setMeetingState(undefined)}
      title="Type the link here"
      className="text-center"
      buttonText="Join Meeting"
      handleClick={() => router.push(values.link)}
    >
      <Input
        placeholder="Meeting link"
        onChange={(e) => setValues({ ...values, link: e.target.value })}
        className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </MeetingModal>

{!callDetail ? (
  <MeetingModal
      isOpen={meetingState === 'isScheduleMeeting'}
      onClose={() => setMeetingState(undefined)}
      title="Create Meeting"
      handleClick={createMeeting}
    >
    <div className='flex flex-col gap-2.5'>
      <label className='text-base text-normal leading-[22px] text-sky-2'>Add a Description</label>
      <Textarea className='border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0' onChange={(e)=>{
        setValues({...values,description:e.target.value})
      }}/>
    </div>
    <div className='flex w-full flex-col gap-2.5'>
      <label className='text-base text-normal leading-[22px] text-sky-2'>Select Date And Time</label>
      <ReactDatePicker
        selected={values.dateTime}
        onChange={(date)=>setValues({...values,dateTime:date})}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={15}
        timeCaption='time'
        dateFormat='MMMM d, yyyy h:mm aa'
        className='w-full rounded bg-dark-3 p-2 focus:outline-none'
      />
    </div>
  </MeetingModal>
):(
  <MeetingModal
      isOpen={meetingState === 'isScheduleMeeting'}
      onClose={() => setMeetingState(undefined)}
      title="Meeting Created"
      handleClick={()=>{
        navigator.clipboard.writeText(meetingLink)
        toast({title:'Link Copied'})
      }}
      image='/icons/checked.svg'
      buttonIcon='/icons/copy.svg'
      buttonText='Copy Meeting Link'
    >
    </MeetingModal>
)}

    <MeetingModal
      isOpen={meetingState === 'isInstantMeeting'}
      onClose={() => setMeetingState(undefined)}
      title="Start an Instant Meeting"
      className="text-center"
      buttonText="Start Meeting"
      handleClick={createMeeting}
    />
  </section>
  )
}

export default Card
