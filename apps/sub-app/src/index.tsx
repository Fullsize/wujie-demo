import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Layout from '@/components/layout';
const root = createRoot(document.getElementById('app')!);
import './normalize.css';
import './index.css';
// if (window.__POWERED_BY_WUJIE__) {
//   window.__WUJIE_MOUNT = () => {
//     render();
//   };
//   window.__WUJIE_UNMOUNT = () => {
//     root.unmount();
//   };
// } else {
//   render();
// }

function render() {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <Layout />
      </HashRouter>
    </React.StrictMode>,
  );
}
render();
