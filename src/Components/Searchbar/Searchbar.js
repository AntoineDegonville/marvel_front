import React, { useState } from "react";
import "../Searchbar/Searchbar.css";
import axios from "axios";

const Searchbar = ({ data, setData, setSearchCharacter }) => {
  const [search, setSearch] = useState(); // valeur de l'input

  const handleSearch = async (e) => {
    const response = await axios.get(
      `https://marvelbackend.herokuapp.com/characters?nameStartsWith=${e.target.value}`
    );
    console.log("valeur input:", e.target.value);
    setSearch(e.target.value);
    // setDatafound(response.data);
    setData(response.data);
  };

  return (
    <input
      className="characters_search_bar"
      placeholder="Find your hero..."
      type="text"
      onChange={handleSearch}
    />
  );
};

export default Searchbar;
