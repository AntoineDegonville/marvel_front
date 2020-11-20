import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../ComicsFlip/ComicsFlip.css";

const Comics = ({ data, setData }) => {
  console.log(data);
  const [isFlipped, setIsFlipped] = useState(false);

  const newTab = () => {
    let tab = [];
    for (let i = 0; i < 60; i++) {
      tab.push(false);
    }
    return tab;
  };
  const [pop, setPop] = useState(newTab());

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="picture_container">
        {data.results.map((item, index) => {
          return (
            <div>
              <div className="comics_container">
                <div>{item.name}</div>
                <ReactCardFlip
                  isFlipped={isFlipped}
                  flipDirection="horizontal"
                  flipSpeedFrontToBack="0.5"
                  flipSpeedBackToFront="0.5"
                >
                  <img
                    onMouseEnter={handleClick}
                    className="comics_picture"
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                    alt=""
                  />
                  <div>
                    <img
                      onMouseLeave={handleClick}
                      className="comics_picture_back"
                      src={item.thumbnail.path + "." + item.thumbnail.extension}
                      alt=""
                    />
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Comics;
