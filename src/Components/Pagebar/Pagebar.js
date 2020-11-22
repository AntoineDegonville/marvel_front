import React, { useState } from "react";
import "../Pagebar/Pagebar.css";
import axios from "axios";
import Next from "../../assets/img/next.png";
import Previous from "../../assets/img/previous.png";
const Pagebar = ({ data, setData }) => {
  const [offset, setOffset] = useState(0);

  const handlePrevious = async () => {
    let theOffset = offset - 50;
    setOffset(theOffset);

    const response = await axios.get(
      `https://marvelbackend.herokuapp.com/characters?offset=${theOffset}`
    );
    setData(response.data);
  };

  const handleNext = async () => {
    let theOffset = offset + 50;
    setOffset(theOffset);

    const response = await axios.get(
      `https://marvelbackend.herokuapp.com/characters?offset=${theOffset}`
    );
    setData(response.data);
  };
  return (
    <div className="pagebar_bar">
      <img
        className="previous"
        style={{ visibility: offset >= 50 ? "visible" : "hidden" }}
        onClick={handlePrevious}
        src={Previous}
        alt=""
      />
      <img onClick={handleNext} className="next" src={Next} alt="" />
    </div>
  );
};

export default Pagebar;
