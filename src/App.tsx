import React from 'react';
import { Outlet } from 'react-router-dom';
import { VersionTech } from './components/vesionTech';
const App = () => {
  console.log(import.meta.env.VITE_ENVIRONMENT)
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty - Fan Service</h1>
      </div>
      <Outlet />
      <VersionTech />
    </div>
  );
};

export default App;
