import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Wifi, Coffee, Users, DollarSign } from 'lucide-react';
import { City } from '@/types';

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  // 생활비 레벨을 원화 기호로 표시
  const getCostLevel = (cost: number) => {
    const maxLevel = 5;
    const filledLevel = Math.round(maxLevel - cost); // 역으로 계산 (낮을수록 좋음)
    return '₩'.repeat(Math.max(1, Math.min(maxLevel, filledLevel)));
  };

  // 평점을 점으로 표시
  const getRatingDots = (rating: number) => {
    const maxDots = 5;
    const filledDots = Math.round(rating);
    return (
      <div className="flex space-x-1">
        {Array.from({ length: maxDots }, (_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i < filledDots ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Link href={`/cities/${city.cityId}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
        {/* City Image */}
        <div className="relative h-48 w-full bg-gradient-to-br from-blue-100 to-purple-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-700">{city.cityName}</p>
              <p className="text-sm text-gray-500 mt-1">{city.region}</p>
            </div>
          </div>
          {/* Popular Badge */}
          {city.totalReviews > 1000 && (
            <Badge className="absolute top-2 right-2" variant="secondary">
              인기
            </Badge>
          )}
        </div>

        {/* City Info */}
        <div className="p-4 space-y-3">
          {/* Overall Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{city.ratings.overall}</span>
              <span className="text-sm text-muted-foreground">
                ({city.totalReviews})
              </span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {getCostLevel(city.ratings.livingCost)}
            </span>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center space-y-1">
              <Wifi className="h-4 w-4 text-muted-foreground" />
              {getRatingDots(city.ratings.internetQuality)}
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Coffee className="h-4 w-4 text-muted-foreground" />
              {getRatingDots(city.ratings.cafeInfra)}
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              {getRatingDots(city.ratings.community)}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {city.quickInfo.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Quick Info */}
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              추천 체류: {city.quickInfo.recommendedStay}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}