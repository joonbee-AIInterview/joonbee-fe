'use client';
import React from 'react';
import { CartClipboard } from '../CartClipboard';

type CardSize = 'sm' | 'md' | 'lg';
type CardColor = 'white' | 'gray' | 'navy';

export interface QuestionCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CardSize;
  color?: CardColor;
  btnColor?: 'text-black' | 'text-white';
  isCopy?: boolean;
}

export const QuestionCard = ({
  color = 'white',
  size = 'sm',
  children,
  btnColor = 'text-black',
  isCopy = false,
}: QuestionCardProps) => {
  const baseStyles = 'flex items-center  font-bold px-5 shadow-md rounded-lg justify-between';

  const sizeStyles = {
    sm: 'h-[42px] max-w-[290px] w-full text-[14px]',
    md: 'h-[52px] w-full lg:max-w-[480px] max-w-[1000px] text-xs',
    lg: 'h-[68px] w-[540px] text-[16px]',
  };

  const colorStyles = {
    white: 'bg-white text-main-primary',
    gray: `bg-gray-normal text-main-primary hover:border-4 hover:border-main-primary border-4 border-gray-normal`,
    navy: 'bg-main-primary text-gray-normal hover:border-4 hover:border-gray-disabled border-4 border-main-primary',
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color]}`;

  return (
    <div className={buttonStyles}>
      <p className="text-ellipsis break-words  overflow-hidden ">{children}</p>
      {isCopy && <CartClipboard onClick={() => {}} color={btnColor} />}
    </div>
  );
};
