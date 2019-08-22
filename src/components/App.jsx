import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Images from './Images.jsx';

const App = (props) => {
	const [ data, setData ] = useState(null);

	useEffect(() => {
		fetch('https://als-image.herokuapp.com/assets/property/813769')
	  .then(res => res.json())
	  .then(data => setData(data))
	  .catch(err => { console.log('Could not fetch data: ', err); })
	}, [])

  return (
  	<div className="container">
	    <Header data={data}/>
	    <Images data={data}/>
    </div>
  )
}

export default App;