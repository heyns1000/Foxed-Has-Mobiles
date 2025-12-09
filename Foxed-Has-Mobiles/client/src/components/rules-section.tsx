export default function RulesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="rules" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-6">⚖️ Competition Rules & Guidelines</h2>
          <p className="text-xl text-gray-700">Essential requirements for all competition categories</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-file-alt text-blue-600 mr-3"></i>
              Submission Requirements
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>All entries must be original work by participants</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>Maximum 5 entries per participant per category</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>File formats: JPEG, PNG, PDF, ZIP (max 5MB)</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>Include detailed project description (500 words max)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-trophy text-yellow-600 mr-3"></i>
              Judging Criteria
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span>Technical skill and execution quality</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span>Creativity and originality</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span>Adherence to category-specific requirements</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-star text-yellow-500 mt-1"></i>
                <span>Integration of required symbols/elements</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">🏆 Prizes & Recognition</h3>
            <div className="space-y-2 text-blue-800">
              <p><strong>1st Place:</strong> R50,000 + Featured in FAA Gallery</p>
              <p><strong>2nd Place:</strong> R25,000 + Design Mentorship</p>
              <p><strong>3rd Place:</strong> R10,000 + FAA.ZONE Premium Access</p>
              <p><strong>All Winners:</strong> Certificate + Portfolio Feature</p>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-900 mb-4">📅 Important Dates</h3>
            <div className="space-y-2 text-green-800">
              <p><strong>Registration Opens:</strong> January 15, 2025</p>
              <p><strong>Submission Deadline:</strong> March 31, 2025</p>
              <p><strong>Judging Period:</strong> April 1-15, 2025</p>
              <p><strong>Winners Announced:</strong> April 30, 2025</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('competition')}
            className="cta-button text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center space-x-3 no-underline"
          >
            <span>Register for Competition</span>
            <i className="fas fa-sign-in-alt"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
