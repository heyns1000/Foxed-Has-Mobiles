export default function CompetitionOverview() {
  const categories = [
    {
      id: 1,
      icon: "🦊",
      title: "Foxed Has Mobiles™ – The 1/1 Apparel Oracle",
      description: "Wearable interpretations of \"Foxed Has Mobiles™\". Include the phrase, embed atom-level details like hidden codes, GPS, seeds. One-of-one designs only.",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["1/1 Designs", "Hidden Tech", "GPS Embedded"]
    },
    {
      id: 2,
      icon: "🍉",
      title: "Mr Fruitful™'s Olympic Threads",
      description: "Design athlete gear for Crate Dance Olympics™. Must include hidden Baobab or Snotneus symbols. Focus: fruit, fire, function.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Athletic Gear", "Hidden Symbols", "Olympics Ready"]
    },
    {
      id: 3,
      icon: "📦",
      title: "Water the Seed™ – Brandborn Creations",
      description: "Create logos, frames, packaging for any of 139+ FAA brands. Any medium accepted — even painted dirt.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["139+ Brands", "Any Medium", "Creative Freedom"]
    },
    {
      id: 4,
      icon: "🧬",
      title: "Playing with the Seed™ – Chaos Cartography",
      description: "Submit memes, glitchwear, absurdist artifacts representing brand collapse into new culture.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Meme Culture", "Glitch Art", "Absurdist"]
    },
    {
      id: 5,
      icon: "🌍",
      title: "Crate Dance Showcase™: Stage & Nation Design",
      description: "Stage and nation layouts made from crates. 2D / 3D blueprints. Cosmic bridges welcome.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Crate Design", "3D Blueprints", "Cosmic Bridges"]
    },
    {
      id: 6,
      icon: "🎓",
      title: "FAA University Identity Deck",
      description: "Create FAA University student identity assets: cards, robes, stamps, crests with Baobab + Compliance Seal + Snotneus Welcome.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Identity Cards", "Baobab Symbols", "Compliance Seal"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="competition" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">📜 Master Competition Suite</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900">Launched By:</h4>
              <p className="text-gray-700">Heyns Schoeman & Baobab Whisperer Protocols</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900">Governance:</h4>
              <p className="text-gray-700">FAA Interbrand + Yield Design Council</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900">Archive:</h4>
              <p className="text-gray-700">Vault Zero + Seed Satellite Nodes</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900">Protocol Base:</h4>
              <p className="text-gray-700">Atom-Level Design & Interbrand Symbology</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center text-blue-600 mb-12">Competition Categories</h3>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <div key={category.id} className="competition-card bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="category-icon">{category.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.id}. {category.title}</h3>
                  <div className="mb-4">
                    <img 
                      src={category.image} 
                      alt={`${category.title} design reference`} 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          index === 0 ? 'bg-blue-100 text-blue-800' :
                          index === 1 ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('rules')}
            className="cta-button text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center space-x-3 no-underline"
          >
            <span>View Challenge Rules</span>
            <i className="fas fa-gavel"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
