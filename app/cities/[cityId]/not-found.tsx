import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPinOff, Home, Search } from 'lucide-react';
import Link from 'next/link';
import { cities } from '@/lib/dummy-data';
import { Badge } from '@/components/ui/badge';

export default function NotFound() {
  // Suggest some random cities
  const suggestedCities = cities.slice(0, 3);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="p-8 text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-muted rounded-full">
              <MapPinOff className="h-16 w-16 text-muted-foreground" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">도시를 찾을 수 없습니다</h1>
          <p className="text-muted-foreground mb-6">
            요청하신 도시 정보가 존재하지 않거나 삭제되었습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="gap-2">
                <Home className="h-4 w-4" />
                홈으로 돌아가기
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <Search className="h-4 w-4" />
                다른 도시 찾아보기
              </Button>
            </Link>
          </div>
        </Card>

        {/* Suggested Cities */}
        {suggestedCities.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">추천 도시</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suggestedCities.map((city) => (
                <Link key={city.cityId} href={`/cities/${city.cityId}`}>
                  <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{city.cityName}</h3>
                        <Badge variant="outline" className="text-xs">
                          {city.region}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {city.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm pt-2">
                        <span>👍 {city.likes}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                          리뷰 {city.totalReviews}개
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
