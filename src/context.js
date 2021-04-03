import React, { useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather?";
// not included api key
const api_key = "57c11981ce67a52344b232e7e273c978";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const search = useCallback(() => {
    setLoading(true);
    axios
      .get(`${url}q=${query}&units=metric&appid=${api_key}`)
      .then((response) => {
        // setQuery("");
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
      });
  }, [query]);

  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 10000
    };

    function success(pos) {
      const { latitude, longitude } = pos.coords;
      setLoading(true);
      axios
        .get(
          `${url}lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`
        )
        .then((response) => {
          setWeather(response.data);
          setLoading(false);
        })
        .catch((error) => {
          // console.log(error);
          setLoading(false);
        });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    query
      ? search()
      : navigator.geolocation.getCurrentPosition(success, error, options);
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
