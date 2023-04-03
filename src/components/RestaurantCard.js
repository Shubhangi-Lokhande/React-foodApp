import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla} = resData?.info
    return (
        <div className="res-card" style= {styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRatingString} stars</h5>
            <h5>{costForTwo}</h5>
            <h4>Delivery in:{sla.deliveryTime} min</h4>
        </div>
    )
};

export default RestaurantCard;