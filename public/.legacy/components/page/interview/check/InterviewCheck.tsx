'use client';

import { DetailQuestionCard } from '../../../common/DetailQuestionCard';
import PreventBackModal from '../../../common/PreventBackModal';
import PreventTabletModal from '../../../common/PreventTabletModal';
import { Button } from '../../../ui/Button';
import ModalPortal from '../../../ui/ModalPortal';
import { TextArea } from '../../../ui/TextArea';
import useBeforeUnload from '../../../../hooks/useBeforeUnload';
import { useModal } from '../../../../hooks/useModal';
import useModalOutsideClick from '../../../../hooks/useModalOutsideClick';
import { MyInterview, myInterviewAtom } from '../../../../recoil/myInterview/atom';
import { myInterviewEditSelector } from '../../../../recoil/myInterview/withEdit';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type interviewCheckProps = {
  disableBtn: (disabled: boolean) => void;
};

export default function InterviewCheck({ disableBtn }: interviewCheckProps) {
  const questions = useRecoilValue(myInterviewAtom);
  const setQuestion = useSetRecoilState(myInterviewEditSelector);
  const { isOpened, onClose, onOpen } = useModal();
  const [clickedQuestion, setClickedQuestion] = useState<MyInterview>();
  const [clickedCount, setClickedCount] = useState(0);
  const [newAnswer, setNewAnswer] = useState('');
  const [isEditmode, setIsEditMode] = useState(false);

  console.log('인터뷰 결과', questions);

  const handleClickQuestion = (question: MyInterview, questionCount: number) => {
    setClickedQuestion(question);
    setClickedCount(questionCount + 1);
    onOpen();
  };

  const handleToggleMode = () => {
    setIsEditMode(prev => !prev);
    setNewAnswer(clickedQuestion!.answerContent);
  };

  const handleSubmitAnswer = () => {
    setQuestion([
      {
        questionId: clickedQuestion!.questionId,
        questionContent: clickedQuestion!.questionContent,
        answerContent: newAnswer,
      },
    ]);
    handleToggleMode();
    onClose();
    setNewAnswer('');
  };

  const handleClose = () => {
    onClose();
    setIsEditMode(false);
    setNewAnswer('');
  };

  useEffect(() => {
    const isAnyBorderAlert = questions.some(question => !question.answerContent);
    if (isAnyBorderAlert) {
      disableBtn(true);
    } else {
      disableBtn(false);
    }
  }, [questions, disableBtn]);

  const { modalRef } = useModalOutsideClick(handleClose);
  useBeforeUnload();

  return (
    <>
      <ul className="flex flex-col gap-4 h-[380px] overflow-y-auto p-2 ">
        {questions.map((question, index) => {
          const isBorderAlert = !question.answerContent;
          return (
            <DetailQuestionCard
              question={question.questionContent}
              questionCount={index + 1}
              onClick={() => handleClickQuestion(question, index)}
              isBorderAlert={isBorderAlert}
              key={question.questionId}
            />
          );
        })}
      </ul>
      {isOpened && (
        <ModalPortal>
          <div className="fixed z-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-screen h-screen  bg-black/60 shadow-md flex items-center justify-center">
            <div
              ref={modalRef}
              className="w-[874px] h-[500px] rounded-xl bg-white shadow-md relative p-5">
              <div className="flex justify-between items-end pb-3 border-b-2 border-gray-light mb-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-dark text-[18px] min-w-[54px] font-bold mr-5">
                    질문 {clickedCount}
                  </h2>
                  <p className="text-[16px] text-gray-dark font-bold pr-4">
                    {clickedQuestion?.questionContent}
                  </p>
                </div>
                <div className="flex gap-2">
                  {isEditmode ? (
                    <Button text="xs" size="xs" color="blueSecondary" onClick={handleSubmitAnswer}>
                      변경
                    </Button>
                  ) : (
                    <Button text="xs" size="xs" color="blueSecondary" onClick={handleToggleMode}>
                      수정
                    </Button>
                  )}

                  <Button text="xs" size="xs" color="darkGray" onClick={handleClose}>
                    닫기
                  </Button>
                </div>
              </div>
              <h2 className="text-gray-dark text-[18px] font-bold mb-5">답변</h2>
              <div className="h-auto bg-gray-normal opacity-60 shadow-md rounded-xl p-5">
                {isEditmode ? (
                  <TextArea
                    size="auto"
                    isRead={false}
                    inputValue={newAnswer}
                    setInputValue={setNewAnswer}
                  />
                ) : (
                  <p className="text-main-primary text-[16px] font-bold">
                    {clickedQuestion?.answerContent}
                  </p>
                )}
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
      <PreventBackModal />
      <PreventTabletModal />
    </>
  );
}
