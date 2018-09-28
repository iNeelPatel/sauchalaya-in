var Parse = require("parse/react-native");

export const login = (username, password) => {
  return dispatch => {
    console.log("Login Start");
    Parse.User.logIn(username, password)
      .then(user => {
        console.log("Login");

        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      })
      .catch(error => dispatch({ type: "LOGIN_FAILED", payload: error }));
  };
};

export const logout = () => {
  return dispatch => {
    Parse.User.logOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS", payload: "success" });
      })
      .catch(error => dispatch({ type: "LOGOUT_FAILED", payload: error }));
  };
};
