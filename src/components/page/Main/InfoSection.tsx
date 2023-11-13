import { ToggleInfo } from '@/components/common/ToggleInfo';
import React from 'react';

const data = [
  {
    id: 1,
    title: '랜덤면접은 뭔가요?',
    explanation: `면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!`,
  },
  {
    id: 2,
    title: '질문을 추가하고 싶으면 어떻게 해야하나요?',
    explanation: `면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!`,
  },
  {
    id: 3,
    title: 'react에 대해서 설명해주세요. 3',
    explanation: `면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!`,
  },
  {
    id: 4,
    title: 'react에 대해서 설명해주세요. 4',
    explanation: `면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!`,
  },
  {
    id: 5,
    title: 'react에 대해서 설명해주세요. 5',
    explanation: `면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!`,
  },
  {
    id: 6,
    title: 'react에 대해서 설명해주세요. 6',
    explanation: `면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!
    면접 영상은 1회성으로 확인이 가능해요.
    면접 후 확인 및 다운로드가 가능하고 그 후에는 저장되지 않아요.
    면접 영상을 따로 저장하고 싶으면 신중하게 다음 단계로 넘어가주세요!`,
  },
];

export default function InfoSection() {
  return (
    <section className="bg-background-bluegray w-full pb-20 flex flex-col items-center ">
      <h2 className="mt-14 mb-4  text-main-primary text-center text-3xl font-bold">
        JOONBEE에 대해서 궁금해요!
      </h2>
      <ul className="flex flex-wrap justify-between w-[1200px] gap-6 mt-12">
        {data.map(item => (
          <ToggleInfo key={item.id} title={item.title} explanation={item.explanation} />
        ))}
      </ul>
    </section>
  );
}
