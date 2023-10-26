import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroData from "./utils/useRestroData";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  //   const params=useParams();
  const { resId } = useParams();
 const [showIndex,setShowIndex]=useState(null);
  const resInfo = useRestroData(resId);

  const catagories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log("catagoreis", catagories)
  //console.log("restro data" + resInfo);
  const { name, id, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card ||
    {};
  console.log(resInfo);
  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className=" text-center  ">
      <h1 className=" my-4  font-bold text-lg"  >{name}</h1>
      <h1 className=" font-bold text-lg">{cuisines.join(",")} -{costForTwoMessage} </h1>
    {catagories.map((c,index)=>{
      //console.log(c,index)
      return <RestaurantCategory key={index} data={c?.card?.card} setShowIndex={()=>{setShowIndex(index)}} showItem={index==showIndex && true}/>
    })}
    
    </div>
  );
};

export default ResturantMenu;
