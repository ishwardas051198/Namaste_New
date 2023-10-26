import ReasturantCard,{LableComponent} from "./ReasturantCard";
import resList from "./utils/mockData";
import { useState, useEffect ,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";


const Body = () => {
  const data=useContext(UserContext)
  const InputChange=(event)=>{
    data.setUserName(event.target.value)
  }
  const onlineStatus = useOnlineStatus();
  const [res, setRes] = useState([]);
  const [resCopy, setResCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedComponenet=LableComponent(ReasturantCard);
  let constantRes = {};
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRes(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setResCopy(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    //console.log("json data is",json);
  };
  //console.log("body rendered");
  if (onlineStatus == false)
    return (
      <h1>
        It looks like you are offline. Please check your internet connection.
      </h1>
    );
  if (res.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="m4 p-4">
          <input
           data-testid="searchInput"
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              let newRes = res.filter((data) => {
                //console.log(data.info.name);
                return data.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setResCopy(newRes);
            }}
          >
            Search
          </button>
        </div>
        {/* <div className="m4 p-4"> */}
        {/* <button
          onClick={() => {
            let newRes = res.filter((data) => {
             // console.log("button clicked")
              return data.info.avgRating > 4.5;
            });
            
            setResCopy(newRes);
          }}
          className="Top-Button px-4 py-2 bg-gray-100 m-4 rounded-lg"
        >
          Top Rated */}
        {/* </button> */}
        {/* </div> */}
        <div className="m-4 p-5">
          <label>User Name:</label>
          <input className=" border border-black" onChange={InputChange}/>
        </div>

        
      </div>
      <div className="res-container flex flex-wrap  " >
        {resCopy.map((data) => {
          return (
            <Link
              to={"/resturant-menu/" + data.info.id}
              key={data.info.id}
              style={{ textDecoration: "none" }}
            >
              {data.info.name=="Andhra Gunpowder"?<PromotedComponenet resObj={data} />:<ReasturantCard resObj={data} />}
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
