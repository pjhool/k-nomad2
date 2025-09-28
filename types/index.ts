export interface City {
  cityId: string;
  cityName: string;
  region: string;
  heroImage: string;
  thumbnail: string;
  ratings: {
    overall: number;
    workEnvironment: number;
    livingCost: number;
    internetQuality: number;
    cafeInfra: number;
    community: number;
  };
  quickInfo: {
    monthlyBudget: string;
    recommendedStay: string;
    tags: string[];
  };
  description: string;
  totalReviews: number;
  lastUpdated: string;
}

export interface Review {
  id: string;
  cityId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  pros: string[];
  cons: string[];
  comment: string;
  stayDuration: string;
  createdAt: string;
  helpful: number;
}

export interface FilterOptions {
  budgetRange: {
    min: number;
    max: number;
  };
  stayDuration: string[];
  interests: string[];
  infrastructure: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  profession: string;
  bio?: string;
}