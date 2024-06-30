"use client"
import { useEffect, useRef, useState } from "react";

interface Props {
    firstMAX: number;
    secondMAX: number;
    thirdMAX: number;
}
export const AnimationNumberRise = ({ firstMAX, secondMAX, thirdMAX }: Props) => {

    const [questionCount, setQuestionCount] = useState<number>(0);
    const [categoryCount, setCategoryCout] = useState<number>(0);
    const [langCount, setLangCount] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => { 
        let animationFrameId: number;

        const observer = new IntersectionObserver((entiries) => {
            const [entry] = entiries;

            if(entry.isIntersecting) {
                let start: number | null = null;
                const duration = 4000;

                const step = (timestamp: number) => {
                    if(!start) start = timestamp; // 이렇게 해야 시작 시간 구할 수 있음

                    const progress = timestamp - start; //애니메이션이 시작된 후 시간을 구함

                    const questionNewCount = Math.min(firstMAX, Math.floor((progress / duration) * firstMAX)); //나누고 소수점날림 (9000/진행시간) -> 현재 진행률 -> 소수점날림
                    const categoryNewCount = Math.min(secondMAX, Math.floor((progress / duration) * secondMAX));
                    const langCounNewCount = Math.min(thirdMAX, Math.floor((progress / duration) * thirdMAX));

                    setQuestionCount(questionNewCount);
                    setCategoryCout(categoryNewCount);
                    setLangCount(langCounNewCount);

                    if (progress < duration) {
                      animationFrameId = requestAnimationFrame(step);
                    } 
                }
                animationFrameId = requestAnimationFrame(step);
            }else{
                // setQuestionCount(0);
                // setCategoryCout(0);
                // setLangCount(0);
            }
        }, {
            threshold: 0.5
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
            cancelAnimationFrame(animationFrameId);
        };
    },[]);


    return (
        <div ref={ref}>
            <div className="flex flex-col">
                <span className="text-[#275ADC] text-[72px] font-semibold">{questionCount}</span>
                <span className="text-[#919FC5] text-[30px]">카테고리수 +</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#275ADC] text-[72px] font-semibold">{categoryCount}</span>
                <span className="text-[#919FC5] text-[30px]">카테고리수 +</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#275ADC] text-[72px] font-semibold">{langCount}</span>
                <span className="text-[#919FC5] text-[30px]">카테고리수 +</span>
            </div>
        </div>
    )
}