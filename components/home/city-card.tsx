import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, MapPin } from 'lucide-react';
import { City } from '@/types';

interface CityCardProps {
  city: City;
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

export function CityCard({ city }: CityCardProps) {
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
          {city.likes > 1000 && (
            <Badge className="absolute top-2 right-2" variant="secondary">
              인기
            </Badge>
          )}
        </div>

        {/* City Info */}
        <div className="p-4 space-y-3">
          {/* Likes and Budget */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-4 w-4 text-primary" />
              <span className="font-semibold">{city.likes}</span>
              <span className="text-sm text-muted-foreground">
                ({city.totalReviews} 리뷰)
              </span>
            </div>
            <Badge variant="outline" className={`text-xs ${getBudgetColor(city.budget)}`}>
              {getBudgetLabel(city.budget)}
            </Badge>
          </div>

          {/* Environment Tags */}
          <div className="flex flex-wrap gap-1">
            {city.environment.slice(0, 2).map((env) => (
              <Badge key={env} variant="outline" className="text-xs">
                {env}
              </Badge>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {city.quickInfo.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Quick Info */}
          <div className="pt-2 border-t space-y-1">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {city.region}
            </p>
            <p className="text-xs text-muted-foreground">
              추천 체류: {city.quickInfo.recommendedStay}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
