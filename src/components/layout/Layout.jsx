import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './Aside';

function Layout() {
  return (
    <div>
      <Aside />
      <main className="ml-[220px] p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
