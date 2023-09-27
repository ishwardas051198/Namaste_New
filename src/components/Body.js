import ReasturantCard from "./ReasturantCard";
import resList from "./utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [res, setRes] = useState([]);
  const [resCopy,setResCopy]=useState([]);
  const [searchText, setSearchText] = useState("");
  let constantRes={};
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   

    setRes(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setResCopy(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };
  console.log("body rendered");

  if (res.length == 0) {
    return <Shimmer />
    
   
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {let newRes=res.filter((data)=>{
            console.log(data.info.name)
            return data.info.name.toLowerCase().includes(searchText.toLowerCase())
          })
          setResCopy(newRes);
          }}>Search</button>
        </div>

        <button
          onClick={() => {
            let newRes = res.filter((data) => {
              return data.info.avgRating > 4;
            });
            setRes(newRes);
          }}
          className="Top-Button"
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {resCopy.map((data) => {
          return <ReasturantCard key={data.info.id} resObj={data} />;
        })}
      </div>
    </div>
  );
};
export default Body;
