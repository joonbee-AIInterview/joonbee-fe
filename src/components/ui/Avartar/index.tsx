import Image from 'next/image';
import React from 'react';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  size?: AvatarSize;
  onClick?: () => void;
  thumbnail: string;
}

export const Avatar = ({ size = 'sm', thumbnail, onClick }: AvatarProps) => {
  const baseStyles = 'rounded-full bg-gray-normal relative';

  const sizeStyles = {
    sm: 'w-[26px] h-[26px]',
    md: 'w-[30px] h-[30px]',
    lg: 'w-[50px] h-[50px]',
    xl: 'w-[140px] h-[140px]',
  };

  const AvatarStyles = `${baseStyles} ${sizeStyles[size]}`;

  return (
    <div className={AvatarStyles} onClick={onClick}>
      {thumbnail && (
        <Image
          className="rounded-full"
          src={thumbnail}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
        />
      )}
    </div>
  );
};
