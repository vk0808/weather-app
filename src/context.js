import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const api_key = process.env.REACT_APP_API_KEY;

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("bangalore");
  const [weather, setWeather] = useState([]);
  
  const search = () => {
    setLoading(true)
    axios
      .get(`${url}${query}&units=metric&appid=${api_key}`)
      .then((response) => {
        // setQuery("");
        setWeather(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  };

  useEffect(() => {
    const data = search();
    return () => data;
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        loading,
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
