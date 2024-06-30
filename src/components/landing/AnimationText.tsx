"use client"
import clsx from "clsx";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

interface Props {
    children: ReactNode;
}

export const AnimationText = ({ children }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer: IntersectionObserver = 
            new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
                const [entry] = entries;
                setIsVisible(visible => {
                    return !visible && entry.isIntersecting;
                });
            },
            {
                threshold: 0.5,
            });

        if(ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);

   return (
        <div
            ref={ref}
            className={clsx("opacity-0 translate-y-30 transition-all duration-700 ease-out w-full relative flex flex-col items-center",{
                "opacity-100 translate-y-10": isVisible
            })}
        >
            {children}
        </div>
    )
}