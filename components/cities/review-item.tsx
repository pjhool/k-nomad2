'use client';

import { useState, useTransition } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
// AlertDialog component not available, using confirm for now
import { Pencil, Trash2, Check, X } from 'lucide-react';
import { updateReview, deleteReview } from '@/app/actions/reviews';
import { useToast } from '@/hooks/use-toast';
import { Review } from '@/types';

interface ReviewItemProps {
  review: Review;
  currentUserId?: string;
  isOwner: boolean;
}

const MAX_CHARS = 500;

export function ReviewItem({ review, currentUserId, isOwner }: ReviewItemProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(review.content);

  const handleEdit = () => {
    setIsEditing(true);
    setEditContent(review.content);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContent(review.content);
  };

  const handleSaveEdit = async () => {
    if (!editContent.trim()) {
      toast({
        title: '오류',
        description: '리뷰 내용을 입력해주세요.',
        variant: 'destructive'
      });
      return;
    }

    if (editContent.length > MAX_CHARS) {
      toast({
        title: '오류',
        description: `리뷰는 최대 ${MAX_CHARS}자까지 작성 가능합니다.`,
        variant: 'destructive'
      });
      return;
    }

    if (!currentUserId) return;

    startTransition(async () => {
      const result = await updateReview(review.id, currentUserId, editContent);

      if (result.success) {
        toast({
          title: '성공',
          description: '리뷰가 수정되었습니다.'
        });
        setIsEditing(false);
      } else {
        toast({
          title: '오류',
          description: result.error || '리뷰 수정 중 오류가 발생했습니다.',
          variant: 'destructive'
        });
      }
    });
  };

  const handleDelete = async () => {
    if (!currentUserId) return;

    // Simple confirm dialog for now
    if (!confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      return;
    }

    startTransition(async () => {
      const result = await deleteReview(review.id, currentUserId);

      if (result.success) {
        toast({
          title: '성공',
          description: '리뷰가 삭제되었습니다.'
        });
      } else {
        toast({
          title: '오류',
          description: result.error || '리뷰 삭제 중 오류가 발생했습니다.',
          variant: 'destructive'
        });
      }
    });
  };

  const remainingChars = MAX_CHARS - editContent.length;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
            {review.userName[0]}
          </div>
          <div>
            <p className="font-medium">{review.userName}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                체류 {review.stayDuration}
              </Badge>
              <span>•</span>
              <span>{review.createdAt}</span>
            </div>
          </div>
        </div>

        {isOwner && !isEditing && (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleEdit}
              disabled={isPending}
              title="리뷰 수정"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              disabled={isPending}
              title="리뷰 삭제"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <div className="space-y-2">
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={5}
              maxLength={MAX_CHARS}
              className="resize-none"
              disabled={isPending}
            />
            <div className="flex justify-between items-center text-sm">
              <span className={`${remainingChars < 50 ? 'text-destructive' : 'text-muted-foreground'}`}>
                {remainingChars}자 남음
              </span>
              <span className="text-muted-foreground">
                {editContent.length} / {MAX_CHARS}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={handleSaveEdit}
              disabled={isPending || !editContent.trim()}
              className="gap-2"
            >
              <Check className="h-4 w-4" />
              저장
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancelEdit}
              disabled={isPending}
              className="gap-2"
            >
              <X className="h-4 w-4" />
              취소
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-sm whitespace-pre-wrap">{review.content}</p>
      )}

      {!isEditing && (
        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            👍 도움이 됐어요 ({review.helpful})
          </Button>
        </div>
      )}
    </Card>
  );
}
