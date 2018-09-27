const INITIAL_STATE = {
  error: "",
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, INITIAL_STATE, user: action.payload };
    case "LOGIN_FAILED":
      return { error: action.payload };
    case "LOGOUT_SUCCESS":
      return { user: action.payload };
    case "LOGOUT_FAILED":
      return { error: action.payload };

    default:
      return state;
  }
};
