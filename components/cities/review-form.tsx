'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { createReview } from '@/app/actions/reviews';
import { useToast } from '@/hooks/use-toast';

interface ReviewFormProps {
  cityId: string;
  userId: string;
  userName: string;
  userAvatar: string;
}

const MAX_CHARS = 500;

export function ReviewForm({ cityId, userId, userName, userAvatar }: ReviewFormProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState('');
  const [stayDuration, setStayDuration] = useState('1개월');

  const remainingChars = MAX_CHARS - content.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      toast({
        title: '오류',
        description: '리뷰 내용을 입력해주세요.',
        variant: 'destructive'
      });
      return;
    }

    if (content.length > MAX_CHARS) {
      toast({
        title: '오류',
        description: `리뷰는 최대 ${MAX_CHARS}자까지 작성 가능합니다.`,
        variant: 'destructive'
      });
      return;
    }

    startTransition(async () => {
      const result = await createReview({
        cityId,
        userId,
        userName,
        userAvatar,
        content,
        stayDuration
      });

      if (result.success) {
        toast({
          title: '성공',
          description: '리뷰가 작성되었습니다.'
        });
        setContent('');
        setStayDuration('1개월');
      } else {
        toast({
          title: '오류',
          description: result.error || '리뷰 작성 중 오류가 발생했습니다.',
          variant: 'destructive'
        });
      }
    });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="review-content" className="text-base font-semibold">
            리뷰 작성
          </label>
          <p className="text-sm text-muted-foreground mb-2">
            이 도시에서의 경험을 공유해주세요
          </p>
        </div>

        <div className="space-y-2">
          <Textarea
            id="review-content"
            placeholder="이 도시에서의 경험, 장점, 단점 등을 자유롭게 작성해주세요..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
              {content.length} / {MAX_CHARS}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="stay-duration" className="text-sm font-medium">체류 기간</label>
          <Select value={stayDuration} onValueChange={setStayDuration} disabled={isPending}>
            <SelectTrigger id="stay-duration">
              <SelectValue placeholder="체류 기간 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1주일 미만">1주일 미만</SelectItem>
              <SelectItem value="1-2주일">1-2주일</SelectItem>
              <SelectItem value="1개월">1개월</SelectItem>
              <SelectItem value="2개월">2개월</SelectItem>
              <SelectItem value="3개월">3개월</SelectItem>
              <SelectItem value="6개월">6개월</SelectItem>
              <SelectItem value="1년 이상">1년 이상</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" disabled={isPending || !content.trim()} className="w-full">
          {isPending ? '작성 중...' : '리뷰 작성하기'}
        </Button>
      </form>
    </Card>
  );
}
