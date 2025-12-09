import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Brain, Sparkles, TrendingUp, Eye, Palette, Target, Lightbulb, Zap, CheckCircle, AlertCircle } from "lucide-react";

const aiSuggestions = [
  {
    category: "Color Harmony",
    score: 85,
    feedback: "Your color palette shows strong complementary relationships. Consider adding a warm accent color to increase visual interest.",
    suggestions: ["Try adding golden yellow (#FFD700) as accent", "Increase saturation by 10-15%", "Consider monochromatic variations"],
    impact: "high"
  },
  {
    category: "Composition",
    score: 92,
    feedback: "Excellent use of the rule of thirds. The focal point is perfectly positioned for maximum visual impact.",
    suggestions: ["Strong composition maintained", "Consider subtle asymmetry", "Perfect balance achieved"],
    impact: "low"
  },
  {
    category: "Typography",
    score: 78,
    feedback: "Font pairing works well but could benefit from increased contrast in hierarchy.",
    suggestions: ["Increase header font weight", "Add more spacing between text blocks", "Consider serif for headers"],
    impact: "medium"
  },
  {
    category: "Brand Alignment",
    score: 94,
    feedback: "Outstanding brand consistency. Your design perfectly captures the competitive spirit and innovation theme.",
    suggestions: ["Maintain current direction", "Consider subtle fox motifs", "Brand essence captured well"],
    impact: "low"
  }
];

const designTrends = [
  {
    trend: "Glassmorphism Effects",
    relevance: 89,
    description: "Translucent designs with blur effects are trending in UI/UX",
    howToApply: "Add subtle glass effects to card components and overlays",
    examples: ["frosted glass backgrounds", "semi-transparent elements", "depth with shadows"]
  },
  {
    trend: "Brutalist Typography",
    relevance: 76,
    description: "Bold, unconventional typography choices making strong statements",
    howToApply: "Use oversized, chunky fonts for impact headlines",
    examples: ["compressed sans-serif", "high contrast weights", "unconventional layouts"]
  },
  {
    trend: "Sustainable Design Language",
    relevance: 94,
    description: "Eco-friendly aesthetics with natural color palettes",
    howToApply: "Incorporate earth tones and organic shapes",
    examples: ["green color schemes", "natural textures", "recycled material looks"]
  }
];

const competitiveAnalysis = [
  {
    competitor: "Top Submission #1",
    strengths: ["Innovative concept", "Perfect execution", "Strong branding"],
    weaknesses: ["Limited color range", "Could use more contrast"],
    yourAdvantage: "Your design has better color harmony and more creative typography",
    score: 96
  },
  {
    competitor: "Top Submission #2", 
    strengths: ["Excellent typography", "Clean composition", "Professional finish"],
    weaknesses: ["Generic concept", "Lacks personality"],
    yourAdvantage: "Your unique approach and fox theme gives you creative edge",
    score: 91
  }
];

function FeedbackCard({ suggestion }: { suggestion: any }) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "high": return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "medium": return <Eye className="h-4 w-4 text-yellow-500" />;
      case "low": return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Eye className="h-4 w-4" />;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in" data-testid={`feedback-card-${suggestion.category.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg" data-testid={`feedback-category-${suggestion.category.toLowerCase().replace(/\s+/g, '-')}`}>
            {suggestion.category}
          </CardTitle>
          <div className="flex items-center gap-2">
            {getImpactIcon(suggestion.impact)}
            <span className={`font-bold text-xl ${getScoreColor(suggestion.score)}`} data-testid={`feedback-score-${suggestion.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {suggestion.score}
            </span>
          </div>
        </div>
        <Progress value={suggestion.score} className="h-2" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4" data-testid={`feedback-text-${suggestion.category.toLowerCase().replace(/\s+/g, '-')}`}>
          {suggestion.feedback}
        </p>
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
            <Lightbulb className="h-4 w-4" />
            AI Suggestions
          </h4>
          <div className="space-y-2">
            {suggestion.suggestions.map((sug: string, i: number) => (
              <div key={i} className="flex items-center gap-2" data-testid={`suggestion-${suggestion.category.toLowerCase().replace(/\s+/g, '-')}-${i}`}>
                <Sparkles className="h-3 w-3 text-blue-500" />
                <span className="text-xs">{sug}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TrendCard({ trend }: { trend: any }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in" data-testid={`trend-card-${trend.trend.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg" data-testid={`trend-name-${trend.trend.toLowerCase().replace(/\s+/g, '-')}`}>{trend.trend}</CardTitle>
          <Badge className={`${trend.relevance > 85 ? 'bg-red-500' : trend.relevance > 75 ? 'bg-orange-500' : 'bg-blue-500'} text-white`}>
            {trend.relevance}% relevant
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3" data-testid={`trend-description-${trend.trend.toLowerCase().replace(/\s+/g, '-')}`}>
          {trend.description}
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2">How to Apply:</h4>
          <p className="text-xs text-muted-foreground" data-testid={`trend-application-${trend.trend.toLowerCase().replace(/\s+/g, '-')}`}>
            {trend.howToApply}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Examples:</h4>
          <div className="flex flex-wrap gap-1">
            {trend.examples.map((example: string, i: number) => (
              <Badge key={i} variant="outline" className="text-xs" data-testid={`trend-example-${trend.trend.toLowerCase().replace(/\s+/g, '-')}-${i}`}>
                {example}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CompetitorCard({ competitor }: { competitor: any }) {
  return (
    <Card className="animate-fade-in" data-testid={`competitor-card-${competitor.competitor.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg" data-testid={`competitor-name-${competitor.competitor.toLowerCase().replace(/\s+/g, '-')}`}>
            {competitor.competitor}
          </CardTitle>
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            Score: {competitor.score}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-sm mb-2 text-green-600">Strengths</h4>
            <ul className="text-xs space-y-1">
              {competitor.strengths.map((strength: string, i: number) => (
                <li key={i} className="flex items-center gap-1" data-testid={`competitor-strength-${i}`}>
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2 text-red-600">Weaknesses</h4>
            <ul className="text-xs space-y-1">
              {competitor.weaknesses.map((weakness: string, i: number) => (
                <li key={i} className="flex items-center gap-1" data-testid={`competitor-weakness-${i}`}>
                  <AlertCircle className="h-3 w-3 text-red-500" />
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-sm mb-1 text-blue-800">Your Advantage</h4>
          <p className="text-xs text-blue-700" data-testid={`your-advantage-${competitor.competitor.toLowerCase().replace(/\s+/g, '-')}`}>
            {competitor.yourAdvantage}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AIFeedback() {
  const [analysisText, setAnalysisText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [overallScore, setOverallScore] = useState(87);

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setOverallScore(Math.floor(Math.random() * 20) + 80);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="AI Design Feedback"
        subtitle="Get intelligent insights and suggestions powered by advanced AI analysis"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="feedback" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feedback" data-testid="tab-feedback">AI Feedback</TabsTrigger>
            <TabsTrigger value="trends" data-testid="tab-trends">Design Trends</TabsTrigger>
            <TabsTrigger value="competitors" data-testid="tab-competitors">Competition Analysis</TabsTrigger>
            <TabsTrigger value="custom" data-testid="tab-custom">Custom Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="feedback">
            <div className="space-y-6">
              {/* Overall Score */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-white rounded-full">
                        <Brain className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold" data-testid="overall-score-title">Overall Design Score</h3>
                        <p className="text-muted-foreground">AI-powered comprehensive analysis</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-blue-600" data-testid="overall-score-value">{overallScore}</div>
                      <div className="text-sm text-muted-foreground">out of 100</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
                    <FeedbackCard suggestion={suggestion} />
                  </div>
                ))}
              </div>

              {/* Action Items */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" data-testid="action-items-title">
                    <Target className="h-5 w-5" />
                    Priority Action Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <div>
                        <div className="font-medium text-red-800">High Priority</div>
                        <div className="text-sm text-red-700">Improve typography hierarchy for better readability</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <Eye className="h-5 w-5 text-yellow-500" />
                      <div>
                        <div className="font-medium text-yellow-800">Medium Priority</div>
                        <div className="text-sm text-yellow-700">Consider adding warm accent colors to palette</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="space-y-6">
              <div className="text-center py-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h2 className="text-2xl font-semibold mb-2" data-testid="trends-title">Current Design Trends</h2>
                <p className="text-muted-foreground">AI-curated trends relevant to your competition category</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {designTrends.map((trend, index) => (
                  <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
                    <TrendCard trend={trend} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="competitors">
            <div className="space-y-6">
              <div className="text-center py-6">
                <Eye className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <h2 className="text-2xl font-semibold mb-2" data-testid="competitor-analysis-title">Competitive Analysis</h2>
                <p className="text-muted-foreground">See how your design compares to top submissions</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {competitiveAnalysis.map((competitor, index) => (
                  <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
                    <CompetitorCard competitor={competitor} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="custom">
            <div className="space-y-6">
              <Card className="max-w-4xl mx-auto animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" data-testid="custom-analysis-title">
                    <Zap className="h-5 w-5" />
                    Custom AI Analysis
                  </CardTitle>
                  <p className="text-muted-foreground">Upload your design or describe it for personalized AI feedback</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Describe Your Design</label>
                    <Textarea
                      value={analysisText}
                      onChange={(e) => setAnalysisText(e.target.value)}
                      placeholder="Describe your design concept, colors, typography, target audience, and specific areas you'd like feedback on..."
                      className="min-h-32"
                      data-testid="textarea-design-description"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input type="file" accept="image/*" className="hidden" id="design-upload" />
                    <Button variant="outline" onClick={() => document.getElementById('design-upload')?.click()} data-testid="button-upload-design">
                      Upload Design Files
                    </Button>
                    <span className="text-sm text-muted-foreground">JPG, PNG, PDF up to 10MB</span>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={runAnalysis}
                    disabled={isAnalyzing || !analysisText.trim()}
                    data-testid="button-analyze-design"
                  >
                    {isAnalyzing ? (
                      <>
                        <Brain className="h-4 w-4 mr-2 animate-spin" />
                        AI Analyzing Your Design...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Get AI Feedback
                      </>
                    )}
                  </Button>
                  
                  {isAnalyzing && (
                    <div className="text-center py-8">
                      <div className="animate-pulse">
                        <div className="text-lg font-semibold mb-2">🤖 AI is analyzing your design...</div>
                        <div className="text-sm text-muted-foreground mb-4">Checking composition, colors, typography, and trends</div>
                        <Progress value={67} className="max-w-xs mx-auto" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}