import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styles from './index.module.css';
import './index.css';
const Page = () => {
  const { path } = useParams();

  return (
    <div className={styles['constainer']}>
      <h1>
        主应用页面
        {!!path && ':' + path}
      </h1>
      <Outlet></Outlet>
    </div>
  );
};
export default Page;
