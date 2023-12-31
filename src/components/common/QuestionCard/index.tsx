'use client';
import React from 'react';
import { CartClipboard } from '../CartClipboard';
import { QustionItem } from '@/types/question';

type CardSize = 'sm' | 'md' | 'lg';
type CardColor = 'white' | 'gray' | 'navy';

export interface QuestionCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CardSize;
  color?: CardColor;
  text: string;
}

export const QuestionCard = ({
  color = 'white',
  size = 'sm',
  children,
  text,
}: QuestionCardProps) => {
  const baseStyles = 'flex items-center  font-bold px-5 shadow-md rounded-lg justify-between';

  const sizeStyles = {
    sm: 'h-[42px] max-w-[290px] w-full text-[14px] text-start ',
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
      <p className="text-ellipsis break-words overflow-hidden whitespace-nowrap">{text}</p>
      {children}
    </div>
  );
};
