import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '0 128px 150px',
      }}
    >
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
