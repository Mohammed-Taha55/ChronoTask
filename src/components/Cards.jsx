import React from 'react';

export default function Cards() {
  const plans = [
    {
      name: 'Basic plan',
      description: 'Perfect for individuals.',
      price: '5',
      isPopular: false,
      features: [
        'All product features',
        'Unlimited lists & tasks',
        'Priority support',
        'Unlimited tasks',
        'Unlimited file storage',
        'Unlimited projects',
      ],
    },
    {
      name: 'Pro plan',
      description: 'Ideal for small teams.',
      price: '9',
      isPopular: true,
      features: [
        'All product features',
        'Unlimited lists & tasks',
        'Priority support',
        'Unlimited tasks',
        'Unlimited file storage',
        'Unlimited projects',
      ],
    },
    {
      name: 'Advanced plan',
      description: 'Best for large organizations.',
      price: '15',
      isPopular: false,
      features: [
        'All product features',
        'Unlimited lists & tasks',
        'Priority support',
        'Unlimited tasks',
        'Unlimited file storage',
        'Unlimited projects',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAFAFA] relative flex flex-col items-center">
      
      {/* Inject Floating Animation for the Badge */}
      <style>
        {`
          @keyframes float-badge {
            0% { transform: translateY(0px) rotate(12deg); }
            50% { transform: translateY(-8px) rotate(12deg); }
            100% { transform: translateY(0px) rotate(12deg); }
          }
          .animate-float-badge {
            animation: float-badge 3.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Header */}
      <div className="text-center mb-16 px-4 z-10">
        <div className="inline-block bg-white border border-gray-200 rounded-full px-5 py-1.5 mb-6 shadow-sm">
          <span className="text-sm text-gray-500 font-medium tracking-wide">Pricing</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
          Simple pricing plans
        </h2>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center z-10">
        
        {plans.map((plan) => {
          const isPro = plan.isPopular;

          return (
            <div 
              key={plan.name}
              className={`relative rounded-[2rem] p-8 transition-all duration-300 ease-out 
                ${isPro 
                  ? 'bg-blue-600 text-white shadow-[0_25px_50px_-12px_rgba(37,99,235,0.45)] transform md:-translate-y-4 border border-blue-500 z-20' 
                  : 'bg-white text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 z-10'
                }
              `}
            >
              
              {/* Floating Lightning Bolt Badge (Only on Pro) */}
              {isPro && (
                <div className="absolute -top-6 -right-4 lg:-right-6 w-16 h-16 bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex items-center justify-center animate-float-badge border border-gray-50">
                  <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${isPro ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${isPro ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Thin Divider Line */}
              <div className={`w-full h-px mb-6 ${isPro ? 'bg-blue-500' : 'bg-gray-100'}`}></div>

              {/* Price */}
              <div className="mb-2 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                <span className={`text-lg ml-1 font-medium ${isPro ? 'text-blue-200' : 'text-gray-400'}`}>/mo</span>
              </div>
              
              {/* Sub-label for Pro */}
              <p className={`text-sm mb-6 font-medium ${isPro ? 'text-blue-200 opacity-100' : 'opacity-0'}`}>
                {isPro ? 'Best choice' : 'placeholder'}
              </p>

              {/* CTA Button */}
              <button 
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 mb-8 flex justify-center items-center gap-2
                  ${isPro 
                    ? 'bg-white text-blue-600 hover:bg-gray-50 shadow-md hover:shadow-xl' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40'
                  }
                `}
              >
                Get started
              </button>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg 
                      className={`w-5 h-5 shrink-0 mt-0.5 ${isPro ? 'text-blue-200' : 'text-gray-900'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm font-medium ${isPro ? 'text-blue-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="pt-4 border-t border-transparent">
                <a 
                  href="#" 
                  className={`text-sm font-semibold underline underline-offset-4 decoration-2 transition-colors
                    ${isPro ? 'text-white decoration-blue-400 hover:decoration-white' : 'text-gray-900 decoration-gray-300 hover:decoration-gray-900'}
                  `}
                >
                  Learn more
                </a>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}