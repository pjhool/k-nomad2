'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Filter, X } from 'lucide-react';
import { filterOptions } from '@/lib/dummy-data';

interface FilterPanelProps {
  onFilterChange?: (filters: any) => void;
}

export function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedInfra, setSelectedInfra] = useState<string[]>([]);

  const handleInterestToggle = (value: string) => {
    setSelectedInterests(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleInfraToggle = (value: string) => {
    setSelectedInfra(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedBudget('');
    setSelectedDuration('');
    setSelectedInterests([]);
    setSelectedInfra([]);
  };

  const activeFilterCount =
    (selectedBudget ? 1 : 0) +
    (selectedDuration ? 1 : 0) +
    selectedInterests.length +
    selectedInfra.length;

  return (
    <>
      {/* Desktop Filter Button */}
      <div className="hidden md:block">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative">
              <Filter className="h-4 w-4 mr-2" />
              필터
              {activeFilterCount > 0 && (
                <Badge className="ml-2" variant="secondary">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[400px]">
            <SheetHeader>
              <SheetTitle>필터</SheetTitle>
              <SheetDescription>
                원하는 조건으로 도시를 검색해보세요
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-6">
              {/* Budget Range */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm">예산 범위 (월)</h3>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger>
                    <SelectValue placeholder="예산을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.budgetRanges.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Stay Duration */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm">체류 기간</h3>
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="기간을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.stayDurations.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm">관심사</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.interests.map(option => (
                    <Badge
                      key={option.value}
                      variant={selectedInterests.includes(option.value) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleInterestToggle(option.value)}
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm">인프라</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.infrastructure.map(option => (
                    <Badge
                      key={option.value}
                      variant={selectedInfra.includes(option.value) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleInfraToggle(option.value)}
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearFilters}
                >
                  초기화
                </Button>
                <Button className="flex-1">
                  적용
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden">
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}