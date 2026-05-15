'use client';

import { useTranslation } from '@/hooks/useTranslation';
import FilterButton from '@/components/ui/FilterButton';

type FilterBarProps = {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export default function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  const { t } = useTranslation();
  const filterLabels = t.projects.filterLabels as Record<string, string>;

  return (
    <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 'auto' }}>
      {filters.map((f) => (
        <FilterButton key={f} active={activeFilter === f} onClick={() => onFilterChange(f)}>
          {filterLabels[f] ?? f}
        </FilterButton>
      ))}
    </div>
  );
}
