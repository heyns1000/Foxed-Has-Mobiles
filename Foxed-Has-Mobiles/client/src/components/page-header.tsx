import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useLocation } from "wouter";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  customBackPath?: string;
}

export function PageHeader({ title, subtitle, showBackButton = true, customBackPath }: PageHeaderProps) {
  const [location] = useLocation();
  
  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          {showBackButton && (
            <div className="flex gap-2">
              <Link href={customBackPath || "/"}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  data-testid="button-back"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
              </Link>
              <Link href="/">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  data-testid="button-home"
                >
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" data-testid="text-page-title">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in-delay" data-testid="text-page-subtitle">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}