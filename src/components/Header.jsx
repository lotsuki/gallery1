import React from 'react';
import Title from './Title.jsx';
import Details from './Details.jsx';

const Header = (props) => {
  return (
    <div className="header">
    	<Title />
    	<Details />
    </div>
  )
}

export default Header;