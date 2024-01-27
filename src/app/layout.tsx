import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/sessionProvider';

import './globals.css'

export default async function App({ children }: { children: ReactNode }): Promise<JSX.Element> {
  const session = await getServerSession()

  return (
    <body>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </body>
  );
}