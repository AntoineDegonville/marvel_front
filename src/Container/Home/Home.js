import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import axios from "axios";
import Loaderspider from "../../assets/img/loaderspider.gif";

const Home = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/comics");
    setData(response.data);
    setIsloading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div style={{ height: 900 }} className="loaderback">
      <img
        className="spiderloader"
        className="loaderspider"
        src={Loaderspider}
        alt=""
      />
    </div>
  );
  // !isloading ? (
  //   // <MeteorRainLoading
  //   //   color="#ED161F"
  //   //   size="large"
  //   //   speed="1"
  //   // ></MeteorRainLoading>

  // ) : (
  //   <div className="picture_container">
  //     {data.map((item, index) => {
  //       if (item.images.length > 0) {
  //         return (
  //           <div>
  //             {item.images.map((item, index) => {
  //               return (
  //                 <img
  //                   className="home_picture"
  //                   src={item.path + "." + item.extension}
  //                   alt=""
  //                 />
  //               );
  //             })}
  //           </div>
  //         );
  //       } else {
  //       }
  //     })}
  //   </div>
  // );
};

export default Home;
