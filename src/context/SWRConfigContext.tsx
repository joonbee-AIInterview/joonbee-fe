'use client';
import { getRefresh } from '@/app/apis/services/auth';
import { isRefreshStatus } from '@/recoil/isRefresh/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import { SWRConfig } from 'swr';
import useSWRMutation from 'swr/mutation';

type Props = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: Props) {
  const [isRefresh, setIsRefresh] = useRecoilState(isRefreshStatus);

  const { trigger } = useSWRMutation('/auth/login/refresh', getRefresh, {
    onError: error => {
      setIsRefresh(true);
    },
  });

  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        onError: error => {
          if (error.response.status === 402) trigger();
        },
      }}>
      {children}
    </SWRConfig>
  );
}
