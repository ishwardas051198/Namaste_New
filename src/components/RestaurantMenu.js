import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "./utils/constants";
const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
//   const params=useParams();
const {resId}=useParams();
  console.log(resId)
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const data = await fetch(
      Menu_API + resId
    );
    //console.log(`${Menu_API} + ${resId}`)- wrong as + will be part of the url.
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

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
