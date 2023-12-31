import { selector } from 'recoil';
import { MyQuestion, myQuestionAtom } from './atom';
import { selectedCategoryAtom, selectedSubcategoryAtom } from '../selectedCategory/atom';

export const myQuestionFilterSelector = selector<MyQuestion[]>({
  key: 'myQuestionFilterSelector',
  get: ({ get }) => {
    const categoryName = get(selectedCategoryAtom);
    const subcategoryName = get(selectedSubcategoryAtom);
    const questions = get(myQuestionAtom);

    if (categoryName === '' || categoryName === '세부 카테고리') {
      return questions;
    }

    const filteredQuestions = questions.filter(question => {
      if (subcategoryName === '세부 카테고리') {
        return question.category === categoryName;
      }
      return question.category === categoryName && question.subcategory === subcategoryName;
    });
    return filteredQuestions;
  },
});
