import { Metadata } from 'next';
import { ReactNode } from 'react';

import Tab from '../../../components/Tab';
import Header from '../../../components/Header';

export const metadata = {
  title: 'YOOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }) => {
  return (
    <main className="relative bg-black h-screen overflow-hidden">
      <Header />

      <div className="flex">
        <Tab />
        
        <section className="flex h-[92vh] overflow-y-scroll flex-1 flex-col pb-6 max-md:pb-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;