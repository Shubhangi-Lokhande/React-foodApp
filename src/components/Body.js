import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";

function filterData(sTxt, rList){   
   return rList.filter(val => val?.data?.name?.toLowerCase()?.includes(sTxt?.toLowerCase()));    
}

const apiURl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');


    useEffect(()=>{
        getRestaurants();
    }, []);    

    async function getRestaurants(){
        const data = await fetch(apiURl);
        const json = await data.json();
        setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilterdRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
  
    if(!listOfRestaurant) return null;
    //console.log('filteredRestaurant: '+filteredRestaurant.length)
    if(searchTxt.length != 0 && filteredRestaurant.length == 0) return <h1>Restaurant Not found</h1>

    return listOfRestaurant.length ==0 ? <Shimmer/> : (
        <div className="body">
            <div>
                <input type="text" 
                placeholder="Search" 
                value={searchTxt}
                onChange={(e)=>{
                    setSearchTxt(e.target.value);
                }}/>
                <button onClick={()=>{ 
                  const data = filterData(searchTxt, listOfRestaurant);
                  console.log(data);
                  setFilterdRestaurant(data) 
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                {
                    const filteredList = listOfRestaurant.filter(res=>(res.data.avgRating)>4);
                    setFilterdRestaurant(filteredList)
                }
                }>
                    
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>) 
                }
            </div>
        </div>
    )
}

export default Body;