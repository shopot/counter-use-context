import { ReactNode } from 'react';

import { CounterProvider } from './counter/provider.tsx';

export function StoreProvider({ children }: Props) {
  return <CounterProvider>{children}</CounterProvider>;
}

type Props = {
  children: ReactNode;
};
