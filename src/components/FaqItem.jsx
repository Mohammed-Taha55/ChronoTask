import React, { useState } from 'react';

const faqData = [
  { id: 1, question: "What is ChronoTask?", answer: "ChronoTask is an all-in-one task management and productivity platform designed to help individuals and teams think, plan, and track their work efficiently. It combines smart task organization, real-time collaboration, and powerful integrations in a beautifully simple interface." },
  { id: 2, question: "How does ChronoTask integrate with other tools?", answer: "ChronoTask connects with 100+ popular tools including Google Drive, Slack, GitHub, Figma, Jira, Trello, and many more. Integrations are seamless — your data syncs automatically so you never have to leave the app." },
  { id: 3, question: "Can I use ChronoTask for free?", answer: "Yes! ChronoTask offers a Basic plan starting at just $5/month that includes all core product features, unlimited lists and tasks, and priority support. We also offer a free trial so you can explore the platform before committing." },
  { id: 4, question: "Is ChronoTask suitable for teams?", answer: "Absolutely. ChronoTask is built for collaboration. Features like live activity feeds, automated kanban workflows, team analytics, and real-time updates make it perfect for teams of any size." },
  { id: 5, question: "How secure is my data on ChronoTask?", answer: "Security is our top priority. All data is encrypted both in transit and at rest using industry-standard AES-256 encryption. We also offer two-factor authentication, role-based access controls, and comply with SOC 2 and GDPR regulations." },
  { id: 6, question: "Can I access ChronoTask on mobile devices?", answer: "Yes, ChronoTask is fully responsive and works beautifully on any device — desktop, tablet, or smartphone. We also have dedicated native apps for iOS and Android that support offline mode." },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-blue-100 shadow-[0_4px_20px_rgba(59,130,246,0.08)]' : 'border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-gray-200'}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 md:p-6 text-left group">
        <span className={`text-[15px] md:text-base font-semibold pr-4 transition-colors duration-200 ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>{item.question}</span>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-500' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
          <svg className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'text-white' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />}
          </svg>
        </div>
      </button>
      <div className={`transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="h-px bg-gray-100 mb-4"></div>
          <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqItem() {
  const [openId, setOpenId] = useState(1);
  const handleToggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-5 py-1.5 mb-6 shadow-sm">
            <span className="text-sm text-gray-500 font-medium tracking-wide">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Frequently asked <br className="hidden sm:block" />questions
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-base md:text-lg">
            Everything you need to know about ChronoTask.
          </p>
        </div>
        <div className="space-y-3">
          {faqData.map((item) => (
            <AccordionItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => handleToggle(item.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
