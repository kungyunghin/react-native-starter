import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import friendsReducer from "../screens/Friends/reducer";
import profileReducer from "../screens/Profile/reducer";
import postReducer from "../screens/Post/reducer";
import albumReducer from "../screens/Album/reducer";

export default combineReducers({
  form: formReducer,
  friendsReducer,
  profileReducer,
  albumReducer,
  postReducer
});
