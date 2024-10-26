"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "../../../../hooks/useGetCallById";
import { Button } from "../../../../components/ui/button";
import { useToast } from "../../../../components/ui/use-toast";
import { useState } from "react";

const Table = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row ml-3">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

const PersonalRoom = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();
  const [meetingLink, setMeetingLink] = useState("");

  const meetingId = user?.id;

  const { call } = useGetCallById(meetingId);

  useEffect(() => {
    if (typeof window !== "undefined" && meetingId) {
      const currentDomain = window.location.origin;
      setMeetingLink(`${currentDomain}/meeting/${meetingId}?personal=true`);
    }
  }, [meetingId]);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/Meeting/${meetingId}?personal=true`);
  };


  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-xl font-bold lg:text-3xl">Personal Meeting Room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
        <Table title="Meeting ID" description={meetingId} />
        <Table title="Invite Link" description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-blue-1 ml-3" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-dark-3 ml-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;