import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Upload, FileText, Image, Video, Archive, CheckCircle, AlertCircle, Clock, Send } from "lucide-react";

const competitions = [
  { id: "foxed-mobiles", name: "Foxed Has Mobiles™", icon: "🦊", category: "1/1 Apparel Oracle" },
  { id: "fruitful-olympic", name: "Mr Fruitful™'s Olympic Threads", icon: "🍉", category: "Olympic Design" },
  { id: "water-seed", name: "Water the Seed™", icon: "📦", category: "Brandborn Creations" },
  { id: "playing-seed", name: "Playing with the Seed™", icon: "🧬", category: "Chaos Cartography" },
  { id: "crate-dance", name: "Crate Dance Showcase™", icon: "🌍", category: "Stage & Nation Design" },
  { id: "faa-university", name: "FAA University Identity Deck", icon: "🎓", category: "University Branding" }
];

const fileTypes = [
  { type: "image", icon: Image, accept: ".jpg,.jpeg,.png,.gif,.svg", maxSize: "10MB" },
  { type: "video", icon: Video, accept: ".mp4,.mov,.avi", maxSize: "100MB" },
  { type: "document", icon: FileText, accept: ".pdf,.doc,.docx", maxSize: "25MB" },
  { type: "archive", icon: Archive, accept: ".zip,.rar,.7z", maxSize: "50MB" }
];

function FileUploadZone({ onFileSelect, acceptedTypes }: any) {
  const [dragOver, setDragOver] = useState(false);

  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}`}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => { e.preventDefault(); setDragOver(false); onFileSelect(e.dataTransfer.files); }}
      data-testid="dropzone-file-upload"
    >
      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
      <p className="text-lg font-medium mb-2" data-testid="text-upload-instruction">Drop files here or click to browse</p>
      <p className="text-sm text-muted-foreground mb-4" data-testid="text-upload-formats">
        Supported: {acceptedTypes.join(", ")}
      </p>
      <Button variant="outline" data-testid="button-browse-files">
        <Upload className="h-4 w-4 mr-2" />
        Browse Files
      </Button>
    </div>
  );
}

function SubmissionPreview({ submission }: any) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending": return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-red-100 text-red-800";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow" data-testid={`card-submission-${submission.id}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl" data-testid={`icon-submission-${submission.id}`}>{submission.competition.icon}</span>
            <div>
              <CardTitle className="text-lg" data-testid={`text-submission-title-${submission.id}`}>{submission.title}</CardTitle>
              <p className="text-sm text-muted-foreground" data-testid={`text-submission-competition-${submission.id}`}>{submission.competition.name}</p>
            </div>
          </div>
          <Badge className={`${getStatusColor(submission.status)} flex items-center gap-1`} data-testid={`badge-status-${submission.id}`}>
            {getStatusIcon(submission.status)}
            {submission.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4" data-testid={`text-submission-description-${submission.id}`}>{submission.description}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span data-testid={`text-submission-date-${submission.id}`}>Submitted: {submission.submittedAt}</span>
          <span data-testid={`text-submission-files-${submission.id}`}>{submission.fileCount} files</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Submissions() {
  const [selectedCompetition, setSelectedCompetition] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("new");

  const existingSubmissions = [
    {
      id: "sub1",
      title: "Neon Fox Streetwear Collection",
      description: "A futuristic take on urban fashion with fox-inspired elements",
      competition: competitions[0],
      status: "completed",
      submittedAt: "2025-01-15",
      fileCount: 5
    },
    {
      id: "sub2",
      title: "Olympic Fruit Fusion",
      description: "Athletic wear inspired by tropical fruits and Olympic spirit",
      competition: competitions[1],
      status: "pending",
      submittedAt: "2025-01-20",
      fileCount: 3
    },
    {
      id: "sub3",
      title: "Sustainable Seed Brand Identity",
      description: "Complete branding package for eco-friendly startup",
      competition: competitions[2],
      status: "draft",
      submittedAt: "2025-01-22",
      fileCount: 8
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setActiveTab("existing");
    
    // Reset form
    setTitle("");
    setDescription("");
    setSelectedCompetition("");
    setFiles([]);
  };

  const formProgress = () => {
    let completed = 0;
    if (selectedCompetition) completed += 25;
    if (title.trim()) completed += 25;
    if (description.trim()) completed += 25;
    if (files.length > 0) completed += 25;
    return completed;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <PageHeader 
        title="Submission Center"
        subtitle="Submit your creative work with advanced tools and validation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-8">
          <Button
            variant={activeTab === "new" ? "default" : "outline"}
            onClick={() => setActiveTab("new")}
            data-testid="button-tab-new"
          >
            New Submission
          </Button>
          <Button
            variant={activeTab === "existing" ? "default" : "outline"}
            onClick={() => setActiveTab("existing")}
            data-testid="button-tab-existing"
          >
            My Submissions ({existingSubmissions.length})
          </Button>
        </div>

        {activeTab === "new" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle data-testid="text-progress-title">Submission Progress</CardTitle>
                  <div>
                    <Progress value={formProgress()} className="h-2" data-testid="progress-submission" />
                    <p className="text-sm text-muted-foreground mt-2" data-testid="text-progress-percentage">
                      {formProgress()}% Complete
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className={`flex items-center gap-2 ${selectedCompetition ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {selectedCompetition ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      <span className="text-sm">Competition Selected</span>
                    </div>
                    <div className={`flex items-center gap-2 ${title.trim() ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {title.trim() ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      <span className="text-sm">Title Added</span>
                    </div>
                    <div className={`flex items-center gap-2 ${description.trim() ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {description.trim() ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      <span className="text-sm">Description Written</span>
                    </div>
                    <div className={`flex items-center gap-2 ${files.length > 0 ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {files.length > 0 ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      <span className="text-sm">Files Uploaded</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Submission Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-form-title">Create New Submission</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Competition Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="competition" data-testid="label-competition">Competition</Label>
                      <Select value={selectedCompetition} onValueChange={setSelectedCompetition}>
                        <SelectTrigger data-testid="select-competition">
                          <SelectValue placeholder="Select a competition category" />
                        </SelectTrigger>
                        <SelectContent>
                          {competitions.map((comp) => (
                            <SelectItem key={comp.id} value={comp.id} data-testid={`option-${comp.id}`}>
                              {comp.icon} {comp.name} - {comp.category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title" data-testid="label-title">Submission Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Give your submission a compelling title"
                        data-testid="input-title"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description" data-testid="label-description">Description</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe your creative process, inspiration, and key features..."
                        className="min-h-24"
                        data-testid="textarea-description"
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-4">
                      <Label data-testid="label-files">Upload Files</Label>
                      <FileUploadZone 
                        onFileSelect={setFiles}
                        acceptedTypes={[".jpg", ".png", ".pdf", ".zip"]}
                      />
                      {files.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium" data-testid="text-uploaded-files">Uploaded Files:</p>
                          {Array.from(files).map((file, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded" data-testid={`file-${index}`}>
                              <FileText className="h-4 w-4" />
                              <span className="text-sm">{file.name}</span>
                              <span className="text-xs text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* AR Preview Section (if Foxed Has Mobiles selected) */}
                    {selectedCompetition === "foxed-mobiles" && (
                      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">🥽</span>
                            <h4 className="font-semibold" data-testid="text-ar-preview">AR Preview Available</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3" data-testid="text-ar-description">
                            View your 1/1 apparel design in augmented reality with our advanced preview tools.
                          </p>
                          <Button variant="outline" size="sm" disabled={files.length === 0} data-testid="button-ar-preview">
                            Launch AR Preview
                          </Button>
                        </CardContent>
                      </Card>
                    )}

                    {/* 3D Visualization (if Crate Dance selected) */}
                    {selectedCompetition === "crate-dance" && (
                      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">🎭</span>
                            <h4 className="font-semibold" data-testid="text-3d-visualization">3D Stage Visualization</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3" data-testid="text-3d-description">
                            Visualize your stage design in 3D with our advanced blueprint tools.
                          </p>
                          <Button variant="outline" size="sm" disabled={files.length === 0} data-testid="button-3d-preview">
                            Open 3D Visualizer
                          </Button>
                        </CardContent>
                      </Card>
                    )}

                    {/* Blockchain Verification */}
                    <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">🔗</span>
                          <h4 className="font-semibold" data-testid="text-blockchain-verification">Blockchain Verification</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3" data-testid="text-blockchain-description">
                          Your submission will be automatically verified and timestamped on the blockchain for authenticity.
                        </p>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-green-700" data-testid="text-blockchain-ready">Ready for verification</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={formProgress() < 100 || isSubmitting}
                      className="w-full"
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" />
                          Processing Submission...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit for Review
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "existing" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {existingSubmissions.map((submission) => (
                <SubmissionPreview key={submission.id} submission={submission} />
              ))}
            </div>
            {existingSubmissions.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold mb-2" data-testid="text-no-submissions">No Submissions Yet</h3>
                  <p className="text-muted-foreground mb-4" data-testid="text-create-first">Create your first submission to get started!</p>
                  <Button onClick={() => setActiveTab("new")} data-testid="button-create-first">
                    Create Submission
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}