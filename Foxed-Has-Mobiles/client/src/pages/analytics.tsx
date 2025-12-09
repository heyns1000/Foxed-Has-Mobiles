import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { BarChart3, TrendingUp, Users, Eye, Award, Target, Calendar, Zap } from "lucide-react";

const analyticsData = {
  overview: {
    totalSubmissions: 847,
    activeParticipants: 1456,
    completionRate: 83.2,
    avgRating: 4.7,
    totalViews: 23847,
    engagement: 92.4
  },
  competitionPerformance: [
    { name: "Foxed Has Mobiles™", submissions: 203, engagement: 94, avgRating: 4.8, growth: 15.2 },
    { name: "Mr Fruitful™'s Olympic Threads", submissions: 156, engagement: 87, avgRating: 4.6, growth: 12.1 },
    { name: "Water the Seed™", submissions: 189, engagement: 91, avgRating: 4.7, growth: 18.3 },
    { name: "Playing with the Seed™", submissions: 134, engagement: 89, avgRating: 4.9, growth: 22.5 },
    { name: "Crate Dance Showcase™", submissions: 98, engagement: 85, avgRating: 4.5, growth: 8.7 },
    { name: "FAA University Identity", submissions: 67, engagement: 82, avgRating: 4.4, growth: 6.2 }
  ],
  userBehavior: {
    peakHours: ["14:00-16:00", "19:00-21:00"],
    topDevices: ["Desktop (67%)", "Mobile (28%)", "Tablet (5%)"],
    avgSessionTime: "24 minutes",
    bounceRate: 12.4
  },
  realtimeStats: {
    activeUsers: 247,
    submissionsToday: 23,
    forumsActivity: 156,
    galleryViews: 892
  }
};

function MetricCard({ title, value, change, icon: Icon, color = "text-blue-500" }: any) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground" data-testid={`metric-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </p>
            <p className="text-3xl font-bold" data-testid={`metric-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {value}
            </p>
            {change && (
              <p className={`text-sm flex items-center gap-1 mt-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`} 
                 data-testid={`metric-change-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <TrendingUp className="h-3 w-3" />
                {change > 0 ? '+' : ''}{change}%
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CompetitionChart({ data }: { data: any[] }) {
  const maxSubmissions = Math.max(...data.map(d => d.submissions));
  
  return (
    <Card className="animate-fade-in-delay">
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid="competition-performance-title">
          <BarChart3 className="h-5 w-5" />
          Competition Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((comp, index) => (
            <div key={index} className="space-y-2" data-testid={`competition-${index}`}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{comp.name}</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">{comp.submissions} submissions</Badge>
                  <Badge className={`text-xs ${comp.growth > 15 ? 'bg-green-500' : comp.growth > 10 ? 'bg-yellow-500' : 'bg-gray-500'}`}>
                    +{comp.growth}%
                  </Badge>
                </div>
              </div>
              <div className="space-y-1">
                <Progress value={(comp.submissions / maxSubmissions) * 100} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Engagement: {comp.engagement}%</span>
                  <span>Rating: {comp.avgRating}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function RealTimeActivity() {
  const [liveData, setLiveData] = useState(analyticsData.realtimeStats);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        submissionsToday: prev.submissionsToday + (Math.random() > 0.7 ? 1 : 0),
        forumsActivity: prev.forumsActivity + Math.floor(Math.random() * 8) - 3,
        galleryViews: prev.galleryViews + Math.floor(Math.random() * 15) - 5
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid="realtime-title">
          <Zap className="h-5 w-5" />
          Real-Time Activity
          <Badge className="bg-green-500 animate-pulse">Live</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600" data-testid="active-users-count">{liveData.activeUsers}</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600" data-testid="submissions-today-count">{liveData.submissionsToday}</div>
            <div className="text-sm text-muted-foreground">Submissions Today</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600" data-testid="forum-activity-count">{liveData.forumsActivity}</div>
            <div className="text-sm text-muted-foreground">Forum Activity</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600" data-testid="gallery-views-count">{liveData.galleryViews}</div>
            <div className="text-sm text-muted-foreground">Gallery Views</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Advanced Analytics Dashboard"
        subtitle="Deep insights into competition performance and user engagement"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
            <TabsTrigger value="competitions" data-testid="tab-competitions">Competitions</TabsTrigger>
            <TabsTrigger value="users" data-testid="tab-users">User Behavior</TabsTrigger>
            <TabsTrigger value="realtime" data-testid="tab-realtime">Real-Time</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MetricCard
                title="Total Submissions"
                value={analyticsData.overview.totalSubmissions.toLocaleString()}
                change={15.2}
                icon={Target}
                color="text-blue-500"
              />
              <MetricCard
                title="Active Participants"
                value={analyticsData.overview.activeParticipants.toLocaleString()}
                change={8.7}
                icon={Users}
                color="text-green-500"
              />
              <MetricCard
                title="Completion Rate"
                value={`${analyticsData.overview.completionRate}%`}
                change={3.1}
                icon={Award}
                color="text-purple-500"
              />
              <MetricCard
                title="Average Rating"
                value={analyticsData.overview.avgRating}
                change={2.3}
                icon={Award}
                color="text-yellow-500"
              />
              <MetricCard
                title="Total Views"
                value={analyticsData.overview.totalViews.toLocaleString()}
                change={23.4}
                icon={Eye}
                color="text-indigo-500"
              />
              <MetricCard
                title="Engagement Rate"
                value={`${analyticsData.overview.engagement}%`}
                change={5.8}
                icon={TrendingUp}
                color="text-red-500"
              />
            </div>
          </TabsContent>

          <TabsContent value="competitions">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CompetitionChart data={analyticsData.competitionPerformance} />
              <Card className="animate-fade-in-delay">
                <CardHeader>
                  <CardTitle data-testid="competition-insights-title">Competition Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2" data-testid="top-performer">🏆 Top Performer</h4>
                      <p className="text-sm text-green-700">Playing with the Seed™ shows highest growth at +22.5%</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2" data-testid="most-popular">📈 Most Popular</h4>
                      <p className="text-sm text-blue-700">Foxed Has Mobiles™ leads with 203 submissions</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2" data-testid="quality-leader">⭐ Quality Leader</h4>
                      <p className="text-sm text-yellow-700">Playing with the Seed™ has highest rating (4.9/5)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle data-testid="peak-hours-title">Peak Activity Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analyticsData.userBehavior.peakHours.map((hour, i) => (
                      <div key={i} className="flex items-center justify-between" data-testid={`peak-hour-${i}`}>
                        <span className="text-sm">{hour}</span>
                        <Progress value={i === 0 ? 85 : 72} className="w-20 h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-delay">
                <CardHeader>
                  <CardTitle data-testid="device-usage-title">Device Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analyticsData.userBehavior.topDevices.map((device, i) => (
                      <div key={i} className="text-sm" data-testid={`device-${i}`}>
                        {device}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-delay">
                <CardHeader>
                  <CardTitle data-testid="engagement-metrics-title">Engagement Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Avg Session Time</div>
                      <div className="text-2xl font-bold" data-testid="avg-session-time">
                        {analyticsData.userBehavior.avgSessionTime}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Bounce Rate</div>
                      <div className="text-2xl font-bold text-green-600" data-testid="bounce-rate">
                        {analyticsData.userBehavior.bounceRate}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="realtime">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RealTimeActivity />
              <Card className="animate-fade-in-delay">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" data-testid="live-events-title">
                    <Calendar className="h-5 w-5" />
                    Live Events Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {[
                      { time: "2 min ago", event: "New submission in Foxed Has Mobiles™", type: "submission" },
                      { time: "5 min ago", event: "User joined forum discussion", type: "forum" },
                      { time: "8 min ago", event: "Gallery item received 50+ likes", type: "social" },
                      { time: "12 min ago", event: "Competition deadline reminder sent", type: "system" },
                      { time: "15 min ago", event: "New user registered", type: "user" },
                      { time: "18 min ago", event: "AR preview generated successfully", type: "tech" },
                      { time: "22 min ago", event: "Expert replied in forum", type: "forum" },
                      { time: "25 min ago", event: "Blockchain verification completed", type: "tech" }
                    ].map((event, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30" data-testid={`live-event-${i}`}>
                        <div className={`w-2 h-2 rounded-full ${
                          event.type === 'submission' ? 'bg-blue-500' :
                          event.type === 'forum' ? 'bg-purple-500' :
                          event.type === 'social' ? 'bg-pink-500' :
                          event.type === 'tech' ? 'bg-green-500' : 'bg-gray-500'
                        }`} />
                        <div className="flex-1">
                          <div className="text-sm">{event.event}</div>
                          <div className="text-xs text-muted-foreground">{event.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}