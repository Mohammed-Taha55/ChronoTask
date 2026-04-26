import React from 'react';

const testimonials = [
  {
    id: 1, text: "This task manager has completely transformed the way my team works. We now collaborate in real-time and always meet deadlines.",
    name: "John D.", role: "Marketing Lead", avatar: "https://i.pravatar.cc/150?img=11", rating: 5,
  },
  {
    id: 2, text: "I love how easy it is to create and assign tasks. The platform's interface makes work feel less overwhelming.",
    name: "Daniela T.", role: "Operations Manager", avatar: "https://i.pravatar.cc/150?img=5", rating: 5,
  },
  {
    id: 3, text: "We migrated our entire company over to ChronoTask in less than a week. The automated workflows save us countless hours.",
    name: "Marcus R.", role: "CTO", avatar: "https://i.pravatar.cc/150?img=33", rating: 5,
  },
  {
    id: 4, text: "An essential tool for anyone looking to manage their tasks better. Clean design and genuinely useful features.",
    name: "Sarah W.", role: "Freelance Designer", avatar: "https://i.pravatar.cc/150?img=9", rating: 5,
  },
  {
    id: 5, text: "The time-tracking feature has been a game-changer for my freelance projects. It helps me stay organized and productive.",
    name: "Alex M.", role: "Freelance Developer", avatar: "https://i.pravatar.cc/150?img=12", rating: 5,
  },
  {
    id: 6, text: "Finally, a tool that visualizes my week exactly how my brain works. The kanban boards are incredibly intuitive.",
    name: "David K.", role: "Content Creator", avatar: "https://i.pravatar.cc/150?img=55", rating: 5,
  },
  {
    id: 7, text: "The integration with Google Drive and Slack means I never have to leave the app. Everything is centralized.",
    name: "Rachel P.", role: "HR Director", avatar: "https://i.pravatar.cc/150?img=60", rating: 4,
  },
  {
    id: 8, text: "Customer support is top-notch. They helped us set up custom kanban boards in 10 minutes.",
    name: "Lisa F.", role: "Agency Owner", avatar: "https://i.pravatar.cc/150?img=68", rating: 5,
  },
];

/* ── Star Rating Component ── */
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Reusable Card Component ── */
function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between h-full w-full">
      <div>
        <Stars count={item.rating} />
        <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
          "{item.text}"
        </p>
      </div>
      <div className="flex items-center gap-3 mt-8 pt-5 border-t border-gray-50">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
          loading="lazy"
        />
        <div>
          <h4 className="text-[15px] font-bold text-gray-900 leading-tight">{item.name}</h4>
          <p className="text-[13px] text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Split data for the two desktop marquee rows
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden w-full">
      
      {/* ── CSS Animations & Scrollbar Hiding ── */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Marquee Keyframes */
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }

        /* Pause on hover for desktop */
        .marquee-group:hover .animate-scroll-left,
        .marquee-group:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Header ── */}
      <div className="text-center mb-16 px-5 relative z-10">
        <div className="inline-block bg-white border border-gray-200 rounded-full px-5 py-1.5 mb-6 shadow-sm">
          <span className="text-sm text-gray-500 font-medium tracking-wide">Testimonials</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-4">
          Trusted by teams <br className="hidden sm:block" />
          around the world
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-lg">
          See how ChronoTask is transforming workflows and saving hours of manual work every week.
        </p>
      </div>

      {/* ── MOBILE VIEW: Native CSS Scroll Snap ── */}
      {/* This uses native browser scrolling, making it perfectly smooth and impossible to overflow the page width. */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-5 pb-8 w-full">
        {testimonials.map((item) => (
          <div key={item.id} className="snap-center shrink-0 w-[85vw] h-auto">
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>

      {/* ── DESKTOP VIEW: Dual Horizontal Marquee ── */}
      <div className="hidden md:flex flex-col gap-6 relative w-full marquee-group">
        
        {/* Soft fade gradients on the left and right edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

        {/* Top Row: Scrolls Left */}
        <div className="flex w-max animate-scroll-left gap-6 px-3">
          {/* Duplicated 3 times to ensure the loop is seamless on ultra-wide monitors */}
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div key={`row1-${idx}`} className="w-[400px] shrink-0">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Bottom Row: Scrolls Right */}
        <div className="flex w-max animate-scroll-right gap-6 px-3">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div key={`row2-${idx}`} className="w-[400px] shrink-0">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}