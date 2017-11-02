import React from 'react';

import styles from './styles.scss';


const Popup = (userData) => (
  <div className={styles.tooltip}>
    <h4 className={styles.title}>ID {userData.id} is {userData.type} {userData.name}</h4>
    <p className={styles.response}>API Response: {JSON.stringify(userData)}</p>
    <p className={styles.notice}>
      This tooltip only makes a request the first time. (see console)
    </p>
  </div>
);


export default Popup;
