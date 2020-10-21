import React from 'react';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';

export const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to="/waiter/order">Booking</Link>
  </div>
);