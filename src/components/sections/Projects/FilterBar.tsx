'use client';

import FilterButton from '@/components/ui/FilterButton';

type FilterBarProps = {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export default function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
      {filters.map((f) => (
        <FilterButton key={f} active={activeFilter === f} onClick={() => onFilterChange(f)}>
          {f}
        </FilterButton>
      ))}
    </div>
  );
}
