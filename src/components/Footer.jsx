import React from 'react';

export default function Footer() {
  const linksLeft = ['About Us', 'Contact', 'What\'s New', 'Careers'];
  const linksRight = ['Product', 'Solutions', 'Integrations', 'Price'];

  const ArrowIcon = () => (
    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  return (
    <footer className="relative w-full pt-20 pb-8 bg-[#FAFAFA] overflow-hidden">
      
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0px) var(--base-rotate); }
            50% { transform: translateY(-15px) var(--base-rotate); }
            100% { transform: translateY(0px) var(--base-rotate); }
          }
          @keyframes float-med {
            0% { transform: translateY(0px) var(--base-rotate); }
            50% { transform: translateY(-10px) var(--base-rotate); }
            100% { transform: translateY(0px) var(--base-rotate); }
          }
          @keyframes float-fast {
            0% { transform: translateY(0px) var(--base-rotate); }
            50% { transform: translateY(-8px) var(--base-rotate); }
            100% { transform: translateY(0px) var(--base-rotate); }
          }
          .footer-float-1 { animation: float-slow 4s ease-in-out infinite; }
          .footer-float-2 { animation: float-med 3s ease-in-out infinite 0.5s; }
          .footer-float-3 { animation: float-fast 2.5s ease-in-out infinite 1s; }
          .footer-float-4 { animation: float-slow 3.5s ease-in-out infinite 0.2s; }
          .footer-float-5 { animation: float-med 4.5s ease-in-out infinite 0.7s; }
        `}
      </style>

      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- TOP SECTION: Brand & Links --- */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* Left: Logo & Headline */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="grid grid-cols-2 gap-[3px]">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">ChronoTask</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight">
              Stay organized and <br className="hidden md:block" />
              boost your productivity
            </h2>
          </div>

          {/* Right: Links Grid */}
          <div className="flex gap-16 md:gap-24 md:pt-4">
            <ul className="space-y-4">
              {linksLeft.map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-3 text-[15px] text-gray-600 hover:text-black transition-colors">
                    <ArrowIcon />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {linksRight.map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-3 text-[15px] text-gray-600 hover:text-black transition-colors">
                    <ArrowIcon />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- MIDDLE SECTION: Floating 3D Icons Canvas --- */}
        <div className="relative w-full h-[250px] md:h-[450px] mt-12 md:mt-0 pointer-events-none">
          
          {/* === MOBILE: Show only 4 key icons === */}

          {/* 1. Calendar "20" — visible on all screens */}
          <div className="absolute top-[10%] left-[8%] md:left-[22%] footer-float-1" style={{'--base-rotate': 'rotate(-15deg)'}}>
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-50 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tighter">20</span>
            </div>
          </div>

          {/* 2. Blue Checkmark — visible on all screens */}
          <div className="absolute bottom-[15%] left-[5%] md:left-[18%] footer-float-3" style={{'--base-rotate': 'rotate(-5deg)'}}>
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center">
              <div className="w-7 h-7 md:w-10 md:h-10 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-inner">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
          </div>

          {/* 3. Calendar Grid — visible on all screens */}
          <div className="absolute top-[10%] right-[8%] md:right-[28%] footer-float-3" style={{'--base-rotate': 'rotate(5deg)'}}>
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center justify-center p-2.5 md:p-3">
              <div className="w-full h-2 md:h-2.5 bg-gray-100 rounded mb-1 md:mb-1.5"></div>
              <div className="grid grid-cols-4 gap-0.5 md:gap-1 w-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${i === 2 ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Stopwatch — visible on all screens */}
          <div className="absolute bottom-[15%] right-[8%] md:right-[20%] footer-float-1" style={{'--base-rotate': 'rotate(-8deg)'}}>
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-50 flex items-center justify-center relative">
               <div className="absolute -top-1 w-2.5 md:w-3 h-1.5 md:h-2 bg-gray-300 rounded-t-sm"></div>
               <div className="w-8 h-8 md:w-12 md:h-12 border-[2.5px] md:border-[3px] border-gray-800 rounded-full relative flex items-center justify-center">
                 <div className="absolute top-0.5 md:top-1 w-0.5 h-3 md:h-4 bg-red-500 rounded-full origin-bottom rotate-[30deg]"></div>
               </div>
            </div>
          </div>

          {/* === DESKTOP ONLY: Additional 6 icons (hidden on mobile) === */}

          {/* 5. Chat Bubble */}
          <div className="hidden md:block absolute top-[30%] left-[5%] footer-float-2" style={{'--base-rotate': 'rotate(-8deg)'}}>
            <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center">
              <div className="w-10 h-8 bg-gray-100 rounded-xl relative flex items-center justify-center gap-1 border border-gray-200">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="absolute -bottom-1.5 left-2 w-3 h-3 bg-gray-100 border-b border-l border-gray-200 transform -rotate-45"></div>
              </div>
            </div>
          </div>

          {/* 6. Dark Clock */}
          <div className="hidden md:block absolute top-[50%] left-[35%] footer-float-4" style={{'--base-rotate': 'rotate(8deg)'}}>
            <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl relative flex items-center justify-center shadow-lg">
                <div className="absolute w-1 h-3 bg-white rounded-full top-2 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-1 h-2.5 bg-white rounded-full top-1/2 left-1/2 -translate-y-1/2 origin-bottom rotate-45"></div>
              </div>
            </div>
          </div>

          {/* 7. Blue Flag */}
          <div className="hidden md:block absolute top-[25%] left-[48%] footer-float-5" style={{'--base-rotate': 'rotate(0deg)'}}>
            <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-500 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-4 h-full bg-blue-600"></div>
                <div className="absolute top-0 left-2 w-1 h-full bg-white/30"></div>
              </div>
            </div>
          </div>

          {/* 8. Hourglass */}
          <div className="hidden md:block absolute bottom-[10%] left-[55%] footer-float-2" style={{'--base-rotate': 'rotate(12deg)'}}>
            <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/>
              </svg>
            </div>
          </div>

          {/* 9. Lightbulb */}
          <div className="hidden md:block absolute top-[35%] right-[8%] footer-float-4" style={{'--base-rotate': 'rotate(-12deg)'}}>
            <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center">
              <svg className="w-10 h-10 text-orange-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1zM10 20h4v2h-4z"/>
              </svg>
            </div>
          </div>

          {/* 10. Fast Forward Arrows */}
          <div className="hidden md:block absolute bottom-[20%] right-[2%] footer-float-5" style={{'--base-rotate': 'rotate(0deg)'}}>
            <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center gap-0.5">
               <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/></svg>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION: Copyright & Legal --- */}
        <div className="relative z-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500 font-medium">
          <p>© 2024. All rights reserved.</p>
          {/* <div className="flex items-center gap-8">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div> */}
          <p className='tracking-wide cursor-pointer'>Designed by <span className='text-indigo-600'>Taha</span></p>
        </div>

      </div>
    </footer>
  );
}