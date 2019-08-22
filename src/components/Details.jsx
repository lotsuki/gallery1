import React from 'react';
import styles from '../index.scss';

const Details = ({details=['Gas oven, ', 'Gas stove']}) => {
  return (
    <div className="details-container">
    {details.map(detail => <span key={detail}>{detail}</span>)}
    </div>
  )
}

export default Details;