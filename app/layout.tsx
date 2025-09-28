import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K-NOMAD | 한국 디지털 노마드 도시 정보 플랫폼",
  description: "한국에서 노마드하기 좋은 도시를 찾아보세요. 도시별 워케이션 정보, 생활비, 인프라, 커뮤니티 정보를 한눈에 비교하고 선택하세요.",
  keywords: "디지털노마드, 워케이션, 한국노마드, 원격근무, 한달살기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
