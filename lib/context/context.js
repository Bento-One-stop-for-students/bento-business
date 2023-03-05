import React from "react";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  profession: "",
};

export const AuthContext = React.createContext({});

function AuthReducer(state, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: true,
        profession: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isLoggedIn: false,
        profession: "",
      };
    case "LOADING_TRUE":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
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
