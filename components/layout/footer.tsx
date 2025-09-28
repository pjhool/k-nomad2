import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏙️</span>
              <span className="text-xl font-bold">K-NOMAD</span>
            </div>
            <p className="text-sm text-muted-foreground">
              한국에서 노마드하기 좋은 도시를 찾아보세요
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cities" className="text-sm text-muted-foreground hover:text-primary">
                  도시 탐색
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-muted-foreground hover:text-primary">
                  커뮤니티
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-sm text-muted-foreground hover:text-primary">
                  노마드 가이드
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  소개
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="font-semibold mb-4">인기 도시</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cities/seoul" className="text-sm text-muted-foreground hover:text-primary">
                  서울
                </Link>
              </li>
              <li>
                <Link href="/cities/jeju" className="text-sm text-muted-foreground hover:text-primary">
                  제주
                </Link>
              </li>
              <li>
                <Link href="/cities/busan" className="text-sm text-muted-foreground hover:text-primary">
                  부산
                </Link>
              </li>
              <li>
                <Link href="/cities/gangneung" className="text-sm text-muted-foreground hover:text-primary">
                  강릉
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">문의</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@k-nomad.kr" className="text-sm text-muted-foreground hover:text-primary">
                  contact@k-nomad.kr
                </a>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="text-sm text-muted-foreground hover:text-primary">
                  파트너십 문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 K-NOMAD. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                이용약관
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}