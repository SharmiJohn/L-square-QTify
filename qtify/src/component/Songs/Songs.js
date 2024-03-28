import React from "react";
import style from "./Songs.module.css";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import Cards from "../Card/Card";

const Songs = ({ title, data, type, filterfn, songdata }) => {
  const [genre, setgenre] = useState([]);
  const [song, setsong] = useState([]);
  const [filter, setfilter] = useState([]);
  //console.log(genre)
  useEffect(() => {
    filterfn().then((response) => {
      const genredata = response.data;

      setgenre([{ key: "all", label: "All" }, ...genredata]);
    });

    songdata().then((Responsedata) => {
      const songData = Responsedata;
      setsong([...songData]);
    });
  }, []);
  //console.log(song);
  const handleChange = (e) => {
    let clicktabs = e.target.value;

    console.log(clicktabs);
    if (clicktabs === "all") {
      setfilter([song]);
      return;
    }
    let fileteredSong = song.filter((ele) => ele.genre.key === clicktabs);
    setfilter([fileteredSong]);
    return;
  };
  console.log(filter);

  return (
    <div>
      <div className={style.title}>
        <h3 className={style.title1}>{title}</h3>
      </div>
      <div className={style.tab}>
        {" "}
        <Tabs value={0} onChange={(e) => handleChange(e)}>
          {genre &&
            genre.map((ele, index) => (
              <Tab
                style={{
                  color: "#ffffff",
                  fontFamily: "Poppins",
                  fontWeight: "200",
                }}
                label={ele.label}
                key={ele.key}
                value={index}
              />
            ))}{" "}
        </Tabs>
      </div>
      <div>
        {filter && (
          <Carousel
            data={filter}
            CardComponent={(data) => <Cards data={data} type={type} />}
          />
        )}
      </div>
    </div>
  );
};
export default Songs;
