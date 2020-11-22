import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Comicsbyid/Comicsbyid.css";

const Comicsbyid = () => {
  const [comics, setComics] = useState();
  const { id } = useParams();
  const [isloading, setIsloading] = useState(false);
  console.log(comics);

  const fetchData = async () => {
    const response = await axios.get(
      `https://marvelbackend.herokuapp.com/comicsbyid?id=${id}`
    );

    setComics(response.data.data.results);

    setIsloading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !isloading ? (
    <div></div>
  ) : (
    <div className="relative_comics_container">
      <div className="relative_comics_images">
        {comics.map((item, index) => {
          console.log(item.id);
          return (
            <img
              src={item.images[0]?.path + "." + item.images[0]?.extension}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comicsbyid;
