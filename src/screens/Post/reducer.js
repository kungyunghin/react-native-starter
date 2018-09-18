const initialState = {
  comments: []
};
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, comments: action.comments };
    default:
      return state;
  }
}
