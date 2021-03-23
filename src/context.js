import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const api_key = process.env.REACT_APP_API_KEY;

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("bangalore");
  const [weather, setWeather] = useState([]);

  const search = (e) => {
    axios
      .get(`${url}${query}&units=metric&appid=${api_key}`)
      .then((response) => {
        setQuery("");
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const data = search();
    return () => data;
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        weather,
        search
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useWeatherSearch = () => {
  return useContext(AppContext);
};
