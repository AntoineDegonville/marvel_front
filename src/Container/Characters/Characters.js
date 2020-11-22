import React, { useEffect, useState } from "react";
import "../Characters/Characters.css";
import axios from "axios";
import { MeteorRainLoading } from "react-loadingg";
import Hero from "../../assets/img/hero.jpg";
import Pagebar from "../../Components/Pagebar/Pagebar";
import Loaderspider from "../../assets/img/loaderspider.gif";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [searchCharacter, setSearchCharacter] = useState(); // Récupère la valeur de la barre de recherche
  const [idPicture, setIdPicture] = useState();

  console.log("id :", idPicture);

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
    const response = await axios.get(
      "https://marvelbackend.herokuapp.com/characters"
    );
    setData(response.data);
    setIsloading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !isloading ? (
    <MeteorRainLoading
      color="#ED161F"
      size="large"
      speed="1"
    ></MeteorRainLoading>
  ) : !searchCharacter ? (
    <div>
      <div className="characters_hero">
        <img src={Hero} alt="" />
        <Searchbar
          data={data}
          setData={setData}
          setSearchCharacter={setSearchCharacter}
        />
      </div>
      <div className="picture_container">
        {data?.results.map((item, index) => {
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
                <Link to={"/characters/" + idPicture}>
                  <img
                    onMouseEnter={() => {
                      let newTabpop = [...pop];
                      newTabpop[index] = true;
                      setPop(newTabpop);
                      setIdPicture(data.results[index].id);
                    }}
                    onMouseLeave={() => {
                      setPop(newTab());
                    }}
                    className="characters_picture"
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          );
        })}
        <Pagebar data={data} setData={setData}></Pagebar>
      </div>
    </div>
  ) : (
    <div>
      <div className="characters_hero">
        <img src={Hero} alt="" />
        <Searchbar
          data={data}
          setData={setData}
          setSearchCharacter={setSearchCharacter}
        />
      </div>
      <div className="picture_container">
        {searchCharacter.map((item, index) => {
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
