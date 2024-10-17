"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10 relative"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-40 gap-10 relative"
          >
            <div className="sticky flex flex-col items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full z-10">
              <div className="h-10 absolute left-0 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700" />
              </div>
              <h3 className="text-5xl font-bold text-white-200 pl-16">
                {item.title}
              </h3>
            </div>

            <div className="w-full pl-4">
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          height: height + "px",
        }}
        className="absolute left-5 top-0 bottom-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
        />
      </div>
    </div>
  );
};
