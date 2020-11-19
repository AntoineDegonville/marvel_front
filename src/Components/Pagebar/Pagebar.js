import React, { useState } from "react";
import "../Pagebar/Pagebar.css";
import axios from "axios";
const Pagebar = ({ data, setData }) => {
  const [offset, setOffset] = useState(0);

  const handlePrevious = async () => {
    setOffset(offset - 50);
    console.log(offset);

    const response = await axios.get(
      `http://localhost:3000/characters?offset=${offset}`
    );
    setData(response.data);
  };

  const handleNext = async () => {
    setOffset(offset + 50);
    console.log(offset);
    const response = await axios.get(
      `http://localhost:3000/characters?offset=${offset}`
    );
    setData(response.data);
  };
  return (
    <div className="pagebar_bar">
      <button
        style={{ display: offset > 0 ? "flex" : "none" }}
        type="submit"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button type="submit" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagebar;
