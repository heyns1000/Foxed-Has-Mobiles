import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Users, Video, MessageSquare, Share2, Clock, Zap, UserPlus, Eye } from "lucide-react";

const activeTeams = [
  {
    id: "team-1",
    name: "Fox Design Collective",
    members: 4,
    competition: "Foxed Has Mobiles™",
    status: "actively collaborating",
    lastActivity: "2 minutes ago",
    progress: 78,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "team-2", 
    name: "Olympic Creative Squad",
    members: 3,
    competition: "Mr Fruitful™'s Olympic Threads",
    status: "in review phase",
    lastActivity: "15 minutes ago",
    progress: 92,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "team-3",
    name: "Sustainable Innovators",
    members: 5,
    competition: "Water the Seed™",
    status: "brainstorming",
    lastActivity: "8 minutes ago",
    progress: 34,
    color: "from-blue-500 to-cyan-500"
  }
];

const liveStreams = [
  {
    id: "stream-1",
    title: "Live Design Session: Creating 1/1 Apparel",
    presenter: "Alex Chen",
    viewers: 147,
    duration: "24:32",
    category: "Foxed Has Mobiles™"
  },
  {
    id: "stream-2",
    title: "Chaos Cartography Workshop",
    presenter: "River Thompson",
    viewers: 89,
    duration: "18:45",
    category: "Playing with the Seed™"
  },
  {
    id: "stream-3",
    title: "Stage Design Masterclass",
    presenter: "Casey Morgan",
    viewers: 134,
    duration: "31:12",
    category: "Crate Dance Showcase™"
  }
];

const collaborationRequests = [
  {
    id: "req-1",
    from: "Maya Rodriguez",
    avatar: "MR",
    message: "Looking for a brand designer to join Olympic Threads project",
    skills: ["Logo Design", "Typography", "Color Theory"],
    timePosted: "5 minutes ago"
  },
  {
    id: "req-2",
    from: "Jordan Kim",
    avatar: "JK",
    message: "Need 3D modeling expertise for stage design concept",
    skills: ["3D Modeling", "Blender", "Stage Design"],
    timePosted: "12 minutes ago"
  },
  {
    id: "req-3",
    from: "Taylor Park",
    avatar: "TP",
    message: "Seeking creative writer for brand storytelling",
    skills: ["Copywriting", "Brand Strategy", "Storytelling"],
    timePosted: "1 hour ago"
  }
];

function TeamCard({ team }: { team: any }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" data-testid={`team-card-${team.id}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg" data-testid={`team-name-${team.id}`}>{team.name}</CardTitle>
            <p className="text-sm text-muted-foreground" data-testid={`team-competition-${team.id}`}>{team.competition}</p>
          </div>
          <Badge className={`bg-gradient-to-r ${team.color} text-white border-0`} data-testid={`team-status-${team.id}`}>
            {team.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm" data-testid={`team-members-${team.id}`}>{team.members} members</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm" data-testid={`team-activity-${team.id}`}>{team.lastActivity}</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span data-testid={`team-progress-${team.id}`}>{team.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${team.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${team.progress}%` }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" data-testid={`button-join-${team.id}`}>
              <UserPlus className="h-4 w-4 mr-2" />
              Join Team
            </Button>
            <Button variant="outline" size="sm" className="flex-1" data-testid={`button-message-${team.id}`}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LiveStreamCard({ stream }: { stream: any }) {
  const [viewers, setViewers] = useState(stream.viewers);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10) - 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in" data-testid={`stream-card-${stream.id}`}>
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-t-lg flex items-center justify-center">
          <div className="text-white text-center">
            <Video className="h-12 w-12 mx-auto mb-2" />
            <div className="text-lg font-semibold">LIVE</div>
            <Badge className="bg-red-500 animate-pulse mt-2">
              <Eye className="h-3 w-3 mr-1" />
              {viewers} watching
            </Badge>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm" data-testid={`stream-duration-${stream.id}`}>
          {stream.duration}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2" data-testid={`stream-title-${stream.id}`}>{stream.title}</h3>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs">{stream.presenter.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span data-testid={`stream-presenter-${stream.id}`}>{stream.presenter}</span>
          </div>
          <Badge variant="outline" data-testid={`stream-category-${stream.id}`}>{stream.category}</Badge>
        </div>
        <Button className="w-full mt-3 bg-red-500 hover:bg-red-600" data-testid={`button-watch-${stream.id}`}>
          <Video className="h-4 w-4 mr-2" />
          Join Live Stream
        </Button>
      </CardContent>
    </Card>
  );
}

function CollaborationRequest({ request }: { request: any }) {
  return (
    <Card className="animate-fade-in hover:shadow-md transition-shadow" data-testid={`collab-request-${request.id}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {request.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium" data-testid={`request-from-${request.id}`}>{request.from}</span>
              <span className="text-xs text-muted-foreground" data-testid={`request-time-${request.id}`}>{request.timePosted}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3" data-testid={`request-message-${request.id}`}>{request.message}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {request.skills.map((skill: string, i: number) => (
                <Badge key={i} variant="secondary" className="text-xs" data-testid={`skill-${request.id}-${i}`}>
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" data-testid={`button-respond-${request.id}`}>
                <MessageSquare className="h-4 w-4 mr-1" />
                Respond
              </Button>
              <Button variant="outline" size="sm" data-testid={`button-share-${request.id}`}>
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Collaboration() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Live Collaboration Hub"
        subtitle="Connect, create, and collaborate in real-time with fellow designers"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="teams" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="teams" data-testid="tab-teams">Active Teams</TabsTrigger>
            <TabsTrigger value="streams" data-testid="tab-streams">Live Streams</TabsTrigger>
            <TabsTrigger value="requests" data-testid="tab-requests">Collaboration</TabsTrigger>
            <TabsTrigger value="create" data-testid="tab-create">Create Team</TabsTrigger>
          </TabsList>

          <TabsContent value="teams">
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Input 
                  placeholder="Search teams..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                  data-testid="input-search-teams"
                />
                <Button data-testid="button-filter-teams">Filter by Competition</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTeams.map((team, index) => (
                  <div key={team.id} style={{ animationDelay: `${index * 100}ms` }}>
                    <TeamCard team={team} />
                  </div>
                ))}
              </div>
              
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2" data-testid="text-team-benefits">Team Up for Success</h3>
                  <p className="text-muted-foreground mb-4">
                    Collaborate with other designers to create amazing submissions. Teams often achieve higher ratings and win more prizes!
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700" data-testid="button-create-team">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create Your Team
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="streams">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold" data-testid="text-live-now">Live Now</h2>
                <Badge className="bg-red-500 animate-pulse">LIVE</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveStreams.map((stream, index) => (
                  <div key={stream.id} style={{ animationDelay: `${index * 150}ms` }}>
                    <LiveStreamCard stream={stream} />
                  </div>
                ))}
              </div>
              
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Video className="h-12 w-12 text-purple-600" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2" data-testid="text-start-streaming">Start Your Own Stream</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Share your design process, teach others, and build your following
                      </p>
                      <div className="flex gap-2">
                        <Button className="bg-purple-600 hover:bg-purple-700" data-testid="button-go-live">
                          <Video className="h-4 w-4 mr-2" />
                          Go Live
                        </Button>
                        <Button variant="outline" data-testid="button-schedule-stream">
                          Schedule Stream
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="requests">
            <div className="space-y-6">
              <div className="text-center py-6">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl font-semibold mb-2" data-testid="text-find-collaborators">Find Perfect Collaborators</h2>
                <p className="text-muted-foreground">
                  Connect with designers who complement your skills and vision
                </p>
              </div>
              
              <div className="space-y-4">
                {collaborationRequests.map((request, index) => (
                  <div key={request.id} style={{ animationDelay: `${index * 100}ms` }}>
                    <CollaborationRequest request={request} />
                  </div>
                ))}
              </div>
              
              <Button className="w-full" size="lg" data-testid="button-post-request">
                <UserPlus className="h-4 w-4 mr-2" />
                Post Collaboration Request
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card className="max-w-2xl mx-auto animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" data-testid="text-create-team-title">
                  <Users className="h-5 w-5" />
                  Create New Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Team Name</label>
                  <Input placeholder="Enter a creative team name..." data-testid="input-team-name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Competition Category</label>
                  <select className="w-full p-2 border rounded-md" data-testid="select-team-competition">
                    <option value="">Select competition...</option>
                    <option value="foxed-mobiles">🦊 Foxed Has Mobiles™</option>
                    <option value="olympic-threads">🍉 Mr Fruitful™'s Olympic Threads</option>
                    <option value="water-seed">📦 Water the Seed™</option>
                    <option value="playing-seed">🧬 Playing with the Seed™</option>
                    <option value="crate-dance">🌍 Crate Dance Showcase™</option>
                    <option value="faa-university">🎓 FAA University Identity Deck</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Team Description</label>
                  <textarea 
                    className="w-full p-2 border rounded-md h-20" 
                    placeholder="Describe your team's vision and what kind of collaborators you're seeking..."
                    data-testid="textarea-team-description"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Looking for Skills</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["Graphic Design", "3D Modeling", "Copywriting", "Brand Strategy", "Web Design", "Illustration", "Photography", "Video Editing"].map((skill) => (
                      <Button key={skill} variant="outline" size="sm" className="text-xs" data-testid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                        + {skill}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full" size="lg" data-testid="button-create-team-submit">
                  <Users className="h-4 w-4 mr-2" />
                  Create Team & Send Invites
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}