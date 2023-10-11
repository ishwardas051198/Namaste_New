import { CDN_URL } from "./utils/constants";

const ReasturantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    props.resObj?.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className=" rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const LableComponent=(ResCard)=>{
  return (props)=>{
    return (
      <div>
       <label className=" absolute bg-black text-white rounded-lg p-2 m-2">Promoted By Ishwar</label>
      <ResCard resObj={props.resObj} />
      </div>
     
    )
  }

}
export default ReasturantCard;
