'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('City detail page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-destructive/10 rounded-full">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">문제가 발생했습니다</h1>
        <p className="text-muted-foreground mb-6">
          도시 정보를 불러오는 중 오류가 발생했습니다.
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-6 p-4 bg-muted rounded-lg text-left">
            <p className="text-xs font-mono text-destructive break-all">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Button onClick={() => reset()} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            다시 시도
          </Button>
          <Link href="/">
            <Button variant="outline" className="w-full gap-2">
              <Home className="h-4 w-4" />
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
