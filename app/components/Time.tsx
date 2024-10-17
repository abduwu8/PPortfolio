import React from "react";
import { Timeline } from "./ui/Timeline";
import { timeline } from "@/data";

const Time = () => {
  const timelineData = timeline.map(item => ({
    title: item.title,
    content: (
      <div>
        <p className="text-white-200 text-base font-normal mb-4">
          {item.desc}
        </p>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    ),
  }));

  return (
    <section className="w-full py-20" id="experience">
      <h1 className="heading mb-10 text-center">
        Time-<span className="text-purple">Line</span>
      </h1>
      <Timeline data={timelineData} />
    </section>
  );
};

export default Time;
