import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Search, Filter, Heart, Eye, Star, Trophy, Calendar } from "lucide-react";

const sampleSubmissions = [
  {
    id: "1",
    title: "Neon Fox Streetwear Collection",
    artist: "Alex Chen",
    competition: { name: "Foxed Has Mobiles™", icon: "🦊", category: "1/1 Apparel Oracle" },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    likes: 234,
    views: 1205,
    rating: 4.8,
    featured: true,
    submittedAt: "2025-01-15"
  },
  {
    id: "2",
    title: "Olympic Fruit Fusion Athletic Wear",
    artist: "Maya Rodriguez",
    competition: { name: "Mr Fruitful™'s Olympic Threads", icon: "🍉", category: "Olympic Design" },
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=300&fit=crop",
    likes: 189,
    views: 892,
    rating: 4.6,
    featured: false,
    submittedAt: "2025-01-18"
  },
  {
    id: "3",
    title: "Sustainable Seed Brand Identity",
    artist: "Jordan Kim",
    competition: { name: "Water the Seed™", icon: "📦", category: "Brandborn Creations" },
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    likes: 156,
    views: 743,
    rating: 4.7,
    featured: true,
    submittedAt: "2025-01-20"
  },
  {
    id: "4",
    title: "Chaos Cartography: Mind Maps",
    artist: "River Thompson",
    competition: { name: "Playing with the Seed™", icon: "🧬", category: "Chaos Cartography" },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    likes: 298,
    views: 1456,
    rating: 4.9,
    featured: true,
    submittedAt: "2025-01-12"
  },
  {
    id: "5",
    title: "Digital Stage Blueprint",
    artist: "Casey Morgan",
    competition: { name: "Crate Dance Showcase™", icon: "🌍", category: "Stage & Nation Design" },
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    likes: 167,
    views: 634,
    rating: 4.5,
    featured: false,
    submittedAt: "2025-01-22"
  },
  {
    id: "6",
    title: "Modern University Identity System",
    artist: "Taylor Park",
    competition: { name: "FAA University Identity Deck", icon: "🎓", category: "University Branding" },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    likes: 134,
    views: 567,
    rating: 4.4,
    featured: false,
    submittedAt: "2025-01-25"
  }
];

const competitions = [
  { id: "all", name: "All Categories", icon: "🎨" },
  { id: "foxed-mobiles", name: "Foxed Has Mobiles™", icon: "🦊" },
  { id: "fruitful-olympic", name: "Mr Fruitful™'s Olympic Threads", icon: "🍉" },
  { id: "water-seed", name: "Water the Seed™", icon: "📦" },
  { id: "playing-seed", name: "Playing with the Seed™", icon: "🧬" },
  { id: "crate-dance", name: "Crate Dance Showcase™", icon: "🌍" },
  { id: "faa-university", name: "FAA University Identity Deck", icon: "🎓" }
];

function SubmissionCard({ submission }: { submission: any }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" data-testid={`card-submission-${submission.id}`}>
      <div className="relative">
        <img 
          src={submission.image} 
          alt={submission.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid={`img-submission-${submission.id}`}
        />
        {submission.featured && (
          <Badge className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0" data-testid={`badge-featured-${submission.id}`}>
            <Trophy className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        )}
        <div className="absolute top-2 right-2 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={() => setLiked(!liked)}
            data-testid={`button-like-${submission.id}`}
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg" data-testid={`icon-competition-${submission.id}`}>{submission.competition.icon}</span>
          <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${submission.id}`}>
            {submission.competition.category}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors" data-testid={`text-title-${submission.id}`}>
          {submission.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3" data-testid={`text-artist-${submission.id}`}>by {submission.artist}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1" data-testid={`stats-likes-${submission.id}`}>
              <Heart className="h-4 w-4 text-red-500" />
              <span>{submission.likes}</span>
            </div>
            <div className="flex items-center gap-1" data-testid={`stats-views-${submission.id}`}>
              <Eye className="h-4 w-4 text-blue-500" />
              <span>{submission.views}</span>
            </div>
            <div className="flex items-center gap-1" data-testid={`stats-rating-${submission.id}`}>
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span>{submission.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground" data-testid={`text-date-${submission.id}`}>
            <Calendar className="h-3 w-3" />
            <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [filteredSubmissions, setFilteredSubmissions] = useState(sampleSubmissions);

  const handleFilter = () => {
    let filtered = sampleSubmissions;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(submission => 
        submission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        submission.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        submission.competition.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(submission => 
        submission.competition.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Sort submissions
    switch (sortBy) {
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "popular":
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case "recent":
        filtered.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredSubmissions(filtered);
  };

  // Apply filters whenever dependencies change
  useState(() => {
    handleFilter();
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Submission Gallery"
        subtitle="Discover amazing creative work from our community"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" data-testid="label-search">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search submissions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" data-testid="label-category">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger data-testid="select-category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {competitions.map((comp) => (
                    <SelectItem key={comp.id} value={comp.id} data-testid={`option-${comp.id}`}>
                      {comp.icon} {comp.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" data-testid="label-sort">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger data-testid="select-sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured" data-testid="option-featured">Featured First</SelectItem>
                  <SelectItem value="popular" data-testid="option-popular">Most Popular</SelectItem>
                  <SelectItem value="recent" data-testid="option-recent">Most Recent</SelectItem>
                  <SelectItem value="rating" data-testid="option-rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button onClick={handleFilter} className="w-full" data-testid="button-apply-filters">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary" data-testid="text-total-submissions">{filteredSubmissions.length}</div>
            <div className="text-sm text-muted-foreground">Submissions</div>
          </Card>
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary" data-testid="text-featured-count">{filteredSubmissions.filter(s => s.featured).length}</div>
            <div className="text-sm text-muted-foreground">Featured</div>
          </Card>
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary" data-testid="text-avg-rating">4.7</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </Card>
          <Card className="text-center p-4 animate-fade-in-delay">
            <div className="text-2xl font-bold text-primary" data-testid="text-total-likes">{filteredSubmissions.reduce((sum, s) => sum + s.likes, 0)}</div>
            <div className="text-sm text-muted-foreground">Total Likes</div>
          </Card>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubmissions.map((submission, index) => (
            <div key={submission.id} style={{ animationDelay: `${index * 100}ms` }}>
              <SubmissionCard submission={submission} />
            </div>
          ))}
        </div>

        {filteredSubmissions.length === 0 && (
          <Card className="text-center py-12 animate-fade-in">
            <CardContent>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2" data-testid="text-no-results">No submissions found</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-try-different">Try adjusting your search criteria or filters</p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSortBy("featured");
                handleFilter();
              }} data-testid="button-clear-filters">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}