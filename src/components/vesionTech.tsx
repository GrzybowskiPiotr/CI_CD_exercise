import React from 'react';

export function VersionTech() {
  return <div>
    <p>App Version:<span>{__APP_VERSION__}</span></p>
    <p>mode: <span>{import.meta.env.VITE_ENVIRONMENT}</span></p>
  </div>
}