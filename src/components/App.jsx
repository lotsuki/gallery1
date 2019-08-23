import React, { useState, useEffect } from 'react';

import Header from './Header.jsx';
import Images from './Images.jsx';

const App = (props) => {
	const [ data, setData ] = useState([]);
	const [ col, setCol ] = useState('');
	const [ wid, setWid ] = useState('');

	const findCol = (len) => {
		if (len === 1) setCol(1); setWid()
	};

	const findWid = (len) => {

	};

	useEffect(() => {
		fetch('https://als-image.herokuapp.com/assets/property/813769')
	  .then(res => res.json())
	  .then(data => {
	  	let arrayData = [];
	  	let obj = data.images;
	  	for (var key in obj) {
	  		let images = obj[key].map(image => `https://res.cloudinary.com/apartmentlist/image/upload/s--3zKUkn6n--/c_fill,dpr_auto,f_auto,g_center,h_415,q_auto,t_web-base,w_640/${image.public_id}.jpg`)
	  	  
	  	  arrayData.push({title: key, images});
	  	}
	  	setData(arrayData)
	  })
	  .catch(err => { console.log('Could not fetch data: ', err); })
	}, [])
	
  return ( 
  	<>
	    {
			  data && data.map(room => (
	        <div className="container" key={room.title}>
						<Header title={room.title}/>
			      <Images images={room.images}/>
	        </div>
			  ))
	  	}
  	</>
  )
}

export default App;