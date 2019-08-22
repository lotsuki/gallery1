import React from 'react';
import styles from '../index.scss';

const Title = ({ title="Kitchen"}) => {
  return (
    <div className="title">{title}</div>
  )
};

export default Title;