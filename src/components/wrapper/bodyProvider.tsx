"use client"
import { ReactNode } from "react"
import { Noto_Sans_KR } from 'next/font/google';
import { usePathname } from "next/navigation";
import clsx from "clsx";

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
});

export const BodyProvider = ({children}: {children: ReactNode}) => {
    const pathname = usePathname();
    
    return (
        <body
            suppressHydrationWarning={true}
            className={clsx(
                notoSansKr.className,
                'bg-white text-gray-dark',
                {
                    'overflow-y-auto': pathname === process.env.NEXT_PUBLIC_LANDING_PATH
                }
            )}
            id="portal"
        >
            {children}
        </body>
    )
}