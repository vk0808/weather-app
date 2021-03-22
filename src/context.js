import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/";
const api_key = process.env.REACT_APP_API_KEY;

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
   return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export const useBookSearch = () => {
  return useContext(AppContext);
};
