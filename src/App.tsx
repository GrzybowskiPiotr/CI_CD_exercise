import React from 'react';
import { Outlet } from 'react-router-dom';
import { VersionTech } from './components/vesionTech';
const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">
          🚀 Rick and Morty - Fan Service - CI_CD_execise {import.meta.env.VITE__APP_VERSION__}
        </h1>
      </div>
      <Outlet />
      <VersionTech />
    </div>
  );
};

export default App;
