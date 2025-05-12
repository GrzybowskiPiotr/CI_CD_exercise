import React from 'react';

export function VersionTech() {
  return (
    <div>
      <p>App Version:</p>
      <p>{import.meta.env.APP_VERSION}</p>
    </div>
  );
}
