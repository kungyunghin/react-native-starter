const initialState = {
  photos: []
};
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "GET_PHOTOS":
      return { ...state, photos: action.photos };
    default:
      return state;
  }
}
