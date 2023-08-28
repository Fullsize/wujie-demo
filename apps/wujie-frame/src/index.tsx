import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { setupApp, preloadApp } from 'wujie';
import Layout from '@/components/layout';
import './normalize.css';
import './index.css';
preloadApp({
  name: 'subapp',
  url: '//localhost:8081',
  exec: true,
});
// 192.170.13.176/xzext/#/eco_sw_hgjj
preloadApp({
  name: 'eco_sw_hgjj',
  url: 'http://192.170.13.176/xzext',
  exec: true,
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
