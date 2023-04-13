import React from "react";

const ContextProvider = React.createContext({
  user: {},
  city: "",
  cart: [],
  isFetching: false,
});

export default ContextProvider;
