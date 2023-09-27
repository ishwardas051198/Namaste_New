import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
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


const AppLayout=()=>{
  return (<div className="app">
    <Header />
    <Body/>

  </div>
  )
}

parent.render(<AppLayout />);
