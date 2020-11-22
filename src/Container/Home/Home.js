import React from "react";
import "../Home/Home.css";
import Loaderspider from "../../assets/img/loaderspider.gif";
import Enter from "../../assets/img/enter.png";
import { Link } from "react-router-dom";

const Home = ({ setClicked }) => {
  return (
    <>
      <div style={{ height: 900 }} className="loaderback">
        <div className="diventer">
          <Link to="/characters">
            <img
              onClick={() => {
                setClicked(true);
              }}
              className="enter"
              src={Enter}
              alt=""
            />
          </Link>
        </div>

        <img
          className="spiderloader"
          className="loaderspider"
          src={Loaderspider}
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
