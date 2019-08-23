import React from 'react';
import ImageMasonry from "react-image-masonry";

const Images = ({ images, col }) => {
  return (
    <div className="image-container">
       <ImageMasonry
          imageUrls={images}
          numCols={col}
          containerWidth={"900px"}
        />
    </div>
  )
}

export default Images;

//styles={{height: {height}, objectFit: 'cover'}}
// { imageUrls={images.map(image => {
//               return (
//               <div key={image}>
//                 <img 
//                   src={image}
//                   alt={image}
//                 ></img>
//               </div>
//               )
//             })}}





