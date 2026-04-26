import React, { useState, useEffect } from 'react';

export default function Hero() {
  // 1. Typewriter Effect State (Sticky Note)
  const fullText = "Take notes to keep track of crucial details, and accomplish more tasks with ease.";
  const [typedText, setTypedText] = useState("");

  // 2. Random Progress Bar State (Tasks Widget)
  const [task1Progress, setTask1Progress] = useState(0);
  const [task2Progress, setTask2Progress] = useState(0);

  // 3. Live Clock State (Reminders Widget)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // --- Typewriter Logic ---
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40); // Speed in milliseconds per character

    // --- Fluctuate Progress Bars Logic ---
    // Start at 0, then after a tiny delay, set to a random percentage to trigger the CSS transition
    setTimeout(() => {
      setTask1Progress(Math.floor(Math.random() * 40) + 40); // Random between 40% - 80%
      setTask2Progress(Math.floor(Math.random() * 50) + 70); // Random between 70% - 120%
    }, 100);

    // --- Live Clock Logic ---
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear intervals when component unmounts
    return () => {
      clearInterval(typingInterval);
      clearInterval(clockInterval);
    };
  }, []);

  // Calculate clock hand rotations
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  
  const secDeg = seconds * 6; // 360deg / 60s
  const minDeg = minutes * 6 + seconds * 0.1; // Smooth minute hand
  const hrDeg = (hours % 12) * 30 + minutes * 0.5; // Smooth hour hand

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[90vh] flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden bg-gradient-to-b from-white via-white to-[#FAFAFA]">
      
      {/* Inject custom CSS for the floating animation so it works without touching tailwind.config.js */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float-1 { animation: float 3.5s ease-in-out infinite; }
          .animate-float-2 { animation: float 4s ease-in-out infinite 1s; }
          .animate-float-3 { animation: float 3s ease-in-out infinite 0.5s; }
        `}
      </style>

      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Center Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
        
        {/* 3D App Icon */}
        <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center border border-gray-100">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="w-3.5 h-3.5 bg-blue-500 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          Think, plan, and track <br />
          <span className="text-[#a3a3a3]">all in one place</span>
        </h1>
        
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-500 font-medium max-w-lg">
          Efficiently manage your tasks and boost productivity.
        </p>

        {/* CTA Button */}
        <button className="mt-6 md:mt-8 px-6 py-3 md:px-7 md:py-3.5 bg-[#2563eb] text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.97]">
          Get free demo
        </button>
      </div>

      {/* --- FLOATING BACKGROUND ELEMENTS --- */}
      
      {/* 1. Yellow Sticky Note (Typewriter Effect) */}
      <div className="hidden lg:block absolute top-20 left-[10%] w-56 h-56 bg-[#FDF09B] rounded-sm shadow-xl rotate-[-4deg] p-5 z-0 transform hover:rotate-0 transition-transform duration-300">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
        <p className="mt-4 font-mono text-sm leading-relaxed text-gray-800 italic min-h-[100px]">
          {typedText}
          {/* Blinking cursor effect */}
          <span className="animate-pulse">|</span>
        </p>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-[4deg]">
           <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
             <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
           </div>
        </div>
      </div>

      {/* 2. Today's Tasks Widget (Fluctuating Progress) */}
      <div className="hidden lg:block absolute bottom-12 left-[12%] w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100 p-5 z-0">
        <div className="w-24 h-6 bg-gray-100 rounded-t-xl absolute -top-6 left-0"></div> 
        <h3 className="font-semibold text-gray-800 mb-4 text-sm">Today's tasks</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-orange-100 text-orange-600 flex items-center justify-center text-[10px]">8</span> New ideas for campaign</span> 
              <span className="font-semibold">{task1Progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${task1Progress}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-green-100 text-green-600 flex items-center justify-center text-[10px]">3</span> Design PPT #4</span> 
              <span className="font-semibold">{task2Progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${Math.min(task2Progress, 100)}%` }} // Cap width at 100% visually
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Reminders Widget (Live Clock) */}
      <div className="hidden lg:block absolute top-24 right-[10%] w-64 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100 p-5 rotate-[4deg] z-0">
         <div className="w-24 h-6 bg-gray-100 rounded-t-xl absolute -top-6 left-0"></div>
         
         {/* Live Animated Clock SVG */}
         <div className="absolute -left-10 top-4 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center -rotate-[4deg]">
            <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="9" />
              {/* Hour Hand */}
              <line x1="12" y1="12" x2="12" y2="8" transform={`rotate(${hrDeg} 12 12)`} strokeLinecap="round" strokeWidth={2} />
              {/* Minute Hand */}
              <line x1="12" y1="12" x2="12" y2="6" transform={`rotate(${minDeg} 12 12)`} strokeLinecap="round" strokeWidth={1.5} />
              {/* Second Hand (Red) */}
              <line x1="12" y1="12" x2="12" y2="5" transform={`rotate(${secDeg} 12 12)`} stroke="red" strokeLinecap="round" strokeWidth={1} />
            </svg>
         </div>

         <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800 text-sm pl-6">Reminders</h3>
            <span className="text-[10px] text-gray-400">Meetings</span>
         </div>
         <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-gray-800">Today's Meeting</p>
            <p className="text-[10px] text-gray-400 mb-2">Call with marketing team</p>
            <div className="inline-block bg-blue-50 text-blue-600 text-[10px] font-medium px-2 py-1 rounded-md">13:00 - 13:45</div>
         </div>
      </div>

      {/* 4. Integrations Widget (Floating Icons) */}
      <div className="hidden lg:block absolute bottom-12 right-[12%] w-64 bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100 p-5 z-0">
        <div className="w-24 h-6 bg-gray-100 rounded-t-xl absolute -top-6 left-0"></div>
        <h3 className="font-semibold text-gray-800 mb-4 text-sm">100+ Integrations</h3>
        <div className="flex gap-3">
          
          {/* Wrapped icons in floating containers using our injected custom CSS */}
          <div className="animate-float-1">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center transform -rotate-6">
              <span className="text-2xl font-bold text-red-500">M</span>
            </div>
          </div>

          <div className="animate-float-2">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center">
              <span className="text-xl font-bold text-green-500">#</span>
            </div>
          </div>

          <div className="animate-float-3">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center transform rotate-6">
              <span className="text-xl font-bold text-blue-500">31</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FAFAFA] z-20 pointer-events-none"></div>

    </section>
  );
}