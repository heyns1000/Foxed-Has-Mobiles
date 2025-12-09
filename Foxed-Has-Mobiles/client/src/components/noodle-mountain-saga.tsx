export default function NoodleMountainSaga() {
  return (
    <section id="noodle-saga" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-6">🍜 The Noodle Mountain Saga</h2>
          <p className="text-xl text-blue-100 mb-8">From Pot to Paradise: Our Epic Journey Rendered in Full Detail</p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <svg className="w-full h-96" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="sunGradient" cx="90%" cy="10%" r="15%">
                <stop offset="0%" style={{stopColor:"#FFD700", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#FF4500", stopOpacity:1}} />
              </radialGradient>
              <linearGradient id="snowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:"#FFFFFF", stopOpacity:1}} />
                <stop offset="40%" style={{stopColor:"#ADD8E6", stopOpacity:1}} />
                <stop offset="80%" style={{stopColor:"#008000", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#228B22", stopOpacity:1}} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <circle cx="900" cy="80" r="60" fill="url(#sunGradient)" filter="url(#glow)" />
            
            <path 
              d="M 0 200 Q 150 80 300 150 Q 450 50 600 180 Q 750 60 900 200 Q 950 150 1000 220" 
              stroke="url(#snowGradient)" 
              strokeWidth="12" 
              fill="none" 
              strokeLinecap="round" 
            />
            
            <path 
              d="M 0 200 Q 150 80 300 150 Q 450 50 600 180 Q 750 60 900 200 Q 950 150 1000 220" 
              stroke="#000000" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round" 
            />
            
            <text x="200" y="120" textAnchor="middle" fontSize="24" fill="white" className="fox-glyph-animated">🐑</text>
            <text x="500" y="100" textAnchor="middle" fontSize="24" fill="white" className="fox-glyph-animated" style={{animationDelay: "2s"}}>🐑</text>
            <text x="750" y="140" textAnchor="middle" fontSize="24" fill="white" className="fox-glyph-animated" style={{animationDelay: "4s"}}>🐑</text>
            <text x="850" y="180" textAnchor="middle" fontSize="24" fill="white" className="fox-glyph-animated" style={{animationDelay: "6s"}}>🐑</text>
          </svg>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold mb-3">Mountains</h3>
            <p className="text-blue-100">Epic peaks reaching toward infinity</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🐑</div>
            <h3 className="text-xl font-bold mb-3">Sheep</h3>
            <p className="text-blue-100">Faithful companions on the journey</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🌅</div>
            <h3 className="text-xl font-bold mb-3">Sunrise</h3>
            <p className="text-blue-100">Dawn of new possibilities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
