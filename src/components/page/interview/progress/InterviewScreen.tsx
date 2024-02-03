'use client';

import RandomInterview from './RandomInterview';
import { useRecoilValue } from 'recoil';
import { interviewTypeAtom } from '@/recoil/interviewType/atom';
import useBeforeUnload from '@/hooks/useBeforeUnload';
import PreventBackModal from '@/components/common/PreventBackModal';
import ChoiceInterview from './ChocieInterview';

export default function InterviewScreen() {
  const type = useRecoilValue(interviewTypeAtom);

  useBeforeUnload();

  return (
    <>
      {type === 'random' && <RandomInterview />}
      {type === 'choice' && <ChoiceInterview />}
      <PreventBackModal />
    </>
  );
}
