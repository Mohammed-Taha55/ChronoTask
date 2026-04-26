import React, { useState, useEffect, useRef } from 'react';
import { 
  SiSlack, 
  SiJira, 
  SiGithub, 
  SiNotion, 
  SiGoogledrive, 
  SiFigma 
} from 'react-icons/si';

export default function LiveIntegrations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- STATE FOR CARD 2: INTERACTIVE TOGGLES ---
  const [connections, setConnections] = useState({
    slack: true,
    notion: false,
    jira: true,
  });

  const toggleConnection = (app) => {
    setConnections(prev => ({ ...prev, [app]: !prev[app] }));
  };

  // --- STATE FOR CARD 3: LIVE TERMINAL LOGS ---
  const allLogs = [
    { time: '10:42:01', app: 'Slack', msg: 'Message sent to #engineering' },
    { time: '10:42:15', app: 'Jira', msg: 'Ticket CT-84 moved to "Done"' },
    { time: '10:42:33', app: 'GitHub', msg: 'PR #102 merged successfully' },
    { time: '10:43:05', app: 'Figma', msg: 'New comments on "Dashboard UI"' },
    { time: '10:43:22', app: 'Notion', msg: 'Page "Q3 Roadmap" updated' },
    { time: '10:44:10', app: 'Drive', msg: 'File "Assets.zip" synchronized' },
  ];
  
  const [logs, setLogs] = useState(allLogs.slice(0, 3));
  const [logIndex, setLogIndex] = useState(3);

  useEffect(() => {
    // Add a new log every 3 seconds to simulate live data
    const interval = setInterval(() => {
      setLogs(currentLogs => {
        const nextLog = allLogs[logIndex % allLogs.length];
        // Keep only the last 4 logs to prevent the card from growing
        const newLogs = [...currentLogs, nextLog];
        return newLogs.length > 4 ? newLogs.slice(1) : newLogs;
      });
      setLogIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [logIndex]);


  return (
    // STRICT max-width and overflow-x-hidden on the absolute outermost wrapper
    <section 
      ref={sectionRef} 
      className="py-14 md:py-28 bg-[#FAFAFA] relative w-full max-w-[100vw] overflow-x-hidden"
    >
      {/* ── CSS Animations ── */}
      <style>{`
        @keyframes ping-slow {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-y {
          animation: float-y 4s ease-in-out infinite;
        }
        /* Smooth log entrance */
        @keyframes log-enter {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-log-enter {
          animation: log-enter 0.4s ease-out forwards;
        }
      `}</style>

      {/* Dotted Background */}
      <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        
        {/* Header */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block bg-white border border-gray-200 rounded-full px-5 py-1.5 mb-4 md:mb-6 shadow-sm">
            <span className="text-sm text-gray-500 font-medium tracking-wide">Integrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Connect your <span className="text-blue-600">entire stack.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            ChronoTask plays nicely with the tools you already use, keeping your data synced flawlessly in real-time.
          </p>
        </div>

        {/* 3-Column Grid (Stacks perfectly to 1 column on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 w-full">

          {/* ==========================================
              CARD 1: PULSE SYNC
          ========================================== */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-[300px] md:h-[380px] relative overflow-hidden group">
            <div className="mb-3 md:mb-4 relative z-20">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Real-time Sync</h3>
              <p className="text-sm text-gray-500 mt-1">Data flows instantly between apps.</p>
            </div>

            {/* Visual Area */}
            <div className="flex-1 flex items-center justify-center relative z-10 mt-4">
              {/* Pulsing rings */}
              <div className="absolute w-32 h-32 border border-blue-200 rounded-full animate-ping-slow opacity-50"></div>
              <div className="absolute w-48 h-48 border border-blue-100 rounded-full animate-ping-slow opacity-30" style={{ animationDelay: '1s' }}></div>

              {/* Center App (ChronoTask mock icon) */}
              <div className="relative w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center z-20">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                </div>
              </div>

              {/* Orbiting / Floating Apps */}
              <div className="absolute top-[10%] left-[15%] w-10 h-10 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center animate-float-y" style={{ animationDelay: '0s' }}>
                <SiFigma className="text-[#F24E1E] text-xl" />
              </div>
              <div className="absolute top-[20%] right-[10%] w-12 h-12 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center animate-float-y" style={{ animationDelay: '1s' }}>
                <SiSlack className="text-[#4A154B] text-2xl" />
              </div>
              <div className="absolute bottom-[15%] left-[20%] w-10 h-10 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center animate-float-y" style={{ animationDelay: '2s' }}>
                <SiGoogledrive className="text-[#00C473] text-xl" />
              </div>
              <div className="absolute bottom-[20%] right-[20%] w-10 h-10 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center animate-float-y" style={{ animationDelay: '1.5s' }}>
                <SiJira className="text-[#0052CC] text-xl" />
              </div>
            </div>
          </div>

          {/* ==========================================
              CARD 2: INTERACTIVE TOGGLES
          ========================================== */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-[320px] md:h-[380px] relative overflow-hidden">
            <div className="mb-4 md:mb-6 relative z-20">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">1-Click Connect</h3>
              <p className="text-sm text-gray-500 mt-1">Try it out: Toggle apps on or off.</p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 relative z-10 w-full">
              
              {/* Slack Toggle */}
              <div className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100 transition-colors hover:bg-gray-100 cursor-pointer" onClick={() => toggleConnection('slack')}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <SiSlack className="text-[#4A154B] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Slack</h4>
                    <p className={`text-xs font-medium ${connections.slack ? 'text-green-500' : 'text-gray-400'}`}>
                      {connections.slack ? 'Connected' : 'Disconnected'}
                    </p>
                  </div>
                </div>
                {/* Custom CSS Toggle Switch */}
                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${connections.slack ? 'bg-blue-500' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${connections.slack ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>

              {/* Notion Toggle */}
              <div className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100 transition-colors hover:bg-gray-100 cursor-pointer" onClick={() => toggleConnection('notion')}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <SiNotion className="text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Notion</h4>
                    <p className={`text-xs font-medium ${connections.notion ? 'text-green-500' : 'text-gray-400'}`}>
                      {connections.notion ? 'Connected' : 'Disconnected'}
                    </p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${connections.notion ? 'bg-blue-500' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${connections.notion ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>

              {/* Jira Toggle */}
              <div className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100 transition-colors hover:bg-gray-100 cursor-pointer" onClick={() => toggleConnection('jira')}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <SiJira className="text-[#0052CC] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Jira</h4>
                    <p className={`text-xs font-medium ${connections.jira ? 'text-green-500' : 'text-gray-400'}`}>
                      {connections.jira ? 'Connected' : 'Disconnected'}
                    </p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${connections.jira ? 'bg-blue-500' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${connections.jira ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>

            </div>
          </div>

          {/* ==========================================
              CARD 3: LIVE TERMINAL LOGS
          ========================================== */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-[300px] md:h-[380px] relative overflow-hidden group">
            <div className="mb-3 md:mb-4 relative z-20">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Live Activity Log</h3>
              <p className="text-sm text-gray-500 mt-1">API webhooks registering in real-time.</p>
            </div>

            {/* Mock Terminal Window */}
            <div className="flex-1 bg-gray-900 rounded-2xl p-4 flex flex-col font-mono text-[11px] md:text-xs overflow-hidden relative shadow-inner">
              
              {/* Terminal Header */}
              <div className="flex gap-1.5 mb-4 border-b border-gray-800 pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>

              {/* Logs Container */}
              <div className="flex flex-col gap-3 relative flex-1">
                {logs.map((log, index) => (
                  <div key={`${log.time}-${index}`} className="flex gap-2 animate-log-enter w-full">
                    <span className="text-gray-500 shrink-0">[{log.time}]</span>
                    <span className="text-blue-400 shrink-0">{log.app}:</span>
                    {/* truncate ensures text NEVER pushes the container wide */}
                    <span className="text-green-400 truncate flex-1">{log.msg}</span>
                  </div>
                ))}
                
                {/* Blinking Cursor */}
                <div className="flex gap-2 mt-1">
                  <span className="text-gray-500 shrink-0">[{allLogs[0].time}]</span>
                  <span className="text-gray-400">Waiting for events</span>
                  <span className="w-2 h-3.5 bg-gray-400 animate-pulse"></span>
                </div>
              </div>
              
              {/* Bottom fade for terminal */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}