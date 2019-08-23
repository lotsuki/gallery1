import React from 'react';
import Title from './Title.jsx';
import Details from './Details.jsx';

const Header = ({ title }) => {
  return (
    <div className="header">
    	<Title title={title}/>
    	<Details />
    </div>
  )
}

export default Header;