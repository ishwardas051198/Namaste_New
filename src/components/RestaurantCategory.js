import ItemList from "./ItemList";
import { useState } from "react";
export const RestaurantCategory = ({ data,showItem, setShowIndex }) => {
  //console.log(data);
  //const [showItem,setShowItem]=useState(false)
  const handleClick=()=>{
    setShowIndex();

  }
  return (
    <div>
      <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
          <span className=" font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <span>{showItem && <ItemList items={data.itemCards} /> }</span>
      </div>
    </div>
  );
};
