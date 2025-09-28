import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchBar } from '@/components/home/search-bar';
import { CityCard } from '@/components/home/city-card';
import { FilterPanel } from '@/components/home/filter-panel';
import { cities, popularCities } from '@/lib/dummy-data';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🇰🇷 한국에서 노마드하기 좋은 도시는?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              도시별 워케이션 정보, 생활비, 인프라, 커뮤니티 정보를 한눈에 비교하고 선택하세요
            </p>

            {/* Search Bar */}
            <div className="pt-4">
              <SearchBar />
            </div>

            {/* Popular Cities Quick Select */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {popularCities.map(city => (
                <Button
                  key={city}
                  variant="outline"
                  className="rounded-full"
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City Grid Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                🔥 인기 도시
              </h2>
              <p className="text-muted-foreground mt-1">
                노마드들이 가장 많이 찾는 도시들
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FilterPanel />
              <Select defaultValue="popular">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">인기순</SelectItem>
                  <SelectItem value="rating">평점순</SelectItem>
                  <SelectItem value="cost">생활비순</SelectItem>
                  <SelectItem value="recent">최신순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* City Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard key={city.cityId} city={city} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              더 많은 도시 보기
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            당신의 노마드 경험을 공유해주세요
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            직접 경험한 도시의 정보를 공유하고, 다른 노마드들과 소통해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              리뷰 작성하기
            </Button>
            <Button variant="outline" size="lg">
              커뮤니티 참여하기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">실시간 데이터</h3>
              <p className="text-muted-foreground text-sm">
                노마드들의 실제 경험을 바탕으로 업데이트되는 신뢰할 수 있는 정보
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">맞춤형 추천</h3>
              <p className="text-muted-foreground text-sm">
                예산, 관심사, 라이프스타일에 맞는 도시를 쉽게 찾아보세요
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">커뮤니티</h3>
              <p className="text-muted-foreground text-sm">
                같은 도시의 노마드들과 정보를 공유하고 네트워킹하세요
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}