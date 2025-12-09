import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { useState } from "react";
import { CheckCircle, Circle, ArrowRight, Star, Clock, Trophy, Users } from "lucide-react";

const competitions = [
  {
    id: "foxed-mobiles",
    name: "Foxed Has Mobiles™",
    icon: "🦊",
    category: "1/1 Apparel Oracle",
    difficulty: "Advanced",
    duration: "2-4 weeks",
    prize: "R5,000",
    description: "Create unique, one-of-one apparel designs that push creative boundaries",
    requirements: ["Adobe Creative Suite", "Fashion design experience", "Original concepts only"],
    participants: 156,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "fruitful-olympic",
    name: "Mr Fruitful™'s Olympic Threads",
    icon: "🍉",
    category: "Olympic Design",
    difficulty: "Intermediate",
    duration: "1-3 weeks",
    prize: "R3,500",
    description: "Design Olympic-inspired athletic wear with fresh, fruity aesthetics",
    requirements: ["Sports design knowledge", "Color theory", "Print design skills"],
    participants: 89,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "water-seed",
    name: "Water the Seed™",
    icon: "📦",
    category: "Brandborn Creations",
    difficulty: "Beginner",
    duration: "1-2 weeks",
    prize: "R2,500",
    description: "Develop brand identities for emerging sustainable startups",
    requirements: ["Logo design", "Brand guidelines", "Sustainability focus"],
    participants: 203,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "playing-seed",
    name: "Playing with the Seed™",
    icon: "🧬",
    category: "Chaos Cartography",
    difficulty: "Expert",
    duration: "3-5 weeks",
    prize: "R7,500",
    description: "Map abstract concepts through chaotic design methodologies",
    requirements: ["Advanced design theory", "Abstract thinking", "Experimental approach"],
    participants: 134,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "crate-dance",
    name: "Crate Dance Showcase™",
    icon: "🌍",
    category: "Stage & Nation Design",
    difficulty: "Intermediate",
    duration: "2-3 weeks",
    prize: "R4,000",
    description: "Design stage sets and national representations for dance performances",
    requirements: ["3D modeling", "Stage design", "Cultural sensitivity"],
    participants: 67,
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: "faa-university",
    name: "FAA University Identity Deck",
    icon: "🎓",
    category: "University Branding",
    difficulty: "Beginner",
    duration: "1-2 weeks",
    prize: "R2,000",
    description: "Create comprehensive identity systems for educational institutions",
    requirements: ["Brand identity", "Educational focus", "Professional presentation"],
    participants: 45,
    color: "from-yellow-500 to-orange-500"
  }
];

const steps = [
  {
    id: 1,
    title: "Choose Your Competition",
    description: "Select the category that matches your skills and interests",
    completed: false
  },
  {
    id: 2,
    title: "Review Requirements",
    description: "Understand the specific requirements and judging criteria",
    completed: false
  },
  {
    id: 3,
    title: "Join FAA.ZONE™",
    description: "Select your pricing tier and access submission tools",
    completed: false
  },
  {
    id: 4,
    title: "Start Creating",
    description: "Begin working on your submission with our tools and resources",
    completed: false
  },
  {
    id: 5,
    title: "Submit & Track",
    description: "Upload your work and monitor progress through the dashboard",
    completed: false
  }
];

function WizardStep({ step, isActive, onComplete }: any) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg transition-all ${isActive ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'}`}>
      <button 
        onClick={() => onComplete(step.id)}
        className="flex-shrink-0"
        data-testid={`button-step-${step.id}`}
      >
        {step.completed ? (
          <CheckCircle className="h-8 w-8 text-green-500" />
        ) : (
          <Circle className="h-8 w-8 text-muted-foreground" />
        )}
      </button>
      <div className="flex-1">
        <h3 className="font-semibold" data-testid={`text-step-title-${step.id}`}>{step.title}</h3>
        <p className="text-sm text-muted-foreground" data-testid={`text-step-description-${step.id}`}>{step.description}</p>
      </div>
    </div>
  );
}

function CompetitionSelectionCard({ competition, selected, onSelect }: any) {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${selected ? 'ring-2 ring-primary' : ''}`}
      onClick={() => onSelect(competition.id)}
      data-testid={`card-competition-${competition.id}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl" data-testid={`icon-${competition.id}`}>{competition.icon}</span>
            <div>
              <CardTitle className="text-lg" data-testid={`text-name-${competition.id}`}>{competition.name}</CardTitle>
              <p className="text-sm text-muted-foreground" data-testid={`text-category-${competition.id}`}>{competition.category}</p>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="outline" className={`bg-gradient-to-r ${competition.color} text-white border-0`} data-testid={`badge-difficulty-${competition.id}`}>
              {competition.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4" data-testid={`text-description-${competition.id}`}>{competition.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm" data-testid={`text-duration-${competition.id}`}>{competition.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-semibold" data-testid={`text-prize-${competition.id}`}>{competition.prize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm" data-testid={`text-participants-${competition.id}`}>{competition.participants} joined</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm" data-testid={`text-rating-${competition.id}`}>4.8/5 rating</span>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium mb-2">Requirements:</p>
          <div className="flex flex-wrap gap-1">
            {competition.requirements.map((req: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-requirement-${competition.id}-${index}`}>
                {req}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedCompetition, setSelectedCompetition] = useState<string | null>(null);
  const [wizardSteps, setWizardSteps] = useState(steps);

  const completeStep = (stepId: number) => {
    setCompletedSteps(prev => [...prev, stepId]);
    setWizardSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, completed: true } : step
    ));
    if (stepId === currentStep) {
      setCurrentStep(stepId + 1);
    }
  };

  const progress = (completedSteps.length / wizardSteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Get Started Wizard"
        subtitle="Your guided journey to competition success"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" data-testid="text-progress-title">
                  <CheckCircle className="h-5 w-5" />
                  Your Progress
                </CardTitle>
                <div>
                  <Progress value={progress} className="h-2" data-testid="progress-wizard" />
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-progress-percentage">
                    {Math.round(progress)}% Complete
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {wizardSteps.map((step) => (
                  <WizardStep
                    key={step.id}
                    step={step}
                    isActive={step.id === currentStep}
                    onComplete={completeStep}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6" data-testid="text-step1-title">Step 1: Choose Your Competition</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {competitions.map((competition) => (
                    <CompetitionSelectionCard
                      key={competition.id}
                      competition={competition}
                      selected={selectedCompetition === competition.id}
                      onSelect={setSelectedCompetition}
                    />
                  ))}
                </div>
                {selectedCompetition && (
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={() => completeStep(1)}
                      size="lg"
                      className="animate-fade-in"
                      data-testid="button-confirm-selection"
                    >
                      Confirm Selection
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6" data-testid="text-step2-title">Step 2: Review Competition Requirements</h2>
                {selectedCompetition && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Judging Criteria</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <div className="text-2xl font-bold text-primary">40%</div>
                            <div className="text-sm">Creativity & Innovation</div>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <div className="text-2xl font-bold text-primary">35%</div>
                            <div className="text-sm">Technical Execution</div>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <div className="text-2xl font-bold text-primary">25%</div>
                            <div className="text-sm">Brand Alignment</div>
                          </div>
                        </div>
                      </div>
                      <Button onClick={() => completeStep(2)} className="w-full" data-testid="button-understand-requirements">
                        I Understand the Requirements
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6" data-testid="text-step3-title">Step 3: Join FAA.ZONE™</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: "Starter", price: "R199", features: ["Basic submission tools", "Email support", "Standard review"] },
                    { name: "Business", price: "R499", features: ["Advanced tools", "Priority support", "Detailed feedback", "Portfolio showcase"] },
                    { name: "Enterprise", price: "R1200", features: ["All tools included", "1-on-1 mentoring", "Premium feedback", "Marketing support"] }
                  ].map((tier) => (
                    <Card key={tier.name} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <CardTitle data-testid={`text-tier-${tier.name.toLowerCase()}`}>{tier.name}</CardTitle>
                        <div className="text-3xl font-bold text-primary" data-testid={`text-price-${tier.name.toLowerCase()}`}>{tier.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm" data-testid={`text-feature-${tier.name.toLowerCase()}-${index}`}>
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="w-full"
                          onClick={() => completeStep(3)}
                          data-testid={`button-select-${tier.name.toLowerCase()}`}
                        >
                          Select {tier.name}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {(currentStep === 4 || currentStep === 5) && (
              <div className="animate-fade-in text-center py-12">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold mb-4" data-testid="text-congratulations">Congratulations!</h2>
                <p className="text-lg text-muted-foreground mb-8" data-testid="text-ready-message">
                  You're all set to begin your competition journey!
                </p>
                <div className="space-y-4">
                  <Link href="/submissions">
                    <Button size="lg" data-testid="button-start-submission">
                      Start Your Submission
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" size="lg" data-testid="button-view-dashboard">
                      View Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}