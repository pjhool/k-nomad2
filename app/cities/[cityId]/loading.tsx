import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

// Simple skeleton component
function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-muted rounded ${className}`} />;
}

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation Skeleton */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" size="sm" className="gap-2" disabled>
          <ChevronLeft className="h-4 w-4" />
          뒤로가기
        </Button>
      </div>

      {/* Hero Section Skeleton */}
      <section className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-12 w-48" />
            <Skeleton className="h-6 w-96" />
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Like/Dislike Skeleton */}
            <Card className="p-6">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-32" />
              </div>
            </Card>

            {/* Info Cards Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-4">
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-5 w-32" />
                </Card>
              ))}
            </div>

            {/* Environment Card Skeleton */}
            <Card className="p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-5 w-24 mb-2" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </div>
                <div>
                  <Skeleton className="h-5 w-24 mb-2" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Reviews Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-8 w-32" />
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full" />
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="space-y-6">
            <Card className="p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between p-2">
                    <div>
                      <Skeleton className="h-4 w-20 mb-1" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <Skeleton className="h-4 w-12" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
