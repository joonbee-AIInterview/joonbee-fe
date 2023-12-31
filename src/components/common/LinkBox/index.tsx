'use client';
import Link from 'next/link';
import React from 'react';
import { Icon, IconName } from '@/components/ui/Icon';

type CardSize = 'sm' | 'md' | 'lg';
type CardColor = 'gray' | 'navy';
interface Discription {
  first: string;
  second: string;
  third: string;
}
export interface LinkBox extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CardSize;
  color?: CardColor;
  title: string;
  subTitle?: Discription;
  propsLink: string;
  children: React.ReactNode;
}

export const LinkBox = ({
  color = 'gray',
  size = 'sm',
  propsLink = '/',
  title = 'AI면접 시작하기',
  subTitle,
  children,
}: LinkBox) => {
  const baseStyles = `lg:text-xl md:text-lg xs:text-sm  w-full  font-bold flex items-center p-7 md:p-10 shadow-md  flex-grow mb-6 ${
    size === 'lg' ? 'rounded-2xl ' : 'rounded-xl'
  }`;

  const sizeStyles = {
    sm: 'justify-between h-[140px] max-w-[500px]',
    md: 'justify-between h-[140px] md:h-[312px] max-w-[800px] ',
    lg: 'justify-center lg:h-[480px] md:h-[420px] xs:h-[380px] flex-col-reverse',
  };

  const colorStyles = {
    gray: `bg-gray-light text-main-primary border-gray-normal border-4 hover:bg-white  hover:border-main-primary`,
    navy: 'bg-main-primary text-gray-light hover:bg-hover-primary ',
  };

  const LinkBoxStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color]}`;

  return (
    <Link href={propsLink} className={LinkBoxStyles}>
      {size === 'lg' && (
        <div className="lg:text-lg md:text-base mt-6 text-[#717171] text-sm">
          <p>{subTitle?.first}</p>
          <p>{subTitle?.second}</p>
          <p>{subTitle?.third}</p>
        </div>
      )}
      <div className={`${size === 'lg' && 'mt-10'}`}>{title}</div>
      {children}
    </Link>
  );
};
