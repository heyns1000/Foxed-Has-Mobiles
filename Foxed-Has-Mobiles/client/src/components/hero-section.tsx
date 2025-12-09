export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Fox silhouette background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="text-8xl mb-6">🦊</div>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
          Foxed Has Mobiles™
        </h1>
        <p className="text-2xl md:text-3xl text-blue-600 italic mb-8 font-medium">
          "The fox doesn't speak — it routes."
        </p>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
          "Not what it is — what it means."
        </p>
        <div className="space-y-6">
          <button 
            onClick={() => scrollToSection('competition')}
            className="cta-button text-white font-bold py-4 px-8 rounded-full text-xl inline-flex items-center space-x-3 no-underline hover-lift animate-glow-pulse"
          >
            <span>↓ Enter The Archive</span>
            <i className="fas fa-arrow-down"></i>
          </button>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <a href="/dashboard" className="bg-white text-blue-600 font-semibold py-3 px-4 rounded-full hover-lift hover-glow transition-all text-sm animate-fade-in">
              📊 Dashboard
            </a>
            <a href="/ai-feedback" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-full hover-lift transition-all text-sm animate-fade-in-delay">
              🤖 AI Feedback
            </a>
            <a href="/collaboration" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-4 rounded-full hover-lift transition-all text-sm animate-fade-in-delay">
              🤝 Collaborate
            </a>
            <a href="/achievements" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-4 rounded-full hover-lift transition-all text-sm animate-fade-in-delay">
              🏆 Compete
            </a>
            <a href="/submissions" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-4 rounded-full hover-lift transition-all text-sm animate-fade-in-delay">
              📝 Submit
            </a>
            <a href="/gallery" className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-4 rounded-full hover-lift transition-all text-sm animate-fade-in-delay">
              🎨 Gallery
            </a>
            <a href="/analytics" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-full hover-lift transition-all text-sm animate-fade-in-delay">
              📈 Analytics
            </a>
            <a href="/get-started" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 rounded-full hover-lift transition-all text-sm animate-bounce-in font-bold">
              🚀 Start Now
            </a>
          </div>
          
          <div className="text-center pt-4">
            <div className="inline-flex items-center gap-4 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="animate-pulse">🔥 Live Collaboration</span>
              <span className="animate-pulse">🤖 AI-Powered Feedback</span>
              <span className="animate-pulse">🏆 Gamified Experience</span>
              <span className="animate-pulse">📊 Real-Time Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
