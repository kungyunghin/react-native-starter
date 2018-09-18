// Action to get all Comments.
export function getComments(response) {
  return {
    type: 'GET_COMMENTS',
    comments: response
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getCommentsThunk(postId: interger) {
  return function(dispatch, getState) {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
    .then(e => e.json())
      .then(function(response){
        // console.log(response);
        dispatch(getComments(response))
      })
      .catch((error) => {
        // console.error(error,"ERRRRRORRR");
      });
  }
}
