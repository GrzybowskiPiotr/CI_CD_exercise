import React from 'react';

export function VersionTech() {
  return <div>
    <p>{import.meta.env.APP_VERSION}</p>
  </div>
}