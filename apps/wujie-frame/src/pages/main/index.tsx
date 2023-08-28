import React from 'react';
import { Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
const items = [
  { key: '/', label: '首页' },
  {
    key: '/subapp',
    label: 'react18',
    children: [
      {
        key: '/subapp',
        label: '首页',
      },
      {
        key: '/a',
        label: 'a',
      },
    ],
  },
];
const Page = () => {
  const navigate = useNavigate();
  const menuclick = (e: any) => {
    navigate(e.key);
  };
  return (
    <div className={styles['constainer']}>
      <Menu
        mode="inline"
        onClick={menuclick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        items={items}
      ></Menu>
      <div className={styles['main']}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Page;
