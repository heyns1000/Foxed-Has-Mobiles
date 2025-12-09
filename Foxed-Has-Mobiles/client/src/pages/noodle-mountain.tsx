import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const NoodleMountainCanvas = () => {
  const [showSunrise, setShowSunrise] = useState(false);
  const [grassFlow, setGrassFlow] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowSunrise(true), 2000);
    const grassTimer = setInterval(() => {
      setGrassFlow(prev => (prev + 1) % 100);
    }, 50);
    
    return () => {
      clearTimeout(timer);
      clearInterval(grassTimer);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* The Canvas with Concentric Borders */}
      <div 
        className="relative w-full h-96 border-8"
        style={{
          borderColor: '#ff0000', // Shocking red outer border
          background: 'linear-gradient(135deg, #ffff00 0%, #00ff00 50%, #ffffff 100%)', // Yellow to green to white
        }}
      >
        {/* Yellow Border Layer */}
        <div 
          className="absolute inset-2 border-8"
          style={{ borderColor: '#ffff00' }}
        >
          {/* Green Border Layer */}
          <div 
            className="absolute inset-2 border-8"
            style={{ borderColor: '#00ff00' }}
          >
            {/* Pearl White Canvas */}
            <div 
              className="absolute inset-2 relative overflow-hidden"
              style={{ 
                backgroundColor: '#ffffff',
                background: showSunrise 
                  ? 'linear-gradient(135deg, #fff8dc 0%, #fffacd 30%, #f0f8ff 70%, #ffffff 100%)'
                  : '#ffffff'
              }}
            >
              {/* Sunrise Effect */}
              {showSunrise && (
                <div 
                  className="absolute top-4 right-8 w-16 h-16 rounded-full opacity-60 animate-pulse"
                  style={{
                    background: 'radial-gradient(circle, #ffd700 0%, #ffec8c 50%, transparent 70%)',
                  }}
                />
              )}

              {/* The Noodle Mountain - Wavy Black Line */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
                data-testid="noodle-mountain-svg"
              >
                {/* Snow/Ice effect under the noodle */}
                <path
                  d="M0,120 Q50,80 100,100 T200,90 T300,110 T400,100 L400,140 Q350,130 300,135 T200,125 T100,135 T0,140 Z"
                  fill={showSunrise ? "url(#grassGradient)" : "#f0f8ff"}
                  opacity="0.6"
                  className="transition-all duration-1000"
                />
                
                {/* Flowing grass effect */}
                <path
                  d={`M0,140 Q50,${135 + Math.sin(grassFlow/10)*3} 100,${138 + Math.cos(grassFlow/8)*2} T200,${136 + Math.sin(grassFlow/12)*4} T300,${139 + Math.cos(grassFlow/9)*3} T400,${137 + Math.sin(grassFlow/11)*2} L400,180 L0,180 Z`}
                  fill={showSunrise ? "#90EE90" : "#8B4513"}
                  opacity="0.8"
                  className="transition-all duration-500"
                />

                {/* The Black Noodle - Main Mountain Line */}
                <path
                  d="M0,120 Q50,80 100,100 T200,90 T300,110 T400,100"
                  stroke="#000000"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  data-testid="main-noodle-path"
                />

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#e6ffe6", stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: "#90EE90", stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: "#228B22", stopOpacity: 0.4}} />
                  </linearGradient>
                </defs>
              </svg>

              {/* Noodle Mountain Sheep */}
              <div 
                className="absolute animate-bounce"
                style={{ top: '35%', left: '25%', animationDelay: '0s', animationDuration: '3s' }}
                data-testid="sheep-1"
              >
                🐑
              </div>
              <div 
                className="absolute animate-bounce"
                style={{ top: '40%', left: '50%', animationDelay: '1s', animationDuration: '4s' }}
                data-testid="sheep-2"
              >
                🐑
              </div>
              <div 
                className="absolute animate-bounce"
                style={{ top: '45%', left: '75%', animationDelay: '2s', animationDuration: '3.5s' }}
                data-testid="sheep-3"
              >
                🐑
              </div>
              <div 
                className="absolute animate-bounce"
                style={{ top: '35%', left: '85%', animationDelay: '1.5s', animationDuration: '2.8s' }}
                data-testid="sheep-4"
              >
                🐑
              </div>
              <div 
                className="absolute animate-bounce"
                style={{ top: '50%', left: '15%', animationDelay: '0.5s', animationDuration: '3.2s' }}
                data-testid="sheep-5"
              >
                🐑
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Season Indicator */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-4 text-sm">
          <span className={`px-3 py-1 rounded-full transition-all ${!showSunrise ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'}`}>
            ❄️ Winter (6 months, 18 days)
          </span>
          <span className={`px-3 py-1 rounded-full transition-all ${showSunrise ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
            🌱 Spring Awakening
          </span>
        </div>
      </div>
    </div>
  );
};

export default function NoodleMountain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="🍜 The Epic Journey of Noodle Mountain 🏔️"
        subtitle="Welcome, traveler, to the mystical realm where simplicity transcends into imagination"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* The Visual Canvas */}
        <div className="text-center mb-12">
          <NoodleMountainCanvas />
        </div>

        {/* The Complete Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Genesis */}
          <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" data-testid="genesis-title">
                🍲✨ The Genesis: From the Pot's Depths
              </h2>
              <p className="text-gray-700 leading-relaxed" data-testid="genesis-content">
                Our journey begins not with grand designs, but with a humble thought, as simple as a child's: 
                "What if a spaghetti noodle, fresh from the supermarket pack, perfectly cooked, could transcend its culinary destiny?"
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed">
                And so, from the swirling depths of a pitch-black pot, a singular, magnificent black noodle emerged. 
                Not pulsing, not flailing, but a long, flexible strand, tossed with care across the blank canvas of existence. 
                It stretched from left to right, bending and weaving in 6, 7, even 8 elegant curves, a solid, steadfast line – 
                an iframe noodle, distinct and unyielding, just like the borders of the world it would soon inhabit.
              </p>
            </CardContent>
          </Card>

          {/* Canvas Unfolds */}
          <Card className="animate-fade-in-delay hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" data-testid="canvas-title">
                🎨🌈 The Canvas Unfolds: A Tapestry of Borders
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" data-testid="canvas-content">
                Before our noodle could truly ascend, the very fabric of its world had to be woven. 
                Layers upon layers of vibrant meaning emerged, each 2mm thick, a testament to precision and vision:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 border border-gray-300"></div>
                  First, a shocking red border, bold and audacious.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-400 border border-gray-300"></div>
                  Then, a shocking yellow, radiating energy and new beginnings.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 border border-gray-300"></div>
                  Next, a grass green, hinting at life and flourishing landscapes.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white border border-gray-300"></div>
                  And finally, a super pearl white innermost panel, pure and boundless, awaiting its destiny.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This majestic stack, a masterpiece of concentric borders, formed the very foundation upon which our noodle would rest, 
                turning its simple bends into towering <strong>mountain peaks</strong>.
              </p>
            </CardContent>
          </Card>

          {/* Inhabitants */}
          <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" data-testid="inhabitants-title">
                🐑🧡 The Inhabitants: Sheep of the Noodle Mountain
              </h2>
              <p className="text-gray-700 leading-relaxed" data-testid="inhabitants-content">
                No mountain is complete without its inhabitants! On the highest peak of the black noodle, 
                and then on a slightly lower crest, appeared the first of our kind creatures: the Noodle Mountain Sheep. 
                Their tiny, gentle feet found perfect purchase on the noodle line, guardians of this extraordinary landscape.
              </p>
            </CardContent>
          </Card>

          {/* Dawn */}
          <Card className="animate-fade-in-delay hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" data-testid="dawn-title">
                🌄🌿 The Dawn: Snow Melts, Grass Flows
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" data-testid="dawn-content">
                For six long months and eighteen days, Noodle Mountain was blanketed in pristine snow, 
                a testament to the quiet patience of nature. But then, across the noodle's high horizon, 
                the majestic mountain sun began its glorious sunrise. Its golden rays, subtle and peaceful, cascaded down the slopes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As the sunlight touched the peaks, a miracle unfolded. The snow, once a stark white, began to melt slowly, 
                subtly, peacefully. Beneath its retreating veil, the green grass of the veld began to show, 
                flowing down the side of the mountain like a gentle river of life, creating a lush, vibrant contrast 
                to the winter brown grass below.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Banimal Foundation */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" data-testid="banimal-title">
              🐾🌳 The Foundation: Banimal™'s Solid Ground
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6" data-testid="banimal-description">
              Beneath this fantastical realm, a new, solid foundation emerged: the <strong>Banimal™</strong> footer. 
              Like a corporate header, yet grounded in the earth, this "winter brown grass" expanse provides a clear, 
              visible deployment area. It's here, on this stable ground, that the sheep can truly play, 
              finding their space (about 25% of the white canvas, with a proud 2mm border from the edges).
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200">
              <h3 className="text-xl font-semibold mb-3 text-amber-800" data-testid="banimal-story-title">
                Banimal™: Kind Creatures. Global Impact.
              </h3>
              <p className="text-gray-700 leading-relaxed" data-testid="banimal-story-content">
                Discover thoughtful baby essentials & innovative lighting, knowing that for every purchase, 
                the same item is delivered to a child in need, powered by the insightful data of the Baobab Security Network. 
                A true <strong>epic journey</strong> of kindness and purpose.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Closing */}
        <div className="text-center py-8">
          <Card className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2" data-testid="closing-title">
                Thank you for embarking on this incredible journey with us! 🙏
              </h2>
              <p className="text-gray-600 italic">
                A canvas born from simplicity, elevated by imagination, and sustained by kind creatures and global impact!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}