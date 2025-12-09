import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Trophy, Award, Star, Target, Zap, Users, Eye, Heart, Medal, Crown, Flame, Gift } from "lucide-react";

const userStats = {
  level: 12,
  xp: 2847,
  xpToNext: 3200,
  rank: "Creative Maverick",
  totalPoints: 15420,
  streak: 7,
  completedChallenges: 23,
  badgesEarned: 18
};

const achievements = [
  {
    id: "first-submission",
    title: "First Steps",
    description: "Submit your first design to any competition",
    icon: Target,
    unlocked: true,
    rarity: "common",
    points: 100,
    unlockedDate: "2025-01-15"
  },
  {
    id: "fox-specialist",
    title: "Fox Whisperer",
    description: "Complete 5 submissions in Foxed Has Mobiles™",
    icon: Award,
    unlocked: true,
    rarity: "rare",
    points: 500,
    unlockedDate: "2025-01-22",
    progress: 5,
    maxProgress: 5
  },
  {
    id: "community-favorite",
    title: "People's Choice",
    description: "Receive 100+ likes on a single submission",
    icon: Heart,
    unlocked: true,
    rarity: "epic",
    points: 750,
    unlockedDate: "2025-01-20",
    specialEffect: "❤️ Popularity Boost"
  },
  {
    id: "streak-master",
    title: "Consistency King",
    description: "Maintain a 10-day activity streak",
    icon: Flame,
    unlocked: false,
    rarity: "rare",
    points: 600,
    progress: 7,
    maxProgress: 10
  },
  {
    id: "collaboration-guru",
    title: "Team Player",
    description: "Complete 3 team collaborations",
    icon: Users,
    unlocked: false,
    rarity: "uncommon",
    points: 300,
    progress: 1,
    maxProgress: 3
  },
  {
    id: "legendary-creator",
    title: "Legendary Creator",
    description: "Win first place in any competition category",
    icon: Crown,
    unlocked: false,
    rarity: "legendary",
    points: 2000,
    progress: 0,
    maxProgress: 1
  }
];

const leaderboard = [
  { rank: 1, name: "Alex Chen", points: 18750, level: 15, avatar: "AC", trend: "up" },
  { rank: 2, name: "Maya Rodriguez", points: 17200, level: 14, avatar: "MR", trend: "up" },
  { rank: 3, name: "Jordan Kim", points: 16890, level: 14, avatar: "JK", trend: "down" },
  { rank: 4, name: "River Thompson", points: 15420, level: 12, avatar: "RT", trend: "same" },
  { rank: 5, name: "Casey Morgan", points: 14200, level: 12, avatar: "CM", trend: "up" },
  { rank: 6, name: "Taylor Park", points: 13500, level: 11, avatar: "TP", trend: "down" },
  { rank: 7, name: "Sam Wilson", points: 12800, level: 11, avatar: "SW", trend: "up" },
  { rank: 8, name: "Jamie Lee", points: 11900, level: 10, avatar: "JL", trend: "same" }
];

const challenges = [
  {
    id: "weekly-fox",
    title: "Fox Friday Challenge",
    description: "Create a fox-themed design every Friday for a month",
    type: "weekly",
    difficulty: "medium",
    reward: "500 XP + Exclusive Fox Badge",
    timeLeft: "2 days",
    participants: 234,
    progress: 75
  },
  {
    id: "color-master",
    title: "Rainbow Creator",
    description: "Use every color in the spectrum across different submissions",
    type: "ongoing",
    difficulty: "hard",
    reward: "1000 XP + Color Master Title",
    timeLeft: "unlimited",
    participants: 156,
    progress: 60
  },
  {
    id: "community-helper",
    title: "Forum Hero",
    description: "Help 50 community members with design feedback",
    type: "community",
    difficulty: "easy",
    reward: "300 XP + Helper Badge",
    timeLeft: "1 week",
    participants: 89,
    progress: 30
  }
];

function AchievementCard({ achievement }: { achievement: any }) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "from-gray-400 to-gray-600";
      case "uncommon": return "from-green-400 to-green-600";
      case "rare": return "from-blue-400 to-blue-600";
      case "epic": return "from-purple-400 to-purple-600";
      case "legendary": return "from-yellow-400 to-orange-600";
      default: return "from-gray-400 to-gray-600";
    }
  };

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in ${
      achievement.unlocked ? 'border-green-200 bg-green-50/30' : 'border-gray-200 opacity-75'
    }`} data-testid={`achievement-card-${achievement.id}`}>
      {achievement.unlocked && (
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-500 text-white">
            <Medal className="h-3 w-3 mr-1" />
            Unlocked
          </Badge>
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-full bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white`}>
            <achievement.icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg" data-testid={`achievement-title-${achievement.id}`}>{achievement.title}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={`text-xs bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white border-0`}>
                {achievement.rarity}
              </Badge>
              <span className="text-sm text-muted-foreground" data-testid={`achievement-points-${achievement.id}`}>
                +{achievement.points} XP
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3" data-testid={`achievement-description-${achievement.id}`}>
          {achievement.description}
        </p>
        
        {achievement.progress !== undefined && (
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span data-testid={`achievement-progress-${achievement.id}`}>
                {achievement.progress}/{achievement.maxProgress}
              </span>
            </div>
            <Progress value={(achievement.progress / achievement.maxProgress) * 100} className="h-2" />
          </div>
        )}
        
        {achievement.unlocked && achievement.unlockedDate && (
          <div className="text-xs text-green-600 flex items-center gap-1" data-testid={`achievement-date-${achievement.id}`}>
            <Trophy className="h-3 w-3" />
            Unlocked {achievement.unlockedDate}
          </div>
        )}
        
        {achievement.specialEffect && (
          <Badge className="mt-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white" data-testid={`achievement-effect-${achievement.id}`}>
            {achievement.specialEffect}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}

function LeaderboardRow({ user, isCurrentUser = false }: { user: any, isCurrentUser?: boolean }) {
  const getTrendIcon = (trend: string) => {
    if (trend === "up") return "📈";
    if (trend === "down") return "📉";
    return "➡️";
  };

  const getTrendColor = (trend: string) => {
    if (trend === "up") return "text-green-600";
    if (trend === "down") return "text-red-600";
    return "text-gray-600";
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg transition-all hover:shadow-md ${
      isCurrentUser ? 'bg-primary/10 border border-primary/20' : 'bg-white border border-gray-200'
    }`} data-testid={`leaderboard-row-${user.rank}`}>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
          user.rank === 1 ? 'bg-yellow-500' :
          user.rank === 2 ? 'bg-gray-400' :
          user.rank === 3 ? 'bg-amber-600' : 'bg-gray-500'
        }`}>
          {user.rank === 1 ? '👑' : user.rank}
        </div>
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            {user.avatar}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold" data-testid={`user-name-${user.rank}`}>{user.name}</span>
          {isCurrentUser && <Badge className="text-xs">You</Badge>}
        </div>
        <div className="text-sm text-muted-foreground" data-testid={`user-level-${user.rank}`}>
          Level {user.level}
        </div>
      </div>
      
      <div className="text-right">
        <div className="font-bold text-lg" data-testid={`user-points-${user.rank}`}>
          {user.points.toLocaleString()}
        </div>
        <div className={`text-sm flex items-center gap-1 ${getTrendColor(user.trend)}`} data-testid={`user-trend-${user.rank}`}>
          <span>{getTrendIcon(user.trend)}</span>
          <span>{user.trend}</span>
        </div>
      </div>
    </div>
  );
}

function ChallengeCard({ challenge }: { challenge: any }) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "hard": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in" data-testid={`challenge-card-${challenge.id}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg" data-testid={`challenge-title-${challenge.id}`}>{challenge.title}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white`}>
                {challenge.difficulty}
              </Badge>
              <Badge variant="outline" data-testid={`challenge-type-${challenge.id}`}>
                {challenge.type}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Time Left</div>
            <div className="font-semibold" data-testid={`challenge-time-${challenge.id}`}>{challenge.timeLeft}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4" data-testid={`challenge-description-${challenge.id}`}>
          {challenge.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Your Progress</span>
              <span data-testid={`challenge-progress-${challenge.id}`}>{challenge.progress}%</span>
            </div>
            <Progress value={challenge.progress} className="h-2" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm" data-testid={`challenge-participants-${challenge.id}`}>
                {challenge.participants} participants
              </span>
            </div>
            <div className="text-sm font-medium text-primary" data-testid={`challenge-reward-${challenge.id}`}>
              {challenge.reward}
            </div>
          </div>
          
          <Button className="w-full" data-testid={`button-join-challenge-${challenge.id}`}>
            <Gift className="h-4 w-4 mr-2" />
            Join Challenge
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Achievements() {
  const [selectedTab, setSelectedTab] = useState("achievements");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Achievements & Leaderboard"
        subtitle="Track your progress, earn rewards, and compete with the community"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Player Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center animate-fade-in hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-1" data-testid="user-level">Level {userStats.level}</div>
              <div className="text-sm text-muted-foreground mb-3">{userStats.rank}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                  style={{ width: `${(userStats.xp / userStats.xpToNext) * 100}%` }}
                />
              </div>
              <div className="text-xs text-muted-foreground" data-testid="user-xp">
                {userStats.xp} / {userStats.xpToNext} XP
              </div>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in-delay hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-1" data-testid="user-points">
                {userStats.totalPoints.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in-delay hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-1 flex items-center justify-center gap-1">
                <Flame className="h-8 w-8" />
                <span data-testid="user-streak">{userStats.streak}</span>
              </div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in-delay hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-1" data-testid="user-badges">
                {userStats.badgesEarned}
              </div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="achievements" data-testid="tab-achievements">Achievements</TabsTrigger>
            <TabsTrigger value="leaderboard" data-testid="tab-leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="challenges" data-testid="tab-challenges">Challenges</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <AchievementCard achievement={achievement} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="space-y-6">
              <div className="text-center py-6">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                <h2 className="text-2xl font-semibold mb-2" data-testid="leaderboard-title">Competition Leaderboard</h2>
                <p className="text-muted-foreground">Top performers in the creative community</p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-3">
                {leaderboard.map((user, index) => (
                  <div key={user.rank} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                    <LeaderboardRow user={user} isCurrentUser={user.name === "River Thompson"} />
                  </div>
                ))}
              </div>
              
              <Card className="max-w-md mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
                  <h3 className="font-semibold mb-2" data-testid="climb-leaderboard">Climb the Leaderboard!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete challenges, win competitions, and help the community to earn points
                  </p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700" data-testid="button-earn-points">
                    <Zap className="h-4 w-4 mr-2" />
                    Earn More Points
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="challenges">
            <div className="space-y-6">
              <div className="text-center py-6">
                <Target className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h2 className="text-2xl font-semibold mb-2" data-testid="challenges-title">Active Challenges</h2>
                <p className="text-muted-foreground">Complete challenges to earn exclusive rewards and XP</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.map((challenge, index) => (
                  <div key={challenge.id} style={{ animationDelay: `${index * 150}ms` }}>
                    <ChallengeCard challenge={challenge} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}