import React from "react";

const ContextProvider = React.createContext({
  user: {},
  city: "",
  cart: [],
});

export default ContextProvider;
