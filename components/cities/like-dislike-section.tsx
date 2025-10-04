'use client';

import { useOptimistic, useTransition } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toggleLike, toggleDislike } from '@/app/actions/cities';
import { useToast } from '@/hooks/use-toast';

interface LikeDislikeSectionProps {
  cityId: string;
  initialLikes: number;
  initialDislikes: number;
  userId?: string;
  isAuthenticated: boolean;
}

type ReactionState = {
  likes: number;
  dislikes: number;
  userReaction: 'like' | 'dislike' | null;
};

export function LikeDislikeSection({
  cityId,
  initialLikes,
  initialDislikes,
  userId,
  isAuthenticated
}: LikeDislikeSectionProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [optimisticState, setOptimisticState] = useOptimistic<ReactionState, 'like' | 'dislike'>(
    { likes: initialLikes, dislikes: initialDislikes, userReaction: null },
    (state, newReaction) => {
      if (newReaction === 'like') {
        if (state.userReaction === 'like') {
          // Unlike
          return { ...state, likes: state.likes - 1, userReaction: null };
        } else if (state.userReaction === 'dislike') {
          // Switch from dislike to like
          return { ...state, likes: state.likes + 1, dislikes: state.dislikes - 1, userReaction: 'like' };
        } else {
          // New like
          return { ...state, likes: state.likes + 1, userReaction: 'like' };
        }
      } else {
        // newReaction === 'dislike'
        if (state.userReaction === 'dislike') {
          // Un-dislike
          return { ...state, dislikes: state.dislikes - 1, userReaction: null };
        } else if (state.userReaction === 'like') {
          // Switch from like to dislike
          return { ...state, likes: state.likes - 1, dislikes: state.dislikes + 1, userReaction: 'dislike' };
        } else {
          // New dislike
          return { ...state, dislikes: state.dislikes + 1, userReaction: 'dislike' };
        }
      }
    }
  );

  const handleLike = async () => {
    if (!isAuthenticated) {
      toast({
        title: '로그인이 필요합니다',
        description: '좋아요를 누르려면 로그인해주세요.',
        variant: 'destructive'
      });
      return;
    }

    if (!userId) return;

    startTransition(async () => {
      setOptimisticState('like');
      const result = await toggleLike(cityId, userId);

      if (!result.success) {
        toast({
          title: '오류',
          description: result.error || '좋아요 처리 중 오류가 발생했습니다.',
          variant: 'destructive'
        });
      }
    });
  };

  const handleDislike = async () => {
    if (!isAuthenticated) {
      toast({
        title: '로그인이 필요합니다',
        description: '싫어요를 누르려면 로그인해주세요.',
        variant: 'destructive'
      });
      return;
    }

    if (!userId) return;

    startTransition(async () => {
      setOptimisticState('dislike');
      const result = await toggleDislike(cityId, userId);

      if (!result.success) {
        toast({
          title: '오류',
          description: result.error || '싫어요 처리 중 오류가 발생했습니다.',
          variant: 'destructive'
        });
      }
    });
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant={optimisticState.userReaction === 'like' ? 'default' : 'outline'}
        size="lg"
        onClick={handleLike}
        disabled={isPending || !isAuthenticated}
        className="gap-2"
      >
        <ThumbsUp className={`h-5 w-5 ${optimisticState.userReaction === 'like' ? 'fill-current' : ''}`} />
        <span className="font-semibold">{optimisticState.likes}</span>
      </Button>

      <Button
        variant={optimisticState.userReaction === 'dislike' ? 'default' : 'outline'}
        size="lg"
        onClick={handleDislike}
        disabled={isPending || !isAuthenticated}
        className="gap-2"
      >
        <ThumbsDown className={`h-5 w-5 ${optimisticState.userReaction === 'dislike' ? 'fill-current' : ''}`} />
        <span className="font-semibold">{optimisticState.dislikes}</span>
      </Button>

      {!isAuthenticated && (
        <p className="text-sm text-muted-foreground">
          로그인하여 반응을 남겨보세요
        </p>
      )}
    </div>
  );
}
