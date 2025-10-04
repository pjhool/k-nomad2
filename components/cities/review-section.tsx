import { Review } from '@/types';
import { ReviewForm } from './review-form';
import { ReviewList } from './review-list';

interface ReviewSectionProps {
  cityId: string;
  reviews: Review[];
  userId?: string;
  userName?: string;
  userAvatar?: string;
  isAuthenticated: boolean;
}

export function ReviewSection({
  cityId,
  reviews,
  userId,
  userName,
  userAvatar,
  isAuthenticated
}: ReviewSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">리뷰</h2>
        <p className="text-muted-foreground">
          실제 디지털 노마드들의 경험을 확인해보세요
        </p>
      </div>

      {isAuthenticated && userId && userName && userAvatar ? (
        <ReviewForm
          cityId={cityId}
          userId={userId}
          userName={userName}
          userAvatar={userAvatar}
        />
      ) : (
        <div className="p-6 border border-dashed rounded-lg text-center">
          <p className="text-muted-foreground">
            리뷰를 작성하려면 로그인해주세요
          </p>
        </div>
      )}

      <ReviewList reviews={reviews} currentUserId={userId} />
    </div>
  );
}
