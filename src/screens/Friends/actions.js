// Action to get all Users.
export function getFriends(response) {
  return {
    type: 'GET_FRIENDS',
    friends: response
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getFriendsThunk() {
  return function(dispatch, getState) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(e => e.json())
      .then(function(response){
        // console.log(response);
        dispatch(getFriends(response))
      })
      .catch((error) => {
        // console.error(error,"ERRRRRORRR");
      });
  }
}
