'use client';
import React, { useState } from 'react';

export type InputProps = {
  isDisabled?: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const Input = ({ isDisabled = false, inputValue, setInputValue }: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const baseStyles = `text-[18px]   ${isDisabled ? 'text-gray-disabled' : 'text-main-primary'}
   px-5 font-bold shadow-md rounded-xl border-main-primary focus:border-4`;

  const sizeStyles = 'h-[60px] w-[570px] flex text-5 items-center';

  const buttonStyles = `
  ${baseStyles} ${sizeStyles}
  `;

  return (
    <input
      onChange={onChange}
      value={inputValue}
      className={buttonStyles}
      placeholder="질문을 작성해주세요."
      disabled={isDisabled}
    />
  );
};