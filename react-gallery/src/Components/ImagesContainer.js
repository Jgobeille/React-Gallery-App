import React from 'react';
import Image from './Image';
import { Consumer } from './Context/index.js';
import NoResults from './NoResults';
import Loader from './Loader';

const Images = () => {
  return (
    <Consumer>
      {({ images, loading, input }) => {
        const results = images;
        let imagesVar;
        let url;

        //maps over the data and creates a gif component each time through the array
        if (results.length <= 0) {
          imagesVar = <NoResults />;
        } else {
          imagesVar = results.map(
            (image) => (
              //formats url
              (url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`),
              (<Image url={url} key={image.id} />)
            )
          );
        }

        // if loading state is false then show loading paragraph tag
        if (loading) {
          return <Loader />;
        }

        if (results.length <= 0) {
          return (
            <div className="photo-container">
              <ul>{imagesVar}</ul>
            </div>
          );
        } else {
          return (
            <div className="photo-container">
              <h2 className="future glow">Results for {input}</h2>
              <ul>{imagesVar}</ul>
            </div>
          );
        }
      }}
    </Consumer>
  );
};

export default Images;
