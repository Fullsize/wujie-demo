import React from 'react';
import WujieReact from 'wujie-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Vite() {
  const location = useLocation();
  const navigation = useNavigate();
  const path = location.pathname.replace('/subapp', '').replace('/', ''); ////
  const viteUrl = `http://localhost:8081/#/` + path;
  console.log(15, viteUrl);
  const props = {
    jump: (name: string) => {
      navigation(`/${name}`);
    },
  };

  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <WujieReact
      width="100%"
      height="100%"
      name="subapp"
      url={viteUrl}
      sync={!path}
      props={props}
    ></WujieReact>
  );
}
