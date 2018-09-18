const initialState = {
  friends: []
};
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "GET_FRIENDS":
      return { ...state, friends: action.friends };
    default:
      return state;
  }
}
