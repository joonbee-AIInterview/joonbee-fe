'use client';
import React from 'react';
import { googleLogin } from '../../../../public/.legacy/app/apis/services/auth';
import Image from 'next/image';
import { useOauthLogin } from '../../../../public/.legacy/hooks/oauth/useOauthLogin';

export default function OauthPage() {
  useOauthLogin('/auth/google', googleLogin);

  return (
    <div className="flex items-center justify-center mainBg origin-h">
      <Image src={'/loginLoading.gif'} width={250} height={250} alt="loding" />
    </div>
  );
}
