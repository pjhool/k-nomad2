import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Star,
  Wifi,
  Coffee,
  Users,
  DollarSign,
  MapPin,
  Calendar,
  Heart,
  Share2,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import { cities, reviews } from '@/lib/dummy-data';

interface PageProps {
  params: {
    cityId: string;
  };
}

export default function CityDetailPage({ params }: PageProps) {
  const city = cities.find(c => c.cityId === params.cityId);

  if (!city) {
    notFound();
  }

  const cityReviews = reviews.filter(r => r.cityId === city.cityId);

  const getRatingBar = (rating: number) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="flex items-center space-x-3">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm font-medium w-8">{rating}</span>
      </div>
    );
  };

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
            <Heart className="h-5 w-5" />
          </Button>
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
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline">예산</Badge>
                </div>
                <p className="text-sm font-semibold">{city.quickInfo.monthlyBudget}</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline">추천기간</Badge>
                </div>
                <p className="text-sm font-semibold">{city.quickInfo.recommendedStay}</p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline">지역</Badge>
                </div>
                <p className="text-sm font-semibold">{city.region}</p>
              </Card>
            </div>

            {/* Detailed Ratings */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">상세 평가</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Star className="h-4 w-4" /> 종합 평점
                    </span>
                  </div>
                  {getRatingBar(city.ratings.overall)}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Wifi className="h-4 w-4" /> 인터넷 품질
                    </span>
                  </div>
                  {getRatingBar(city.ratings.internetQuality)}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Coffee className="h-4 w-4" /> 카페 인프라
                    </span>
                  </div>
                  {getRatingBar(city.ratings.cafeInfra)}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4" /> 커뮤니티
                    </span>
                  </div>
                  {getRatingBar(city.ratings.community)}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> 생활비
                    </span>
                  </div>
                  {getRatingBar(city.ratings.livingCost)}
                </div>
              </div>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="reviews">리뷰</TabsTrigger>
                <TabsTrigger value="guide">가이드</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
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

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">주요 특징</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">빠른 인터넷과 수많은 카페로 작업 환경이 훌륭합니다</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">다양한 코워킹 스페이스와 네트워킹 기회가 있습니다</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">24시간 편의시설과 배달 문화가 발달했습니다</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6 space-y-4">
                {cityReviews.map(review => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          {review.userName[0]}
                        </div>
                        <div>
                          <p className="font-medium">{review.userName}</p>
                          <p className="text-sm text-muted-foreground">체류 {review.stayDuration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{review.rating}</span>
                      </div>
                    </div>

                    <p className="text-sm mb-4">{review.comment}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="flex flex-wrap gap-1">
                        {review.pros.map((pro, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-green-600 border-green-600">
                            {pro}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {review.cons.map((con, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-red-600 border-red-600">
                            {con}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{review.createdAt}</span>
                      <Button variant="ghost" size="sm">
                        👍 도움이 됐어요 ({review.helpful})
                      </Button>
                    </div>
                  </Card>
                ))}

                <div className="text-center pt-4">
                  <Button variant="outline">더 많은 리뷰 보기</Button>
                </div>
              </TabsContent>

              <TabsContent value="guide" className="mt-6 space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">추천 지역</h3>
                  <ul className="space-y-2">
                    <li className="text-sm">• 강남: 스타트업과 코워킹 스페이스가 밀집한 지역</li>
                    <li className="text-sm">• 성수: 힙한 카페와 창업 생태계가 활발한 지역</li>
                    <li className="text-sm">• 홍대: 젊은 에너지와 문화가 살아있는 지역</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">교통 정보</h3>
                  <ul className="space-y-2">
                    <li className="text-sm">• 지하철과 버스로 도시 어디든 쉽게 이동 가능</li>
                    <li className="text-sm">• 공항에서 도심까지 1시간 내외</li>
                    <li className="text-sm">• 따릉이(공공자전거) 이용 가능</li>
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="font-semibold mb-2">이 도시에 관심이 있으신가요?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                실제 경험자들과 소통하고 더 많은 정보를 얻어보세요
              </p>
              <div className="space-y-2">
                <Button className="w-full">커뮤니티 참여하기</Button>
                <Button variant="outline" className="w-full">리뷰 작성하기</Button>
              </div>
            </Card>

            {/* Similar Cities */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">비슷한 도시</h3>
              <div className="space-y-3">
                {cities.slice(0, 3).map(similarCity => (
                  <Link
                    key={similarCity.cityId}
                    href={`/cities/${similarCity.cityId}`}
                    className="flex items-center justify-between hover:bg-muted p-2 rounded-lg transition-colors"
                  >
                    <div>
                      <p className="font-medium">{similarCity.cityName}</p>
                      <p className="text-xs text-muted-foreground">{similarCity.region}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm">{similarCity.ratings.overall}</span>
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