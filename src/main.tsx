import { createRoot } from 'react-dom/client';

import App from './App';

import './styles/index.css';
import '@unocss/reset/tailwind.css';
import 'uno.css';

console.table(import.meta.env);

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }
  const { worker } = await import('../mock');
  worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
