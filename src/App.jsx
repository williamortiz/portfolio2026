import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const target = `${import.meta.env.BASE_URL}portfolio/index.html`;
    window.location.replace(target);
  }, []);

  return null;
}
