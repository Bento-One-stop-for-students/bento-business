import React from "react";

const initialState = {
  isLoggedIn: false,
  profession: "",
  uid: "",
};

export const AuthContext = React.createContext({});

function AuthReducer(state, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
        profession: action.payload.profession,
        uid: action.payload.uid,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isLoggedIn: false,
        profession: "",
        uid: "",
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
