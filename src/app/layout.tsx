import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/sessionProvider';

import './globals.css'
import Navbar from './components/navbar';
import VerticalNav from './components/vertical-nav';

export default async function App({ children }: { children: ReactNode }): Promise<JSX.Element> {
  const session = await getServerSession()

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body>
        <SessionProvider session={session}>
          <div className='main-div'>
            <VerticalNav />
            <div>
              <Navbar />
              {children}
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}