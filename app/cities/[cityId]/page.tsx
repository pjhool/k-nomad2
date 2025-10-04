import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  DollarSign,
  MapPin,
  Calendar,
  Share2,
  ChevronLeft,
  Leaf,
  Building2
} from 'lucide-react';
import Link from 'next/link';
import { cities, reviews } from '@/lib/dummy-data';
import { LikeDislikeSection } from '@/components/cities/like-dislike-section';
import { ReviewSection } from '@/components/cities/review-section';
import { createClient } from '@/utils/supabase/server';

interface PageProps {
  params: {
    cityId: string;
  };
}

const getBudgetLabel = (budget: string) => {
  switch (budget) {
    case 'low':
      return '저렴';
    case 'medium':
      return '보통';
    case 'high':
      return '높음';
    default:
      return budget;
  }
};

const getBudgetColor = (budget: string) => {
  switch (budget) {
    case 'low':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'high':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return '';
  }
};

export default async function CityDetailPage({ params }: PageProps) {
  const city = cities.find(c => c.cityId === params.cityId);

  if (!city) {
    notFound();
  }

  const cityReviews = reviews.filter(r => r.cityId === city.cityId);

  // Get current user from Supabase
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isAuthenticated = !!user;
  const userId = user?.id;
  const userName = user?.user_metadata?.name || user?.email?.split('@')[0] || '익명';
  const userAvatar = user?.user_metadata?.avatar_url || '/avatars/default.jpg';

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            뒤로가기
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                {city.region}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                리뷰 {city.totalReviews}개
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{city.cityName}</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              {city.description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur border-0">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Like/Dislike Section */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">이 도시가 마음에 드시나요?</h3>
              <LikeDislikeSection
                cityId={city.cityId}
                initialLikes={city.likes}
                initialDislikes={city.dislikes}
                userId={userId}
                isAuthenticated={isAuthenticated}
              />
            </Card>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline" className={getBudgetColor(city.budget)}>
                    {getBudgetLabel(city.budget)}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">예산</p>
                <p className="text-sm font-semibold">{city.quickInfo.monthlyBudget}</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline">추천기간</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">체류 기간</p>
                <p className="text-sm font-semibold">{city.quickInfo.recommendedStay}</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline">지역</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">위치</p>
                <p className="text-sm font-semibold">{city.region}</p>
              </Card>
            </div>

            {/* Environment & Season Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">환경 및 계절</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">작업 환경</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.environment.map((env) => (
                      <Badge key={env} variant="secondary">
                        {env}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">최적 계절</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.bestSeason.map((season) => (
                      <Badge key={season} variant="outline">
                        {season}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">이런 분들께 추천해요</h3>
              <div className="flex flex-wrap gap-2">
                {city.quickInfo.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Review Section */}
            <ReviewSection
              cityId={city.cityId}
              reviews={cityReviews}
              userId={userId}
              userName={userName}
              userAvatar={userAvatar}
              isAuthenticated={isAuthenticated}
            />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Similar Cities */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">비슷한 도시</h3>
              <div className="space-y-3">
                {cities
                  .filter(c => c.cityId !== city.cityId && c.region === city.region)
                  .slice(0, 3)
                  .map(similarCity => (
                    <Link
                      key={similarCity.cityId}
                      href={`/cities/${similarCity.cityId}`}
                      className="flex items-center justify-between hover:bg-muted p-2 rounded-lg transition-colors"
                    >
                      <div>
                        <p className="font-medium">{similarCity.cityName}</p>
                        <p className="text-xs text-muted-foreground">{similarCity.region}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <span>👍 {similarCity.likes}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>

            {/* Last Updated */}
            <Card className="p-4">
              <p className="text-xs text-muted-foreground text-center">
                마지막 업데이트: {city.lastUpdated}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
