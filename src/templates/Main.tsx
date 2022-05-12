import type { ReactNode } from 'react';

import Sidebar from '@/components/Sidebar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}
    <Sidebar />
    <div>{props.children}</div>
  </div>
);

export { Main };
