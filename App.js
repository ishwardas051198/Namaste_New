import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Cart from "./src/components/Cart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import ResturantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/components/utils/appStore";
//import Grocery from "./src/components/Grocery";
// let ele=React.createElement("h1",{},"hello from Namaste New");

// let jsxHeading = <h1 className="heading">Hello from JSX</h1>;

let parent = ReactDOM.createRoot(document.getElementById("root"));
// //functional component
/** 
 -Headers
  -logo
  -nav Items
 -Body
  - search
  -Reasturant conytainer
     -Resturant Card
 -footer
   -coppy right
   -Address
   -Links
   -Contacts **/
// let Title = () => {
//   return <h1>this is title</h1>;
// };
// let ele=<h2>i am a react element</h2>

// let Bodytag = () => {
//   return (
//     <div>
//         {/* called component cpmposition */}
//       <Title />
//       <h2>this is inside body</h2>
//       {/* this is how we can put the react element inside the component  */}
//       {ele}
//     </div>
//   );
// };
// parent.render(jsxHeading);
//lazy loading
const Grocery = lazy(() => import("./src/components/Grocery"));

//console.log(Grocery)
const AppLayout = () => {
  const [userName, setUserName] = useState("Ishan Sambhwani");
  return (
    <Provider store={appStore}>

 
    <UserContext.Provider value={{ loggedinUser: userName, setUserName }}>
      <div className="app">
        <Header />
        {/* <Body/> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout />,
//     errorElement:<Error />
//   },
//   {
//     path:"/about",
//     element:<About />
//   },
//   {
//     path:"/contact",
//     element:<Contact />
//   }
// ])
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // <UserContext.Provider value={{loggedinUser:"Naman Agarwal"}}><About /></UserContext.Provider>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant-menu/:resId",
        element: <ResturantMenu />,
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Your component is loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

parent.render(<RouterProvider router={router} />);
