'use client';
import { getLogout } from '../../../app/apis/services/auth';
import { BetweenBox } from '../../common/BetweenBox';
import { PolarChart } from '../../common/PolarChart';
import { Button } from '../../ui/Button';
import { VariableIcon } from '../../ui/VariableIcon';
import { useUserInfo } from '../../../hooks/useUserInfo';
import { isLoginedStatus } from '../../../recoil/isLogined/atom';
import { isNickNameStatus } from '../../../recoil/isNickNameStatus/atoms';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';
import useSWRMutation from 'swr/mutation';

export default function MyProfile() {
  const { userInfo, userInfoMutate } = useUserInfo();
  const [isLogined, setisLogined] = useRecoilState(isLoginedStatus);
  const [nickNameStatus, setNickNameStatus] = useRecoilState(isNickNameStatus);

  const { trigger } = useSWRMutation('/logout', getLogout, {
    onSuccess: () => {
      setisLogined(false);
      sessionStorage.setItem('isLogined', 'false');
      router.replace('/');
    },
  });

  const router = useRouter();

  const onClickLogout = () => {
    trigger();
  };

  if (!userInfo) return;
  return (
    <div className="h-auto bg-white w-[280px] p-6 rounded-2xl flex flex-col items-center">
      <h3 className="text-xl font-bold w-full mb-4">프로필</h3>
      <Image
        src={userInfo?.thumbnail}
        alt={userInfo.nickName}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="mt-4 flex flex-col items-center">
        <div className="flex gap-1">
          <p className=" text-xl font-bold">{userInfo?.nickName}</p>
          <button
            onClick={() => {
              setNickNameStatus({
                ...nickNameStatus,
                id: userInfo.id,
                isNickStatus: true,
              });
            }}>
            <VariableIcon name="edit" size={20} />
          </button>
        </div>
        <p className="text-sm ">{userInfo?.email && userInfo?.email}</p>
      </div>
      <div className="border-b-2 border-gray-light w-[80%] my-4"></div>
      <div className="flex flex-col gap-4 w-full">
        <BetweenBox first="면접 수" second={userInfo?.interviewCount} />
        <BetweenBox first="질문 수" second={userInfo?.questionCount} />
      </div>
      <div className="border-b-2 border-gray-light w-[80%] my-4"></div>
      <p className="text-xl font-bold pb-2 w-full">내 면접 질문 통계</p>
      <PolarChart data={userInfo.categoryInfo} />
      <div className="justify-end flex w-full">
        <Button size="2xs" text="xs" color="red" onClick={onClickLogout}>
          로그아웃
        </Button>
      </div>
    </div>
  );
}
