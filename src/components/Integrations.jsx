import React, { useState, useEffect } from 'react';
import { 
  SiGoogledrive, 
  SiJira, 
  SiGmail, 
  SiFigma, 
  SiSlack,
  SiDiscord,
  SiSalesforce,
  SiZendesk,
  SiIntercom,
  SiEvernote,
  SiGithub,
  SiTrello,
  SiDropbox,
  SiNotion
} from 'react-icons/si';

export default function Integrations() {
  const allIcons = [
    { id: 1, Icon: SiGoogledrive, color: '#00C473' },
    { id: 2, Icon: SiTrello, color: '#0052CC' }, 
    { id: 3, Icon: SiJira, color: '#0052CC' },
    { id: 4, Icon: SiGmail, color: '#EA4335' },
    { id: 5, Icon: SiFigma, color: '#F24E1E' },
    { id: 6, Icon: SiGithub, color: '#181717' }, 
    { id: 7, Icon: SiSlack, color: '#4A154B' },
    { id: 8, Icon: SiDiscord, color: '#5865F2' },
    { id: 9, Icon: SiSalesforce, color: '#00A1E0' },
    { id: 10, Icon: SiZendesk, color: '#03363D' },
    { id: 11, Icon: SiDropbox, color: '#0061FF' }, 
    { id: 12, Icon: SiIntercom, color: '#000000' },
    { id: 13, Icon: SiNotion, color: '#000000' }, 
    { id: 14, Icon: SiEvernote, color: '#00A82D' },
  ];

  const innerIcons = allIcons.slice(0, 6);
  const outerIcons = allIcons.slice(6, 14);

  // State to manage responsive dimensions
  const [layout, setLayout] = useState({
    innerRadius: 140,
    outerRadius: 260,
    containerHeight: 600,
    iconInnerSize: 24,
    iconOuterSize: 28,
    boxInnerClasses: 'w-12 h-12 -left-6 -top-6', // Offsets are strictly half of width/height for perfect centering
    boxOuterClasses: 'w-14 h-14 -left-7 -top-7',
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile layout
        setLayout({
          innerRadius: 90,
          outerRadius: 150,
          containerHeight: 380,
          iconInnerSize: 18,
          iconOuterSize: 20,
          boxInnerClasses: 'w-9 h-9 -left-[18px] -top-[18px]',
          boxOuterClasses: 'w-11 h-11 -left-[22px] -top-[22px]',
        });
      } else if (width < 1024) {
        // Tablet layout
        setLayout({
          innerRadius: 120,
          outerRadius: 210,
          containerHeight: 500,
          iconInnerSize: 20,
          iconOuterSize: 24,
          boxInnerClasses: 'w-10 h-10 -left-5 -top-5',
          boxOuterClasses: 'w-12 h-12 -left-6 -top-6',
        });
      } else {
        // Desktop layout
        setLayout({
          innerRadius: 140,
          outerRadius: 260,
          containerHeight: 600,
          iconInnerSize: 24,
          iconOuterSize: 28,
          boxInnerClasses: 'w-12 h-12 -left-6 -top-6',
          boxOuterClasses: 'w-14 h-14 -left-7 -top-7',
        });
      }
    };

    // Run once on mount to set initial sizes
    handleResize();
    
    // Listen to window changes
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#FAFAFA] overflow-hidden flex flex-col items-center">
      
      <style>
        {`
          @keyframes spin-cw { 100% { transform: rotate(360deg); } }
          @keyframes spin-ccw { 100% { transform: rotate(-360deg); } }
          
          .orbit-outer { animation: spin-cw 45s linear infinite; }
          .counter-outer { animation: spin-ccw 45s linear infinite; }
          
          .orbit-inner { animation: spin-ccw 30s linear infinite; }
          .counter-inner { animation: spin-cw 30s linear infinite; }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        `}
      </style>

      {/* Grid Lines Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] md:bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
      </div>

      {/* Main Heading */}
      <div className="relative z-10 text-center mb-6 md:mb-10 px-4 animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Connect integrations <br className="hidden sm:block" />
          you use every day
        </h2>
      </div>

      {/* The Orbital System Container */}
      <div 
        className="relative w-full max-w-[800px] mx-auto flex items-center justify-center z-10 animate-fade-in-up transition-all duration-500 ease-in-out" 
        style={{ height: layout.containerHeight, animationDelay: '0.2s' }}
      >
        
        {/* Soft edge masking so rings fade out at the top/bottom on smaller screens */}
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)] md:[mask-image:radial-gradient(circle_300px_at_center,black_40%,transparent_100%)] pointer-events-none z-0"></div>

        {/* --- CENTRAL HUB --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="absolute inset-0 bg-blue-500 blur-2xl md:blur-3xl opacity-25 rounded-full animate-pulse"></div>
          <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-[1.25rem] md:rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center border border-gray-100 z-10">
            <div className="grid grid-cols-2 gap-[4px] md:gap-[5px]">
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] bg-blue-500 rounded-full shadow-inner"></div>
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] bg-black rounded-full shadow-inner"></div>
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] bg-black rounded-full shadow-inner"></div>
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] bg-black rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>

        {/* --- INNER RING --- */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 z-20">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-300 orbit-inner transition-all duration-500" 
            style={{ width: layout.innerRadius * 2, height: layout.innerRadius * 2 }}
          >
            {innerIcons.map((item, i) => {
              const angle = (360 / innerIcons.length) * i;
              return (
                <div key={item.id} className="absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500" style={{ transform: `rotate(${angle}deg) translateX(${layout.innerRadius}px)` }}>
                  <div className="counter-inner">
                    <div style={{ transform: `rotate(-${angle}deg)` }}>
                      <div className={`absolute bg-white/90 backdrop-blur-sm rounded-xl md:rounded-[1rem] shadow-lg border border-white flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:z-50 cursor-pointer ${layout.boxInnerClasses}`}>
                        <item.Icon size={layout.iconInnerSize} color={item.color} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- OUTER RING --- */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 z-10">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-300 orbit-outer transition-all duration-500" 
            style={{ width: layout.outerRadius * 2, height: layout.outerRadius * 2 }}
          >
            {outerIcons.map((item, i) => {
              const angle = (360 / outerIcons.length) * i;
              return (
                <div key={item.id} className="absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500" style={{ transform: `rotate(${angle}deg) translateX(${layout.outerRadius}px)` }}>
                  <div className="counter-outer">
                    <div style={{ transform: `rotate(-${angle}deg)` }}>
                      <div className={`absolute bg-white/90 backdrop-blur-sm rounded-xl md:rounded-[1.25rem] shadow-lg border border-white flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:z-50 cursor-pointer ${layout.boxOuterClasses}`}>
                        <item.Icon size={layout.iconOuterSize} color={item.color} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}