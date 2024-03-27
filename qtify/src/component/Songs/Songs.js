import React from "react";
import style from "./Songs.module.css";
import { useState, useEffect } from "react";
const Songs = ({ title, data, type, filterfn, songdata }) => {
  
  const [genre, setgenre] = useState([]);
  const [song,setsong]=useState([]);
  //console.log(genre)
  useEffect(() => {

    filterfn().then((response) => {
      const genredata = response.data;
      
      setgenre([{key: 'all',label:'All'}, ...genredata]);
    });

    songdata().then((Responsedata)=>{
        const songData=Responsedata;
        setsong([...songData]);
    })
  }, []);
//  console.log(song);
  return (
    <div>
      <div className={style.title}>
        <h3 className={style.title1}>{title}</h3>
      </div>
      <div></div>
    </div>
  );
};
export default Songs;
