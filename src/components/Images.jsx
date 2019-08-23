import React from 'react';
import ImageMasonry from "react-image-masonry";

const Images = ({ images, col, wid, h }) => {
  return (
    <div className="image-container">
       <ImageMasonry
          imageUrls={images}
          numCols={2}
          containerWidth={"800px"}
        />
    </div>
  )
}

export default Images;

//styles={{height: {height}, objectFit: 'cover'}}


//images.map(image => {
            //   return (
            //   <div key={image}>
            //     <img 
            //       src={image}
            //       alt={image}
            //     ></img>
            //   </div>
            //   )
            // })


