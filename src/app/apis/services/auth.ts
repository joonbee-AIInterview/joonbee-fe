import { instance } from '../axios';

export const getToken = async () => {
  const res = await instance().get('/token');
  return res;
};

export const getRefresh = async () => {
  try {
    const res = await instance().get('/auth/login/refresh');
    return res;
  } catch (error: any) {
    const errorCode = error.response.data;
    throw errorCode;
  }
};

export const kakaoLogin = async (code: string) => {
  try {
    const res = await instance().get(`/auth/kakao/callback?code=${code}`);
    return res;
  } catch (error: any) {
    throw error;
  }
};
export const naverLogin = async (code: string) => {
  try {
    const res = await instance().get(`/auth/naver/callback?code=${code}`);
    return res;
  } catch (error: any) {
    throw error;
  }
};
export const googleLogin = async (code: string) => {
  try {
    const res = await instance().get(`/auth/google/callback?code=${code}`);
    return res;
  } catch (error: any) {
    throw error;
  }
};

type PostNickNameProps = {
  id: string;
  nickName: string;
};

export const postNickName = async ({ id, nickName }: PostNickNameProps) => {
  try {
    const res = await instance().post('/auth/login/nick', { id, nickName });
    return res;
  } catch (error: any) {
    const errorCode = error.request.status;
    throw errorCode;
  }
};

export const getLogout = async () => {
  const res = await instance().get('/auth/login/logout');
};
