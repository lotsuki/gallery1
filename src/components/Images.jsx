import React from 'react';

const Images = ({ images }) => {
  return (
    <>
      <div className="image-container">
        {
          images.map(image => (
            <img key={image.public_id} src={`https://res.cloudinary.com/apartmentlist/image/upload/s--3zKUkn6n--/c_fill,dpr_auto,f_auto,g_center,h_415,q_auto,t_web-base,w_640/${image.public_id}.jpg`}></img>
          ))
        }
      </div>
    </>
  )
}

export default Images;


