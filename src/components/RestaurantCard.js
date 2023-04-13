import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data
    return (
        <div className="res-card" style= {styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo/100}</h5>
            <h4>Delivery in:{deliveryTime} min</h4>
        </div>
    )
};

export default RestaurantCard;