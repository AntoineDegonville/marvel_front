import React, { useEffect, useState } from "react";
import "../Description/Description.css";
import axios from "axios";
import { MeteorRainLoading } from "react-loadingg";
import { useParams } from "react-router-dom";
import "../Description/Description.css";
import Comicsbyid from "../../Components/Comicsbyid/Comicsbyid";

const Description = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(false);
  console.log("hulk");

  const fetchData = async () => {
    const response = await axios.get(
      `https://marvelbackend.herokuapp.com/description?id=${id}`
    );

    setData(response.data);

    setIsloading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return !isloading ? (
    <MeteorRainLoading
      color="#ED161F"
      size="large"
      speed="1"
    ></MeteorRainLoading>
  ) : (
    <>
      <div className="description_container">
        <div>
          {
            <img
              className="description_picture"
              src={
                data.results[0].thumbnail.path +
                "." +
                data.results[0].thumbnail.extension
              }
              alt=""
            />
          }
        </div>
        <div className="description_section">
          <h1>{data.results[0].name}</h1>
          <p>{data.results[0].description}</p>
          <Comicsbyid></Comicsbyid>
        </div>
      </div>
    </>
  );
};

export default Description;
