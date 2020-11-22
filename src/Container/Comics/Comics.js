import React, { useEffect, useState } from "react";
import { MeteorRainLoading } from "react-loadingg";
import Hero from "../../assets/img/comicshero.jpg";
import axios from "axios";
import "../Comics/Comics.css";
import ComicsFlip from "../../Components/ComicsFlip/ComicsFlip";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  console.log(data.results);

  const fetchData = async () => {
    const response = await axios.get(
      "https://marvelbackend.herokuapp.com/comics"
    );
    setData(response.data.data);
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
  ) : (
    <>
      <div>
        <div className="characters_hero">
          <img src={Hero} alt="" />
        </div>
      </div>
      <ComicsFlip data={data}></ComicsFlip>
    </>
  );
};

export default Comics;
