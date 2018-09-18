// Action to get all Photos.
export function getPhotos(response) {
  return {
    type: 'GET_PHOTOS',
    photos: response
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getPhotosThunk(albumId: Integer) {
  return function(dispatch, getState) {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
    .then(e => e.json())
      .then(function(response){
        // console.log(response);
        dispatch(getPhotos(response))
      })
      .catch((error) => {
        // console.error(error,"ERRRRRORRR");
      });
  }
}
