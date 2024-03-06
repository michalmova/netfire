'use client'

import Badge from "./Badge"
import ColoredText from "./ColoredText"
import { useRef } from "react";
import VideoPlayerControls from "./VideoPlayerControls";

const Hero = () => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const autoPlay = true

  return (
    <section className="relative h-[900px] overflow-hidden">
      <video
        ref={videoElement}
        autoPlay={autoPlay}
        controls={false}
        loop={true}
        muted={true}
        className="absolute top-0 left-0 w-full object-center object-cover"
      >
        <source src={'pexels-taryn-elliott-9206132.mp4'} type="video/mp4" />
      </video>

      <span className="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 right-0"></span>
      <div className="px-content h-[900px] pb-40 pt-80 flex flex-col absolute top-0 left-0 right-0">
        <Badge
          text="lorem ipsum"
          customClasses="text-white py-3"
        />
        <span className="pb-[60px] mt-11">
          <ColoredText
            text="<colored>Lorem Ipsum Dolor Sit amet</colored>"
            textClasses="font-exo font-semibold text-white text-[45px] max-w-[730px] leading-[57px] tracking-[-0.05em]"
            coloredTextClasses="bg_gradient_text font-bold"
          />
          <ColoredText
            text="Donec cursus ligula diam, nec congue augue ultrices nec."
            textClasses="font-exo font-semibold text-white text-[45px] max-w-[730px] leading-[57px] tracking-[-0.05em]"
            coloredTextClasses="bg_gradient_text font-bold"
          />
        </span>
        <div>
          <VideoPlayerControls videoElement={videoElement} autoPlay={autoPlay} />
        </div>
      </div>
    </section>
  )
}

export default Hero