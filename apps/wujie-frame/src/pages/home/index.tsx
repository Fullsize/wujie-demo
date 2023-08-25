import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import './index.css';
const Page = () => {
  return (
    <div className={styles['constainer']}>
      <div className="name">无界主应用</div>
      <div>
        <Link to="/subapp">subapp</Link>
      </div>
      <div>
        <Link to="/subapp/a">subapp/a</Link>
      </div>
      {/* <img src={bg} alt="" /> */}
      <div></div>
    </div>
  );
};
export default Page;
