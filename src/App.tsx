import { useFlag } from '@featurevisor/react';
import { Outlet } from 'react-router-dom';
import { VersionTech } from './components/vesionTech';
const App = () => {
  const isComponentEnabled = useFlag('versionTech', {
    country: new URLSearchParams(window.location.search).get('country'),
  });

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty - Fan Service</h1>
      </div>
      <Outlet />
      {isComponentEnabled && <VersionTech />}
    </div>
  );
};
export default App;
