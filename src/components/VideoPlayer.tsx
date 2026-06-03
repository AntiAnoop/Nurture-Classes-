/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Maximize, RotateCcw, AlertCircle, FileText } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  duration?: string;
  chapterNumber: number;
}

export default function VideoPlayer({ title, duration = '24:35', chapterNumber }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [currentTime, setCurrentTime] = useState('00:00');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Convert duration string "MM:SS" or similar to standard seconds for computations
  const durationSecs = duration ? parseDurationToSeconds(duration) : 1475;

  function parseDurationToSeconds(durStr: string) {
    const cleanStr = durStr.toLowerCase().replace('m', '').replace('s', '').trim();
    const parts = cleanStr.split(/[\s:]+/);
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
    return 1475; // default 24 mins 35 seconds
  }

  function formatSeconds(secs: number) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    if (isPlaying) {
      const startSecs = (progress / 100) * durationSecs;
      let elapsedSecs = startSecs;

      timerRef.current = setInterval(() => {
        elapsedSecs += 1;
        if (elapsedSecs >= durationSecs) {
          setIsPlaying(false);
          setProgress(100);
          setCurrentTime(duration);
          if (timerRef.current) clearInterval(timerRef.current);
        } else {
          setProgress((elapsedSecs / durationSecs) * 100);
          setCurrentTime(formatSeconds(elapsedSecs));
        }
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, durationSecs, duration]);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime('00:00');
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPercent = Math.min(Math.max((clickX / width) * 100, 0), 100);
    setProgress(newPercent);
    const targetSeconds = (newPercent / 100) * durationSecs;
    setCurrentTime(formatSeconds(targetSeconds));
  };

  return (
    <div className="flex flex-col gap-4 font-sans" id="custom-video-lecture-player">
      {/* Chapter header panel info overlay */}
      <div className="flex justify-between items-center bg-white p-4 border border-[#E2E8F0] rounded-2xl shadow-xs">
        <div className="flex flex-col">
          <span className="font-semibold text-xs text-[#1E3A8A] uppercase tracking-wide">
            Lecture #{chapterNumber}
          </span>
          <h2 className="font-sans font-bold text-xl text-[#1E293B] mt-0.5">{title}</h2>
        </div>
        <div className="bg-[#10B981] bg-opacity-10 border border-emerald-200 text-[#10B981] font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 leading-none shadow-xs">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
          Video Lecture
        </div>
      </div>

      {/* Main 16:9 aspect ratio media player canvas screen */}
      <div className="relative w-full aspect-video bg-[#0F172A] rounded-2xl overflow-hidden shadow-md flex flex-col justify-between group">
        
        {/* Top Watermark details overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-black bg-opacity-30 backdrop-blur-xs p-2.5 rounded-xl border border-white border-opacity-5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xs font-semibold tracking-wide flex items-center gap-2">
            <span className="h-2 w-2 bg-red-500 rounded-full"></span>
            Class 10 SSC Interactive Portal
          </span>
          <span className="text-gray-300 text-[10px] font-mono tracking-wider">
            NURTURE_COACHING_HQ
          </span>
        </div>

        {/* Center Canvas display element (Changes depending on if Playing or Idle/Paused) */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-white select-none">
          {!isPlaying && progress === 0 ? (
            // Idle initial state screen
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handlePlayToggle}
                className="h-16 w-16 bg-white hover:bg-[#F8F9FA] text-[#1E3A8A] rounded-full flex items-center justify-center shadow-lg transform active:scale-95 transition-all duration-200"
                id="lecture-play-trigger-big"
              >
                <Play className="h-8 w-8 ml-1 text-[#1E3A8A] fill-current" />
              </button>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-base text-gray-100 max-w-sm">Click to Start Board Lecture</span>
                <span className="text-slate-300 text-xs tracking-wide">Duration: {duration} mins · High Quality HD Audio</span>
              </div>
            </div>
          ) : !isPlaying ? (
            // Paused screen overlay grid
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={handlePlayToggle}
                className="h-14 w-14 bg-[#1E3A8A] hover:bg-blue-900 border border-blue-400 text-white rounded-full flex items-center justify-center shadow-md transform active:scale-95 hover:scale-105 transition-all duration-200"
              >
                <Play className="h-6 w-6 ml-0.5 text-white fill-current" />
              </button>
              <span className="text-sm font-bold text-gray-200">Session Paused</span>
              <span className="text-[10px] text-gray-400">Press play to resume lecture video timeline</span>
            </div>
          ) : (
            // Interactive active playing screen overlay
            <div className="flex flex-col items-center gap-3 animate-fade-in text-center">
              <div className="flex items-center gap-1 font-mono text-xs font-semibold px-2 px-3 py-1.5 bg-[#1E3A8A] border border-blue-400 text-white rounded-full bg-opacity-70 backdrop-blur-md mb-2">
                <span className="h-2 w-2 rounded-full bg-red-600 animate-ping mr-1"></span>
                Lecture Streaming Simulation
              </div>
              <h4 className="font-sans font-bold text-lg text-white opacity-80 uppercase tracking-widest text-[#10B981] leading-none mb-1">
                Chapter {chapterNumber} Live
              </h4>
              <p className="font-sans text-xs text-slate-300 max-w-xs italic leading-relaxed">
                "Be attentive: Keep your notebook open and note important Board proofs."
              </p>
            </div>
          )}
        </div>

        {/* Video progress HUD & controls bar */}
        <div className="bg-gradient-to-t from-black to-transparent p-4 flex flex-col gap-3">
          {/* Progress timeline scrub bar */}
          <div
            onClick={handleProgressBarClick}
            className="w-full h-1.5 bg-white bg-opacity-20 hover:h-2 rounded-full cursor-pointer relative transition-all group-timeline"
            id="lecture-timeline-scrub"
          >
            <div
              className="absolute left-0 top-0 h-full bg-[#1E3A8A] rounded-full flex items-center justify-end"
              style={{ width: `${progress}%` }}
            >
              {/* Scrub dot handle */}
              <div className="h-3 w-3 rounded-full bg-white border-2 border-[#1E3A8A] shadow-md absolute right-0 translate-x-1.5 transform scale-0 group-hover:scale-100 transition-transform md:scale-100"></div>
            </div>
          </div>

          {/* Controls strip row */}
          <div className="flex justify-between items-center text-white" id="lecture-player-controls-strip">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePlayToggle}
                className="text-gray-100 hover:text-white hover:scale-110 active:scale-95 transition-all"
                title={isPlaying ? 'Pause' : 'Play'}
                id="lecture-play-pause-toggle-bottom"
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
              </button>
              
              <button
                onClick={handleReset}
                className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                title="Restart Lecture"
              >
                <RotateCcw className="h-4 w-4" />
              </button>

              {/* Time display indicator */}
              <span className="font-mono text-xs tracking-wider font-semibold text-gray-300">
                {currentTime} / {duration}
              </span>
            </div>

            {/* Right-aligned media controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 group-volume">
                <Volume2 className="h-4 w-4 text-gray-300" />
                <div className="w-16 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden hover:h-1.5 transition-all">
                  <div className="w-4/5 h-full bg-white rounded-full"></div>
                </div>
              </div>
              <button
                onClick={() => alert('Full screen mode simulation activated!')}
                className="text-gray-300 hover:text-white transition-all transform hover:scale-115"
                title="Fullscreen"
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Classroom notes prompt suggestion */}
      <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-4 rounded-xl flex gap-3 text-xs text-[#475569] leading-relaxed">
        <AlertCircle className="h-5 w-5 text-[#1E3A8A] shrink-0" />
        <div>
          <strong>Importantboard Tips:</strong> This lecture matches the updated <strong>Maharashtra State Board (SSC) syllabus</strong>. Class 10 students are requested to cross-reference their geometry and history textbooks alongside these notes.
        </div>
      </div>
    </div>
  );
}
