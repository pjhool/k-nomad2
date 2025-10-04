export interface City {
  cityId: string;
  cityName: string;
  region: string;
  heroImage: string;
  thumbnail: string;
  likes: number;
  dislikes: number;
  budget: 'low' | 'medium' | 'high';
  environment: string[];
  bestSeason: string[];
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
  content: string;
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