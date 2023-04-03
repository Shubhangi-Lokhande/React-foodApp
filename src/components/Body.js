import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  
    const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                {
                    const filteredList = resList.filter(res=>(res.info.avgRating)>4);
                    console.log(filteredList)
                    setlistOfRestaurant(filteredList);
                }
                }>
                    
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>) 
                }
            </div>
        </div>
    )
}

export default Body;