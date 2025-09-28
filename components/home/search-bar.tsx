'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="도시, 지역, 키워드 검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 h-14 text-lg rounded-full shadow-lg border-0 bg-white"
        />
        <Button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6"
        >
          검색
        </Button>
      </div>
    </form>
  );
}