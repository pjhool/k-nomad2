import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Bell, Menu, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏙️</span>
            <span className="text-xl font-bold">K-NOMAD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              홈
            </Link>
            <Link href="/cities" className="text-sm font-medium hover:text-primary transition-colors">
              도시탐색
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary transition-colors">
              커뮤니티
            </Link>
            <Link href="/guide" className="text-sm font-medium hover:text-primary transition-colors">
              가이드
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>로그인</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium">
                    홈
                  </Link>
                  <Link href="/cities" className="text-lg font-medium">
                    도시탐색
                  </Link>
                  <Link href="/community" className="text-lg font-medium">
                    커뮤니티
                  </Link>
                  <Link href="/guide" className="text-lg font-medium">
                    가이드
                  </Link>
                  <Button className="mt-4 w-full">로그인</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}