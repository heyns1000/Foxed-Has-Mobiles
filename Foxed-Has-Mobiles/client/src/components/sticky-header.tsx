import { useState } from "react";

export default function StickyHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 sticky-nav border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-white text-2xl font-bold">Fruitful™</span>
            <span className="text-gray-400 text-xl">|</span>
            <span className="text-white text-2xl font-bold">Banimal</span>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors text-sm">📊 Dashboard</a>
            <a href="/submissions" className="text-gray-300 hover:text-white transition-colors text-sm">📝 Submit</a>
            <a href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">🎨 Gallery</a>
            <a href="/collaboration" className="text-gray-300 hover:text-white transition-colors text-sm">🤝 Collab</a>
            <a href="/ai-feedback" className="text-gray-300 hover:text-white transition-colors text-sm">🤖 AI Feedback</a>
            <a href="/analytics" className="text-gray-300 hover:text-white transition-colors text-sm">📈 Analytics</a>
            <a href="/achievements" className="text-gray-300 hover:text-white transition-colors text-sm">🏆 Achievements</a>
            <a href="/noodle-mountain" className="text-gray-300 hover:text-white transition-colors text-sm font-bold">🍜 Noodle Mountain</a>
            <a href="/forum" className="text-gray-300 hover:text-white transition-colors text-sm">💬 Forum</a>
            <a href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">❓ FAQ</a>
            <a href="/get-started" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full hover-glow transition-all text-sm font-semibold">🚀 Start</a>
          </div>
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('competition')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Competition
              </button>
              <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors text-left">📊 Dashboard</a>
              <a href="/submissions" className="text-gray-300 hover:text-white transition-colors text-left">📝 Submissions</a>
              <a href="/gallery" className="text-gray-300 hover:text-white transition-colors text-left">🎨 Gallery</a>
              <a href="/collaboration" className="text-gray-300 hover:text-white transition-colors text-left">🤝 Collaboration</a>
              <a href="/ai-feedback" className="text-gray-300 hover:text-white transition-colors text-left">🤖 AI Feedback</a>
              <a href="/analytics" className="text-gray-300 hover:text-white transition-colors text-left">📈 Analytics</a>
              <a href="/achievements" className="text-gray-300 hover:text-white transition-colors text-left">🏆 Achievements</a>
              <a href="/noodle-mountain" className="text-gray-300 hover:text-white transition-colors text-left font-bold">🍜 Noodle Mountain</a>
              <a href="/forum" className="text-gray-300 hover:text-white transition-colors text-left">💬 Forum</a>
              <a href="/faq" className="text-gray-300 hover:text-white transition-colors text-left">❓ FAQ</a>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                💰 Pricing
              </button>
              <a href="/get-started" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-center mt-3">🚀 Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
