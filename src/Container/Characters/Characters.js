import React, { useEffect, useState } from "react";
import "../Characters/Characters.css";
import axios from "axios";
import { MeteorRainLoading } from "react-loadingg";
import Hero from "../../assets/img/hero.jpg";
import Pagebar from "../../Components/Pagebar/Pagebar";
import Loaderspider from "../../assets/img/loaderspider.gif";

const Home = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  //   Recuperation uniquement des personnages avec images.
  console.log(data);
  const newTab = () => {
    let tab = [];
    for (let i = 0; i < 60; i++) {
      tab.push(false);
    }
    return tab;
  };
  const [pop, setPop] = useState(newTab());

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/characters");
    setData(response.data);
    setIsloading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(data.results);

  return !isloading ? (
    <MeteorRainLoading
      color="#ED161F"
      size="large"
      speed="1"
    ></MeteorRainLoading>
  ) : (
    <div>
      <div className="characters_hero">
        <img src={Hero} alt="" />
        <input
          className="characters_search_bar"
          placeholder="Find your character..."
          type="text"
        />
      </div>
      <div className="picture_container">
        {data.results.map((item, index) => {
          return (
            <div>
              <div className="characters_container">
                <div
                  key={index}
                  onMouseEnter
                  className={
                    pop[index]
                      ? "characters_picture_name_showme"
                      : "characters_picture_name_dontshow"
                  }
                >
                  {item.name}
                </div>
                <img
                  onMouseEnter={() => {
                    let newTabpop = [...pop];
                    newTabpop[index] = true;
                    setPop(newTabpop);
                  }}
                  onMouseLeave={() => {
                    setPop(newTab());
                  }}
                  className="characters_picture"
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        <Pagebar data={data} setData={setData}></Pagebar>
      </div>
    </div>
  );
};

export default Home;
