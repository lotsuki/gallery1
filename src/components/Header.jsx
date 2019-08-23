import React from 'react';
import Title from './Title.jsx';

const Header = ({ title }) => {
  return (
    <div className="header">
    	<Title title={title}/>
    </div>
  )
}

export default Header;