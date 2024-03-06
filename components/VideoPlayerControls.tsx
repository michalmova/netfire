'use client'

import React, { useEffect, useState } from 'react'
import moment from 'moment';
import Pause from './icons/Pause';
import Play from './icons/Play';

interface Props {
  videoElement: React.MutableRefObject<HTMLVideoElement | null>
  autoPlay: boolean
}

const VideoPlayerControls = ({ videoElement, autoPlay }: Props) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [timePosition, settimePosition] = useState(0);


  const handlePlayPause = () => {
    const video = videoElement.current;
    if (!video) return

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setIsPlaying(prev => !prev);
  };

  const handleTimeUpdate = () => {
    const video = videoElement.current;
    if (!video) return
    setCurrentTime(video.currentTime);
  };

  const formatTime = (time: number) => moment.utc(time * 1000).format('mm:ss');

  const handleLoadedMetadata = () => {
    const video = videoElement.current;
    if (!video) return
    setDuration(video.duration);
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoElement.current;
    if (!video) return

    const setValue = parseFloat(event.target.value);

    setCurrentTime(setValue);
    video.currentTime = setValue;
  }

  useEffect(() => {
    if (videoElement.current) {
      handleLoadedMetadata()
    }
  }, [videoElement])

  useEffect(() => {
    const video = videoElement.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <div className='flex items-center justify-between gap-8 w-full bg-black bg-opacity-30 rounded-[10px] py-6 px-9'>
      <button
        onClick={handlePlayPause}
        className='rounded-full bg-black h-[48px] w-[48px] aspect-square flex items-center justify-center'>
        <div className='w-min'>
          {isPlaying ? <Pause /> : <Play />}
        </div>
      </button>
      <input
        className='w-full range_input'
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handlePositionChange}
      />
      <span className='font-exo text-gray_6 text-base font-bold tracking-normal'>
        {formatTime(currentTime)}
      </span>
    </div>
  )
}

export default VideoPlayerControls