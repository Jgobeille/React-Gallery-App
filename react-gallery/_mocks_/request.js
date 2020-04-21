import axios from 'axios';

// API Call Mock
const searchQuery = () => {
  axios
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=01bcec277d5d77f570c5d79e10079e17&tags=sunset&per_page=24&page=1&format=json&nojsoncallback=1`
    )
    .then((res) => console.log(res.data.photos.photo));
};

export default searchQuery;
