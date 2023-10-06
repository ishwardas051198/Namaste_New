import { LOGO_URL } from "./utils/constants";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  

  const onlineStatus=useOnlineStatus();
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
          <li className="px-4">Online Status:{onlineStatus==true?"🟢":"🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
