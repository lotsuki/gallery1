import React from 'react';
@import 'title';

const Title = ({ title="Kitchen"}) => {
  return (
    <div className={title}>{title}</div>
  )
};

export default Title;