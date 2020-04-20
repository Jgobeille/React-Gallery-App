import React from "react";
import Image from "./Image";
import NoResults from "./NoResults";

const Images = () => {
  //maps over the data and creates a gif component each time through the array
  //   images = results.map((image) => <Img url={} key={image.id} />);

  //   return context.loading ? (
  //     <p>Loading...</p>
  //   ) : (
  //     <ul className="gif-list">{images}</ul>
  //   );

  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        <li>
          <img
            src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
            alt=""
          />
        </li>
        {/* <!-- Not Found --> */}
        <NoResults />
      </ul>
    </div>
  );
};

export default Images;
