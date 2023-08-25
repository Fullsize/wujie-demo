import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { setupApp } from 'wujie';
import Layout from '@/components/layout';
import './normalize.css';
import './index.css';
setupApp({
  name: 'sub-app',
  url: 'http://localhost:8081',
  exec: true,
  sync: true,
});

const root = createRoot(document.getElementById('app')!);
function render() {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <Layout />
      </HashRouter>
    </React.StrictMode>,
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
