import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/comics");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="picture_container">
      {data.map((item, index) => {
        if (item.images.length > 0) {
          return (
            <div>
              {item.images.map((item, index) => {
                return (
                  <img
                    className="home_picture"
                    src={item.path + "." + item.extension}
                    alt=""
                  />
                );
              })}
            </div>
          );
        } else {
        }
      })}
    </div>
  );
};

export default Home;
