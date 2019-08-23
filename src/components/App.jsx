import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Images from './Images.jsx';

const App = (props) => {
	const [ data, setData ] = useState(null);

	useEffect(() => {
		fetch('https://als-image.herokuapp.com/assets/property/813769')
	  .then(res => res.json())
	  .then(data => {
	  	let arrayData = [];
	  	let obj = data.images;
	  	for (var key in obj) {
	  	  arrayData.push({title: key, images: obj[key]});
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