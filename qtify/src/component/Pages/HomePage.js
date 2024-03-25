import Hero from "../Hero/Hero"
import React from "react"
import {fetchFilters} from "../../component/Api/Api"
//import {useOutletContext} from "react-router-dom"
import Section from "../../component/Section/Section"
const HomePage=({data})=>{
    // const data=useOutletContext();
    const {topAlbums,newAlbums,songs}=data
   // console.log(topAlbums);//array of objects
    // console.log(newAlbums);
    // console.log(songs);

    return (
        
     
      
        <div>
         
             <Hero/>
        {/* type is used for conditional rendering */}
             <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            <Section title="Songs" data={songs} type="songs" filterfn={fetchFilters}/>
            

        </div>
        
    )
 
}
export default HomePage;