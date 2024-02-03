'use client';

import { RecoilRoot } from 'recoil';
import DebugObserver from './debugObserver';

export default function RecoilRootProvider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      {children}
    </RecoilRoot>
  );
}
