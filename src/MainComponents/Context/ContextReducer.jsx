import React, { useReducer } from "react";
import ContextProvider from "./ContextProvider";

const defaulState = {
  user: JSON.parse(localStorage.getItem("TarcarsUsername")) || null,
  city: "Select City",
  cart: JSON.parse(localStorage.getItem("TarcarsCart")) || null,
  isFetching: false,
};

const reducer = (state, action) => {
  // console.log(state);
  // console.log(action.cart);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        isFetching: action.isFetching,
      };

    case "ADD_A_CITY":
      console.log(action.type);
      return {
        ...state,
        city: action.city,
      };

    case "LOGIN_START":
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.cart,
      };

    default:
      return state;
  }
};

const ContextReducer = (props) => {
  return (
    <ContextProvider.Provider value={useReducer(reducer, defaulState)}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextReducer;
