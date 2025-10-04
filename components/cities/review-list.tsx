'use client';

import { Review } from '@/types';
import { ReviewItem } from './review-item';

interface ReviewListProps {
  reviews: Review[];
  currentUserId?: string;
}

export function ReviewList({ reviews, currentUserId }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          아직 작성된 리뷰가 없습니다.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          첫 번째 리뷰를 작성해보세요!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          currentUserId={currentUserId}
          isOwner={review.userId === currentUserId}
        />
      ))}
    </div>
  );
}
