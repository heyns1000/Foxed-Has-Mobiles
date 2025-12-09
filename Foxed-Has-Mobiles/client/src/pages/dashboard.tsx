import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { Activity, Users, Trophy, Clock, TrendingUp, Award } from "lucide-react";
import { useState, useEffect } from "react";

const competitionData = [
  {
    id: "foxed-mobiles",
    name: "Foxed Has Mobiles™",
    icon: "🦊",
    category: "1/1 Apparel Oracle",
    submissions: 156,
    maxSubmissions: 300,
    deadline: "2025-02-15T23:59:59Z",
    isActive: true,
    recentActivity: 12
  },
  {
    id: "fruitful-olympic",
    name: "Mr Fruitful™'s Olympic Threads",
    icon: "🍉",
    category: "Olympic Design",
    submissions: 89,
    maxSubmissions: 200,
    deadline: "2025-02-10T23:59:59Z",
    isActive: true,
    recentActivity: 8
  },
  {
    id: "water-seed",
    name: "Water the Seed™",
    icon: "📦",
    category: "Brandborn Creations",
    submissions: 203,
    maxSubmissions: 400,
    deadline: "2025-02-20T23:59:59Z",
    isActive: true,
    recentActivity: 15
  },
  {
    id: "playing-seed",
    name: "Playing with the Seed™",
    icon: "🧬",
    category: "Chaos Cartography",
    submissions: 134,
    maxSubmissions: 250,
    deadline: "2025-02-18T23:59:59Z",
    isActive: true,
    recentActivity: 9
  },
  {
    id: "crate-dance",
    name: "Crate Dance Showcase™",
    icon: "🌍",
    category: "Stage & Nation Design",
    submissions: 67,
    maxSubmissions: 150,
    deadline: "2025-02-25T23:59:59Z",
    isActive: true,
    recentActivity: 6
  },
  {
    id: "faa-university",
    name: "FAA University Identity Deck",
    icon: "🎓",
    category: "University Branding",
    submissions: 45,
    maxSubmissions: 100,
    deadline: "2025-02-28T23:59:59Z",
    isActive: true,
    recentActivity: 4
  }
];

function CompetitionCard({ competition }: { competition: any }) {
  const progress = (competition.submissions / competition.maxSubmissions) * 100;
  const timeLeft = new Date(competition.deadline).getTime() - new Date().getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" data-testid={`card-competition-${competition.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl animate-pulse" data-testid={`icon-${competition.id}`}>{competition.icon}</span>
            <div>
              <CardTitle className="text-lg" data-testid={`text-competition-name-${competition.id}`}>{competition.name}</CardTitle>
              <p className="text-sm text-muted-foreground" data-testid={`text-competition-category-${competition.id}`}>{competition.category}</p>
            </div>
          </div>
          <Badge variant={competition.isActive ? "default" : "secondary"} data-testid={`badge-status-${competition.id}`}>
            {competition.isActive ? "Active" : "Ended"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span data-testid={`text-submissions-${competition.id}`}>Submissions: {competition.submissions}</span>
              <span data-testid={`text-max-submissions-${competition.id}`}>Max: {competition.maxSubmissions}</span>
            </div>
            <Progress value={progress} className="h-2" data-testid={`progress-${competition.id}`} />
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span data-testid={`text-days-left-${competition.id}`}>{daysLeft} days left</span>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span data-testid={`text-recent-activity-${competition.id}`}>+{competition.recentActivity} today</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatsCard({ title, value, icon: Icon, change, description }: any) {
  return (
    <Card className="animate-fade-in-delay hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground" data-testid={`text-stat-title-${title.toLowerCase()}`}>{title}</p>
            <p className="text-3xl font-bold" data-testid={`text-stat-value-${title.toLowerCase()}`}>{value}</p>
            {change && (
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1" data-testid={`text-stat-change-${title.toLowerCase()}`}>
                <TrendingUp className="h-3 w-3" />
                {change}
              </p>
            )}
          </div>
          <div className="bg-primary/10 p-3 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-2" data-testid={`text-stat-description-${title.toLowerCase()}`}>{description}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [liveData, setLiveData] = useState({
    totalSubmissions: 694,
    activeUsers: 1247,
    totalPrizes: 25000,
    completionRate: 78
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        totalSubmissions: prev.totalSubmissions + Math.floor(Math.random() * 3),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2,
        totalPrizes: prev.totalPrizes,
        completionRate: Math.min(100, prev.completionRate + (Math.random() > 0.8 ? 1 : 0))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Competition Dashboard"
        subtitle="Real-time tracking of all active competitions"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Submissions"
            value={liveData.totalSubmissions}
            icon={Activity}
            change="+12% from yesterday"
            description="Across all competitions"
          />
          <StatsCard
            title="Active Participants"
            value={liveData.activeUsers}
            icon={Users}
            change="+8% from yesterday"
            description="Currently engaged users"
          />
          <StatsCard
            title="Prize Pool"
            value={`R${liveData.totalPrizes.toLocaleString()}`}
            icon={Trophy}
            description="Total rewards available"
          />
          <StatsCard
            title="Completion Rate"
            value={`${liveData.completionRate}%`}
            icon={Award}
            change="+3% improvement"
            description="Average submission quality"
          />
        </div>

        {/* Competition Cards */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" data-testid="text-competitions-header">
            <Activity className="h-6 w-6" />
            Active Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitionData.map((competition, index) => (
              <div key={competition.id} style={{ animationDelay: `${index * 100}ms` }}>
                <CompetitionCard competition={competition} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}