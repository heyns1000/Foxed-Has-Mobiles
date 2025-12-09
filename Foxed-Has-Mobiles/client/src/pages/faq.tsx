import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { Search, HelpCircle, ChevronDown, MessageSquare, BookOpen, Award, Clock, DollarSign, Users } from "lucide-react";

const faqCategories = [
  { id: "general", name: "General", icon: HelpCircle, color: "bg-blue-500" },
  { id: "competitions", name: "Competitions", icon: Award, color: "bg-purple-500" },
  { id: "submissions", name: "Submissions", icon: BookOpen, color: "bg-green-500" },
  { id: "pricing", name: "Pricing & FAA.ZONE™", icon: DollarSign, color: "bg-orange-500" },
  { id: "technical", name: "Technical Support", icon: MessageSquare, color: "bg-red-500" },
  { id: "timeline", name: "Timeline & Deadlines", icon: Clock, color: "bg-indigo-500" }
];

const faqData = [
  {
    id: "1",
    category: "general",
    question: "What is the Foxed Has Mobiles™ Master Competition Suite?",
    answer: "The Foxed Has Mobiles™ Master Competition Suite is a comprehensive creative design platform featuring six specialized competition categories: 1/1 Apparel Oracle, Olympic Threads, Brandborn Creations, Chaos Cartography, Stage & Nation Design, and University Identity Deck. Each category focuses on different aspects of creative design and innovation.",
    tags: ["competition", "overview", "categories"],
    helpful: 234,
    views: 1567
  },
  {
    id: "2",
    category: "competitions",
    question: "How do I choose the right competition category for my skills?",
    answer: "Consider your expertise and interests: Foxed Has Mobiles™ for fashion/apparel design, Mr Fruitful™'s Olympic Threads for athletic wear, Water the Seed™ for brand identity work, Playing with the Seed™ for experimental/abstract design, Crate Dance Showcase™ for stage/event design, and FAA University Identity Deck for educational branding. Use our Get Started Wizard to find your best match.",
    tags: ["category", "selection", "skills"],
    helpful: 189,
    views: 892
  },
  {
    id: "3",
    category: "submissions",
    question: "What file formats are accepted for submissions?",
    answer: "We accept various formats depending on your category: Images (.jpg, .png, .gif, .svg up to 10MB), Videos (.mp4, .mov, .avi up to 100MB), Documents (.pdf, .doc, .docx up to 25MB), and Archives (.zip, .rar, .7z up to 50MB). For 1/1 Apparel designs, we also support AR preview files.",
    tags: ["files", "formats", "upload"],
    helpful: 156,
    views: 743
  },
  {
    id: "4",
    category: "pricing",
    question: "What's included in each FAA.ZONE™ pricing tier?",
    answer: "Starter (R199): Basic submission tools, email support, standard review. Business (R499): Advanced tools, priority support, detailed feedback, portfolio showcase. Enterprise (R1200): All tools, 1-on-1 mentoring, premium feedback, marketing support. All tiers include blockchain verification and real-time tracking.",
    tags: ["pricing", "tiers", "features"],
    helpful: 298,
    views: 1234
  },
  {
    id: "5",
    category: "technical",
    question: "How does the AR preview work for apparel designs?",
    answer: "Our AR preview system uses advanced 3D modeling to display your 1/1 apparel designs in augmented reality. Upload your design files, and our system automatically generates a 3D preview that can be viewed on mobile devices. This feature is exclusive to Foxed Has Mobiles™ submissions and requires Business tier or higher.",
    tags: ["AR", "preview", "apparel", "3D"],
    helpful: 167,
    views: 654
  },
  {
    id: "6",
    category: "timeline",
    question: "What are the submission deadlines for each competition?",
    answer: "Deadlines vary by category: Foxed Has Mobiles™ (Feb 15, 2025), Mr Fruitful™'s Olympic Threads (Feb 10, 2025), Water the Seed™ (Feb 20, 2025), Playing with the Seed™ (Feb 18, 2025), Crate Dance Showcase™ (Feb 25, 2025), FAA University Identity Deck (Feb 28, 2025). All deadlines are at 11:59 PM SAST.",
    tags: ["deadlines", "timeline", "dates"],
    helpful: 203,
    views: 987
  },
  {
    id: "7",
    category: "competitions",
    question: "How are submissions judged and what are the criteria?",
    answer: "Judging follows a standardized rubric: 40% Creativity & Innovation, 35% Technical Execution, 25% Brand Alignment. Each category has specialized judges with expertise in that field. Judging takes place over 2 weeks after submission deadlines, with winners announced via email and dashboard notifications.",
    tags: ["judging", "criteria", "evaluation"],
    helpful: 145,
    views: 578
  },
  {
    id: "8",
    category: "technical",
    question: "What is blockchain verification and why do I need it?",
    answer: "Blockchain verification provides immutable proof of your submission's authenticity and timestamp. This prevents plagiarism, establishes ownership, and creates a permanent record of your creative work. All submissions are automatically verified on submission, with certificates available in your dashboard.",
    tags: ["blockchain", "verification", "authenticity"],
    helpful: 134,
    views: 456
  },
  {
    id: "9",
    category: "general",
    question: "Can I submit to multiple competition categories?",
    answer: "Yes! You can participate in multiple categories, but each requires a separate submission and FAA.ZONE™ tier subscription. We recommend focusing on 1-2 categories initially to ensure quality submissions. Multi-category participants often receive bonus recognition in our community showcase.",
    tags: ["multiple", "categories", "submissions"],
    helpful: 178,
    views: 723
  },
  {
    id: "10",
    category: "pricing",
    question: "Do you offer student discounts or group pricing?",
    answer: "Yes! Students receive 30% off all tiers with valid student ID verification. Group pricing is available for teams of 5+ members with additional collaboration tools. Educational institutions can contact us for special academic pricing and bulk licensing options.",
    tags: ["student", "discount", "group", "pricing"],
    helpful: 267,
    views: 1123
  }
];

function FAQItem({ faq, searchQuery }: { faq: any, searchQuery: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [wasHelpful, setWasHelpful] = useState(false);

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-yellow-200 px-1">{part}</mark> : part
    );
  };

  return (
    <Card className="animate-fade-in hover:shadow-md transition-shadow" data-testid={`faq-item-${faq.id}`}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3 text-left">
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <HelpCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base" data-testid={`text-question-${faq.id}`}>
                    {highlightText(faq.question, searchQuery)}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    {faq.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-xs" data-testid={`tag-${faq.id}-${tag}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="pl-12">
              <p className="text-muted-foreground mb-4" data-testid={`text-answer-${faq.id}`}>
                {highlightText(faq.answer, searchQuery)}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span data-testid={`text-views-${faq.id}`}>{faq.views} views</span>
                  <span data-testid={`text-helpful-${faq.id}`}>{faq.helpful} found helpful</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setWasHelpful(!wasHelpful)}
                    className={wasHelpful ? "text-green-600 border-green-200" : ""}
                    data-testid={`button-helpful-${faq.id}`}
                  >
                    👍 {wasHelpful ? "Helpful!" : "Helpful?"}
                  </Button>
                  <Button variant="outline" size="sm" data-testid={`button-contact-${faq.id}`}>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about competitions and submissions"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium" data-testid="label-search-faq">Search FAQs</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search questions, answers, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-faq"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" data-testid="label-category-faq">Category</label>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  className="justify-start text-sm"
                  data-testid="button-category-all"
                >
                  All Questions
                </Button>
                {faqCategories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="justify-start text-sm"
                    data-testid={`button-category-${cat.id}`}
                  >
                    <cat.icon className="h-4 w-4 mr-2" />
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary" data-testid="text-total-faqs">{filteredFAQs.length}</div>
            <div className="text-sm text-muted-foreground">Questions</div>
          </Card>
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary" data-testid="text-total-views">{filteredFAQs.reduce((sum, faq) => sum + faq.views, 0).toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </Card>
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary" data-testid="text-helpful-votes">{filteredFAQs.reduce((sum, faq) => sum + faq.helpful, 0).toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Helpful Votes</div>
          </Card>
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </Card>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={faq.id} style={{ animationDelay: `${index * 50}ms` }}>
              <FAQItem faq={faq} searchQuery={searchQuery} />
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <Card className="text-center py-12 animate-fade-in">
            <CardContent>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2" data-testid="text-no-faqs">No questions found</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-try-different-faq">Try adjusting your search terms or browsing a different category</p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }} data-testid="button-clear-faq-search">
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Contact Support */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 animate-fade-in">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold" data-testid="text-need-help">Still need help?</h3>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="text-contact-description">
              Can't find what you're looking for? Our support team is here to help with any questions about competitions, submissions, or technical issues.
            </p>
            <div className="flex justify-center gap-4">
              <Button data-testid="button-contact-support">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline" data-testid="button-community-forum">
                <Users className="h-4 w-4 mr-2" />
                Community Forum
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}