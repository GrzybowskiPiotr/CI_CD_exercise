export function VersionTech() {
  const env = import.meta.env.VITE_ENVIRONMENT;
  return <div className='text-center mt-4 p-2 relative right-0 bottom-0 border-gray-100 rounded w-fit flex flex-col items-start'>
    <p>ENV: <span>{env || "DEV"}</span> VER:<span>{__APP_VERSION__}</span></p>
  </div>;
}