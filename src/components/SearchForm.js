import React, { useRef } from "react";
import { useWeatherSearch } from "../context";

const SearchForm = () => {
  const { setQuery } = useWeatherSearch();
  const searchTerm = useRef("");

  const searchWeather = () => {
    setQuery(searchTerm.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={searchTerm}
          placeholder="Search..."
          className="search-bar"
          onChange={searchWeather}
        />
      </form>
    </div>
  );
};

export default SearchForm;
