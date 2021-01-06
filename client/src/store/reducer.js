import { SET_AUTH_USER, REMOVE_AUTH_USER } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, user: action.payload };
    case REMOVE_AUTH_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};

export default reducer;
