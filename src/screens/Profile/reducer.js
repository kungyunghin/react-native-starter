const initialState = {
  todos: [],
  posts: [],
  albums: [],
};
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.todos };
    case "GET_POSTS":
      return { ...state, posts: action.posts };
    case "GET_ALBUMS":
      return { ...state, albums: action.albums };
    default:
      return state;
  }
}
