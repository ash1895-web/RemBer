import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/sessionProvider';

import './globals.css'
import Navbar from './components/navbar';

export default async function App({ children }: { children: ReactNode }): Promise<JSX.Element> {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}