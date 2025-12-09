import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import GetStarted from "@/pages/get-started";
import Submissions from "@/pages/submissions";
import Gallery from "@/pages/gallery";
import Forum from "@/pages/forum";
import FAQ from "@/pages/faq";
import Analytics from "@/pages/analytics";
import Collaboration from "@/pages/collaboration";
import Achievements from "@/pages/achievements";
import AIFeedback from "@/pages/ai-feedback";
import NoodleMountain from "@/pages/noodle-mountain";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/get-started" component={GetStarted}/>
      <Route path="/submissions" component={Submissions}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/forum" component={Forum}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/analytics" component={Analytics}/>
      <Route path="/collaboration" component={Collaboration}/>
      <Route path="/achievements" component={Achievements}/>
      <Route path="/ai-feedback" component={AIFeedback}/>
      <Route path="/noodle-mountain" component={NoodleMountain}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
