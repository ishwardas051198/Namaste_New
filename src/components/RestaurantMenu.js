
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroData from "./utils/useRestroData";

const ResturantMenu = () => {
//   const params=useParams();
const {resId}=useParams();
  
const resInfo=useRestroData(resId);

console.log("restro data"+resInfo)
  const { name, id, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card ||
    {};
    console.log(itemCards)
  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <h1>{cuisines.join(",")} </h1>
      <h3>{costForTwoMessage}</h3>
      <ul>
      {itemCards.map((itemcard)=>{
        return <li key={itemcard.card.info.id}>{itemcard.card.info.name}- Rs. {itemcard.card.info.price/100}</li>
      })}
      </ul>
      
    </div>
  );
};

export default ResturantMenu;
