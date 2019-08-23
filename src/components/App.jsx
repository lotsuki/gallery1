import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Images from './Images.jsx';

const App = (props) => {
	const [ data, setData ] = useState([]);
	const [ col, setCol ] = useState(null);

	const findCol = (len) => {
		console.log(len, 'len')
		
	};

	const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('property_id');

	useEffect(() => {
		fetch(`https://als-image.herokuapp.com/assets/property/${myParam}`)
	  .then(res => res.json())
	  .then(data => {
	  	let arrayData = [];
	  	let col;
	  	let obj = data.images;
	  	for (var key in obj) {
	  		let images = obj[key].map(image => `https://res.cloudinary.com/apartmentlist/image/upload/s--3zKUkn6n--/c_fill,dpr_auto,f_auto,g_center,h_415,q_auto,t_web-base,w_640/${image.public_id}.jpg`)
	  	  if (images.length === 1) col = 1
				else if (images.length > 7) col = 3
				else col = 2

	  	  arrayData.push({title: key, images, col})
	  	  arrayData = arrayData.sort((a, b) => {
	  	  	if (a.title > b.title) return 1
	  	  	if (a.title < b.title) return -1
	  	  	else return 0
	  	  })
			 arrayData.forEach((obj, i) => {
			 	if (obj.title === 'Other') {
			 		let swap = obj;
			 		arrayData.splice(i, 1);
			 		arrayData.push(swap);
			 	}
			 })
	  	}
	  	findCol(arrayData.length);
	  	setData(arrayData);
	  })
	  .catch(err => { console.log('Could not fetch data: ', err); })
	}, [])
	
  return ( 
  	<div className="gallery-container">
	    {
			  data && data.map(room => (
	        <div className="gallery-wrapper" key={room.title}>
						<Header title={room.title}/>
			      <Images images={room.images} col={room.col}/>
	        </div>
			  ))
	  	}
  	</div>
  )
}

export default App;