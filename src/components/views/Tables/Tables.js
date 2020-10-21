import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

export const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Link to="/tables/ordering">Booking</Link>
    <Link to="/tables/events">Event</Link>
  </div>
);