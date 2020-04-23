import React from 'react';
import Image from './Image';
import { Consumer } from './Context/index.js';
import NoResults from './NoResults';

const Images = () => {
  return (
    <Consumer>
      {({ images, loading, input }) => {
        console.log(input);
        const results = images;
        let imagesVar;
        let url;

        //maps over the data and creates a gif component each time through the array
        if (results <= 0) {
          imagesVar = <NoResults />;
        } else {
          imagesVar = results.map(
            (image) => (
              //formats url
              (url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`),
              (<Image url={url} key={image.id} />)
            )
          );
        }

        // if loading state is false then show loading paragraph tag
        return loading ? (
          <p>Loading...</p>
        ) : (
          <div className="photo-container">
            <h2>Results for {input}</h2>
            <ul>{imagesVar}</ul>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Images;
