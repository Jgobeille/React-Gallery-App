import React from 'react';
import Image from './Image';
import NoResults from './NoResults';
import { Consumer } from './Context/index.js';

const Images = () => {
  return (
    <Consumer>
      {({ images, loading }) => {
        const results = images;
        let imagesVar;
        let url;
        if (results.length <= 0) {
          imagesVar = <NoResults />;
        } else {
          //maps over the data and creates a gif component each time through the array
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
            <h2>Results</h2>
            <ul>{imagesVar}</ul>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Images;
