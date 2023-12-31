'use client';

import RandomInterview from './RandomInterview';
import ChocieInterview from './ChocieInterview';
import { useRecoilValue } from 'recoil';
import { interviewTypeAtom } from '@/recoil/interviewType/atom';
import useBeforeUnload from '@/hooks/useBeforeUnload';

export default function InterviewScreen() {
  const type = useRecoilValue(interviewTypeAtom);

  useBeforeUnload();

  return (
    <>
      {type === 'random' && <RandomInterview />}
      {type === 'choice' && <ChocieInterview />}
    </>
  );
}
