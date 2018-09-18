// Action to get all Todos.
export function getTodos(response) {
  return {
    type: 'GET_TODOS',
    todos: response
  }
}

// Action to get all Posts.
export function getPosts(response) {
  return {
    type: 'GET_POSTS',
    posts: response
  }
}

// Action to get all Albums.
export function getAlbums(response) {
  return {
    type: 'GET_ALBUMS',
    albums: response
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getTodosThunk(friendId: interger) {
  return function(dispatch, getState) {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + friendId)
    .then(e => e.json())
      .then(function(response){
        // console.log(response);
        dispatch(getTodos(response))
      })
      .catch((error) => {
        // console.error(error,"ERRRRRORRR");
      });
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getPostsThunk(friendId: interger) {
  return function(dispatch, getState) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + friendId)
    .then(e => e.json())
      .then(function(response){
        // console.log(response);
        dispatch(getPosts(response))
      })
      .catch((error) => {
        // console.error(error,"ERRRRRORRR");
      });
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getAlbumsThunk(friendId: interger) {
  return function(dispatch, getState) {
    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + friendId)
    .then(e => e.json())
      .then(function(response){
        // console.log(response);
        dispatch(getAlbums(response))
      })
      .catch((error) => {
        // console.error(error,"ERRRRRORRR");
      });
  }
}
