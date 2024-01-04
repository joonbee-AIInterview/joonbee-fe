import React from 'react';
import Questions from './Questions';
import { useRecoilValue } from 'recoil';
import { myQuestionAtom } from '@/recoil/myQuestion/atom';

export default function ChocieInterview() {
  const questions = useRecoilValue(myQuestionAtom);

  const transformedQuestion = questions.map(question => ({
    questionId: question.questionId,
    questionContent: question.questionContent,
    answerContent: '',
  }));

  console.log('Choice', transformedQuestion);

  return (
    <>
      <Questions questions={transformedQuestion} />
    </>
  );
}
