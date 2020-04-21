import React from 'react';
import Image from './Image';
import NoResults from './NoResults';
import { Consumer } from './Context/index.js';

const Images = () => {
  //maps over the data and creates a gif component each time through the array
  //   images = results.map((image) => <Img url={} key={image.id} />);

  //   return context.loading ? (
  //     <p>Loading...</p>
  //   ) : (
  //     <ul className="gif-list">{images}</ul>
  //   );

  return (
    <Consumer>
      {({ images, loading }) => {
        const results = images;
        let imagesVar;
        let url;
        console.log(results);
        if (results.length <= 0) {
          imagesVar = <NoResults />;
        } else {
          imagesVar = results.map(
            (image) => (
              (url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`),
              (<Image url={url} key={image.id} />)
            )
          );
        }

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
