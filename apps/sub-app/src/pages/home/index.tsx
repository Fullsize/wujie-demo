import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styles from './index.module.css';
// import bg from "@images/1.png";
import './index.css';
const Page = () => {
  const { path } = useParams();
  return (
    <div className={styles['constainer']}>
      <h1>
        react18
        {!!path && ':' + path}
      </h1>
      <Outlet></Outlet>
    </div>
  );
};
export default Page;
