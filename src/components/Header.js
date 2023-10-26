import { LOGO_URL } from "./utils/constants";

import { useState, useEffect, useContext } from "react";
import UserContext from "./utils/UserContext";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { useSelector } from "react-redux";

//console.log(cartItems)
const Header = () => {
  const cartItems = useSelector((store) => {
    return store.cart.Items;
  });
  console.log(cartItems);
  const [btnName, setBtnName] = useState("login");

  const { loggedinUser } = useContext(UserContext);
  console.log("context data is ", loggedinUser);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect is getting called");
  }, [btnName]);
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="p-4 m-4 flex">
          <li className="px-4">
            Online Status:{onlineStatus == true ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart-{cartItems.length} items</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <button
              className="s"
              onClick={() => {
                btnName == "login" ? setBtnName("logout") : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">User: {loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
