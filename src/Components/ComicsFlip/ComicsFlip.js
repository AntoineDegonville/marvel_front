import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../ComicsFlip/ComicsFlip.css";

const newTab = () => {
  let tab = [];
  for (let i = 0; i < 60; i++) {
    tab.push(false);
  }
  return tab;
};

const Comics = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(newTab());

  const handleClick = (index, noflip) => {
    const newTabFlip = newTab();
    if (!noflip) {
      newTabFlip[index] = true;
    }
    setIsFlipped(newTabFlip);
  };

  return (
    <>
      <div className="picture_container">
        {data.results.map((item, index) => {
          console.log();
          return (
            <div key={index}>
              <div className="comics_container">
                <div>{item.name}</div>
                <ReactCardFlip
                  isFlipped={isFlipped[index]}
                  flipDirection="horizontal"
                  flipSpeedFrontToBack="0.5"
                  flipSpeedBackToFront="0.5"
                >
                  <img
                    onMouseEnter={() => {
                      handleClick(index);
                    }}
                    className="comics_picture"
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                    alt=""
                  />
                  <div>
                    <img
                      onMouseLeave={() => {
                        handleClick(index, true);
                      }}
                      className="comics_picture_back"
                      src={item.thumbnail.path + "." + item.thumbnail.extension}
                      alt=""
                    />
                    <div className="comics_picture_name">{item.title}</div>
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
