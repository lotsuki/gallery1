import React from 'react';
import styles from '../index.scss';

const Details = ({details=['Gas oven, ', 'Gas stove']}) => {
  return (
    <div className="details-container">{null}</div>
  )
}

export default Details;

// {details.map(detail => <span key={detail}>{detail}</span>)}