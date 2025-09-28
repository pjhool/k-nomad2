import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, User } from 'lucide-react';
import { signup } from '@/app/actions/auth';

export default function RegisterPage({
  searchParams,
}: {
  searchParams: { error?: string; message?: string };
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <span className="text-3xl">🏙️</span>
            <span className="text-2xl font-bold">K-NOMAD</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
            <CardDescription>
              K-NOMAD와 함께 한국 노마드 여행을 시작하세요
            </CardDescription>
          </CardHeader>

          <CardContent>
            {searchParams?.error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4">
                {searchParams.error}
              </div>
            )}

            {searchParams?.message && (
              <div className="bg-green-50 text-green-600 text-sm p-3 rounded-md mb-4">
                {searchParams.message}
              </div>
            )}

            <form action={signup} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  비밀번호
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    required
                    minLength={6}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  비밀번호는 최소 6자 이상이어야 합니다
                </p>
              </div>

              <Button
                type="submit"
                className="w-full"
              >
                회원가입
              </Button>
            </form>

            <div className="mt-6">
              <p className="text-sm text-muted-foreground text-center">
                회원가입 후 이메일을 확인하여 계정을 활성화해주세요
              </p>
            </div>
          </CardContent>

          <CardFooter>
            <div className="text-sm text-center w-full text-muted-foreground">
              이미 계정이 있으신가요?{' '}
              <Link href="/login" className="text-primary hover:underline font-medium">
                로그인
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}