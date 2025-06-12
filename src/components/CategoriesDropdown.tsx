
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useQuery } from '@tanstack/react-query';
import { wordpressApi } from '@/services/wordpressApi';

interface CategoriesDropdownProps {
  selectedCategory?: number;
  onCategoryChange: (categoryId?: number) => void;
}

const CategoriesDropdown = ({ selectedCategory, onCategoryChange }: CategoriesDropdownProps) => {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () => wordpressApi.getCategories(),
  });

  const selectedCategoryName = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)?.name 
    : 'Toutes les catégories';

  return (
    <Select
      value={selectedCategory?.toString() || 'all'}
      onValueChange={(value) => {
        if (value === 'all') {
          onCategoryChange(undefined);
        } else {
          onCategoryChange(parseInt(value));
        }
      }}
    >
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Catégories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Toutes les catégories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.id.toString()}>
            {category.name} ({category.count})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoriesDropdown;
