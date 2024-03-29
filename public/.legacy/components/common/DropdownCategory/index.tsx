import Dropdown from '../../ui/Dropdown';
import React, { useEffect, useState } from 'react';
import { questionCategory } from '../../../constants/category';
import { CategoryName, SubcategoryName } from '@/types/question';
import { useRecoilState } from 'recoil';
import { selectedSubcategoryListAtom } from '../../../recoil/selectedSubcategoryList/atom';
type DropdownCategoryProps = {
  color?: 'white' | 'darkNavy';
  size?: 'xs' | 'sm' | 'md';
  selectedCategory: CategoryName;
  selectedSubcategory: SubcategoryName;
  setSelectedCategory: (category: CategoryName) => void;
  setSelectedSubcategory: (subcategory: SubcategoryName) => void;
  callback?: () => void;
};
export default function DropdownCategory({
  color = 'white',
  size = 'sm',
  selectedCategory,
  selectedSubcategory,
  setSelectedCategory,
  setSelectedSubcategory,
  callback,
}: DropdownCategoryProps) {
  // const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryAtom);
  // const [selectedSubcategory, setSelectedSubcategory] = useRecoilState(selectedSubcategoryAtom);
  const [selectedSubcategories, setSelectedSubcategories] = useRecoilState(
    selectedSubcategoryListAtom,
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [subcategoryName, setSubcateogyName] = useState<SubcategoryName[]>([]);
  const categoryNames = questionCategory.map(item => item.category);
  useEffect(() => {
    selectedCategory === '' ? setIsDisabled(true) : setIsDisabled(false);

    setSubcateogyName(
      questionCategory.find(item => item.category === selectedCategory)?.subcategory || [],
    );
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedSubcategory('세부 카테고리');
    setSelectedSubcategories([]);

    if (callback) callback();
  }, [selectedCategory]);

  const handleCategorySelect: (item: CategoryName) => void = item => {
    setSelectedCategory(item);
  };

  const handleSubCategorySelect: (item: SubcategoryName) => void = item => {
    setSelectedSubcategory(item);
    setSelectedSubcategories(prev => [...prev, item]);
  };
  return (
    <div className="flex gap-5 relative z-10">
      <Dropdown
        size={size}
        title="카테고리"
        data={categoryNames}
        selected={selectedCategory}
        onSelect={handleCategorySelect}
        color={color}
      />
      <Dropdown
        size={size}
        data={subcategoryName}
        selected={selectedSubcategory}
        onSelect={handleSubCategorySelect}
        title="세부 카테고리"
        color={color}
        isDisabled={isDisabled}
      />
    </div>
  );
}
