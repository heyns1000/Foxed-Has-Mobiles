import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { MessageSquare, Heart, Eye, Calendar, Plus, Search, TrendingUp, Users, Pin, Award } from "lucide-react";

const forumCategories = [
  { id: "all", name: "All Discussions", icon: "💬", color: "bg-blue-500" },
  { id: "foxed-mobiles", name: "Foxed Has Mobiles™", icon: "🦊", color: "bg-orange-500" },
  { id: "fruitful-olympic", name: "Mr Fruitful™'s Olympic Threads", icon: "🍉", color: "bg-green-500" },
  { id: "water-seed", name: "Water the Seed™", icon: "📦", color: "bg-blue-500" },
  { id: "playing-seed", name: "Playing with the Seed™", icon: "🧬", color: "bg-purple-500" },
  { id: "crate-dance", name: "Crate Dance Showcase™", icon: "🌍", color: "bg-indigo-500" },
  { id: "faa-university", name: "FAA University Identity Deck", icon: "🎓", color: "bg-yellow-500" },
  { id: "general", name: "General Discussion", icon: "🌟", color: "bg-gray-500" },
  { id: "feedback", name: "Feedback & Support", icon: "🤝", color: "bg-pink-500" }
];

const forumPosts = [
  {
    id: "1",
    title: "Tips for creating unique 1/1 apparel designs?",
    content: "I'm working on my Foxed Has Mobiles submission and looking for advice on making truly unique designs. What techniques have worked for you?",
    author: { name: "Alex Chen", avatar: "AC", reputation: 1240 },
    category: { id: "foxed-mobiles", name: "Foxed Has Mobiles™", icon: "🦊" },
    replies: 23,
    likes: 45,
    views: 234,
    createdAt: "2025-01-25T10:30:00Z",
    isPinned: true,
    hasExpertReply: true
  },
  {
    id: "2",
    title: "Olympic color palette inspiration thread",
    content: "Let's share color palettes that capture the Olympic spirit! Post your favorite combinations for athletic wear designs.",
    author: { name: "Maya Rodriguez", avatar: "MR", reputation: 890 },
    category: { id: "fruitful-olympic", name: "Mr Fruitful™'s Olympic Threads", icon: "🍉" },
    replies: 18,
    likes: 32,
    views: 187,
    createdAt: "2025-01-24T15:45:00Z",
    isPinned: false,
    hasExpertReply: false
  },
  {
    id: "3",
    title: "Sustainable branding: Best practices discussion",
    content: "What are the key elements that make a brand truly sustainable? Let's discuss eco-friendly design principles.",
    author: { name: "Jordan Kim", avatar: "JK", reputation: 1567 },
    category: { id: "water-seed", name: "Water the Seed™", icon: "📦" },
    replies: 31,
    likes: 67,
    views: 345,
    createdAt: "2025-01-23T09:15:00Z",
    isPinned: false,
    hasExpertReply: true
  },
  {
    id: "4",
    title: "Chaos Cartography: Understanding abstract mapping",
    content: "I'm struggling with the concept of chaos cartography. Can someone explain how to approach abstract mapping effectively?",
    author: { name: "River Thompson", avatar: "RT", reputation: 456 },
    category: { id: "playing-seed", name: "Playing with the Seed™", icon: "🧬" },
    replies: 12,
    likes: 28,
    views: 156,
    createdAt: "2025-01-22T14:20:00Z",
    isPinned: false,
    hasExpertReply: false
  },
  {
    id: "5",
    title: "Stage design software recommendations?",
    content: "Looking for the best 3D software for stage design. What tools are you using for Crate Dance submissions?",
    author: { name: "Casey Morgan", avatar: "CM", reputation: 723 },
    category: { id: "crate-dance", name: "Crate Dance Showcase™", icon: "🌍" },
    replies: 19,
    likes: 41,
    views: 203,
    createdAt: "2025-01-21T11:55:00Z",
    isPinned: false,
    hasExpertReply: true
  },
  {
    id: "6",
    title: "Welcome new members! Introduce yourself here",
    content: "New to the competition? Tell us about yourself and what category interests you most!",
    author: { name: "Competition Team", avatar: "CT", reputation: 9999 },
    category: { id: "general", name: "General Discussion", icon: "🌟" },
    replies: 89,
    likes: 156,
    views: 892,
    createdAt: "2025-01-20T08:00:00Z",
    isPinned: true,
    hasExpertReply: false
  }
];

function ForumPostCard({ post }: { post: any }) {
  const timeSince = (date: string) => {
    const now = new Date().getTime();
    const posted = new Date(date).getTime();
    const days = Math.floor((now - posted) / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    return `${days} days ago`;
  };

  return (
    <Card className="hover:shadow-md transition-shadow animate-fade-in" data-testid={`card-post-${post.id}`}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Avatar className="flex-shrink-0" data-testid={`avatar-${post.id}`}>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {post.author.avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 flex-wrap">
                {post.isPinned && (
                  <Badge className="bg-yellow-500 text-white border-0" data-testid={`badge-pinned-${post.id}`}>
                    <Pin className="h-3 w-3 mr-1" />
                    Pinned
                  </Badge>
                )}
                {post.hasExpertReply && (
                  <Badge className="bg-purple-500 text-white border-0" data-testid={`badge-expert-${post.id}`}>
                    <Award className="h-3 w-3 mr-1" />
                    Expert Reply
                  </Badge>
                )}
                <Badge variant="outline" className="flex items-center gap-1" data-testid={`badge-category-${post.id}`}>
                  <span>{post.category.icon}</span>
                  <span className="text-xs">{post.category.name}</span>
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-1" data-testid={`text-time-${post.id}`}>
                <Calendar className="h-3 w-3" />
                {timeSince(post.createdAt)}
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer" data-testid={`text-title-${post.id}`}>
              {post.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-content-${post.id}`}>
              {post.content}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium" data-testid={`text-author-${post.id}`}>{post.author.name}</span>
                <Badge variant="secondary" className="text-xs" data-testid={`badge-reputation-${post.id}`}>
                  {post.author.reputation} rep
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1" data-testid={`stats-replies-${post.id}`}>
                  <MessageSquare className="h-4 w-4 text-blue-500" />
                  <span>{post.replies}</span>
                </div>
                <div className="flex items-center gap-1" data-testid={`stats-likes-${post.id}`}>
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1" data-testid={`stats-views-${post.id}`}>
                  <Eye className="h-4 w-4 text-gray-500" />
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CreatePostForm({ onSubmit }: { onSubmit: () => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim() && category) {
      onSubmit();
      setTitle("");
      setContent("");
      setCategory("");
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid="text-create-post-title">
          <Plus className="h-5 w-5" />
          Create New Discussion
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" data-testid="label-post-title">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What would you like to discuss?"
              data-testid="input-post-title"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium" data-testid="label-category">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger data-testid="select-post-category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {forumCategories.filter(cat => cat.id !== "all").map((cat) => (
                  <SelectItem key={cat.id} value={cat.id} data-testid={`option-${cat.id}`}>
                    {cat.icon} {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium" data-testid="label-content">Content</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts, questions, or insights..."
              className="min-h-24"
              data-testid="textarea-content"
            />
          </div>
          
          <Button type="submit" disabled={!title.trim() || !content.trim() || !category} data-testid="button-create-post">
            <Plus className="h-4 w-4 mr-2" />
            Create Discussion
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function Forum() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("browse");

  const filteredPosts = forumPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category.id === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Community Forum"
        subtitle="Connect, share knowledge, and get support from fellow creators"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse" data-testid="tab-browse">Browse Discussions</TabsTrigger>
            <TabsTrigger value="create" data-testid="tab-create">Create Post</TabsTrigger>
            <TabsTrigger value="trending" data-testid="tab-trending">Trending</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" data-testid="label-search-forum">Search Discussions</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      data-testid="input-search-forum"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" data-testid="label-category-filter">Category Filter</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger data-testid="select-category-filter">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {forumCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id} data-testid={`filter-${cat.id}`}>
                          {cat.icon} {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button className="w-full" data-testid="button-new-discussion">
                    <Plus className="h-4 w-4 mr-2" />
                    New Discussion
                  </Button>
                </div>
              </div>
            </div>

            {/* Forum Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center p-4 animate-fade-in-delay">
                <div className="text-2xl font-bold text-primary" data-testid="text-total-discussions">{filteredPosts.length}</div>
                <div className="text-sm text-muted-foreground">Discussions</div>
              </Card>
              <Card className="text-center p-4 animate-fade-in-delay">
                <div className="text-2xl font-bold text-primary" data-testid="text-total-replies">{filteredPosts.reduce((sum, p) => sum + p.replies, 0)}</div>
                <div className="text-sm text-muted-foreground">Total Replies</div>
              </Card>
              <Card className="text-center p-4 animate-fade-in-delay">
                <div className="text-2xl font-bold text-primary" data-testid="text-active-members">247</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </Card>
              <Card className="text-center p-4 animate-fade-in-delay">
                <div className="text-2xl font-bold text-primary" data-testid="text-expert-replies">{filteredPosts.filter(p => p.hasExpertReply).length}</div>
                <div className="text-sm text-muted-foreground">Expert Replies</div>
              </Card>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post, index) => (
                <div key={post.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <ForumPostCard post={post} />
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <Card className="text-center py-12 animate-fade-in">
                <CardContent>
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-lg font-semibold mb-2" data-testid="text-no-discussions">No discussions found</h3>
                  <p className="text-muted-foreground mb-4" data-testid="text-try-different-search">Try adjusting your search or category filter</p>
                  <Button onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }} data-testid="button-clear-forum-filters">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="create">
            <CreatePostForm onSubmit={() => setActiveTab("browse")} />
          </TabsContent>

          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg" data-testid="text-trending-topics">
                    <TrendingUp className="h-5 w-5" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["1/1 Apparel Design Tips", "Olympic Color Theory", "Sustainable Branding", "3D Stage Modeling"].map((topic, i) => (
                      <div key={i} className="flex items-center gap-2" data-testid={`trending-topic-${i}`}>
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          #{i + 1}
                        </Badge>
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-delay">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg" data-testid="text-top-contributors">
                    <Users className="h-5 w-5" />
                    Top Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Jordan Kim", rep: 1567, badge: "🏆" },
                      { name: "Alex Chen", rep: 1240, badge: "🥈" },
                      { name: "Maya Rodriguez", rep: 890, badge: "🥉" }
                    ].map((user, i) => (
                      <div key={i} className="flex items-center justify-between" data-testid={`top-contributor-${i}`}>
                        <div className="flex items-center gap-2">
                          <span>{user.badge}</span>
                          <span className="text-sm font-medium">{user.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">{user.rep}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-delay">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg" data-testid="text-recent-activity">
                    <MessageSquare className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div data-testid="activity-1">🆕 New post in Foxed Has Mobiles™</div>
                    <div data-testid="activity-2">💬 5 new replies in Olympic Threads</div>
                    <div data-testid="activity-3">❤️ Popular post gained 50+ likes</div>
                    <div data-testid="activity-4">🏅 Expert answered chaos cartography question</div>
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