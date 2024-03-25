import React, { useEffect, useState } from "react";
import stylecss from "./Section.module.css"
import Filter from "../Filter/Filter"
import {CircularProgress} from "@mui/material"
import Carousel from "../Carousel/Carousel";
import Cards from "../Card/Card"
 const Section=({title,data,type,filterfn})=>{
    const [filters,setfilters]=useState([{key:"all",label:"All"}])
    const [selectedfilterIndex,setselectedfilterIndex]=useState(0);
    const [carouselToggle,setcarouselToogle]=useState(true);
   
   function handlebutton(){
    setcarouselToogle((preState)=>!preState)
   }
   useEffect(()=>{
    //have only for songs so we are checking
    if(filterfn){
        filterfn().then((ResponseData)=>{
            const {data}=ResponseData;
            setfilters([...filters,...data]);
        });
    }
   },[]);
   
   const songSectionheader=filters.length>1//return true
   
   const CardstoRender=data.filter((card)=>{ 
    return songSectionheader && selectedfilterIndex !==0 ?card.genre.key===filters[selectedfilterIndex].key:card
   })
    return (
        <>

            {/* // title newalbum  */}
            <div className={stylecss.title}>
                <h3>{title}</h3>
                <h3 className={stylecss.textcolor} onClick={handlebutton}>{carouselToggle?("Show All"):("Collapse")}</h3>
            </div>

           {songSectionheader &&(<div>
            <Filter/>
           </div>)} 


           {data.length===0?
           (<CircularProgress/>):
            //show all and carousel when  carouselToggle is true
            (<div className={stylecss.cardContainer} >{CardstoRender.map((ele)=>(<Cards data={ele} type={type}/>))}</div>)
        //    (<div>
           
        //     {carouselToggle?
        //     // true
        //     (<Carousel data={CardstoRender} renderComponent={(data)=><Cards data={data} type={type}/>} />):
        //     // false
        //     (<div>{CardstoRender.map((ele)=>(<Cards data={ele} type={type}/>))}</div>)

           }
       {/* </div> )} */}
       </>)
          
}
export default Section;
