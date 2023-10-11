import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./utils/UserContext";
// const About=()=>{
//     return <div>
//         <h1>you are inside about page</h1>
//         {/* <User name="ishwar" location="function delhi"/> */}
//         <UserClass name="ishaan" location="class jaipur" />
//     </div>
// }
class About extends React.Component {
  constructor() {
    super()
    //console.log("parent constructor called");
  }
  componentDidMount(){
    //console.log("parent cdm called")
  }
 
  render() {
    //console.log("parent render called")
    return (
      <div>
        <h1>you are inside about page</h1>
        {/* <User name="ishwar" location="function delhi" /> */}
        <UserClass name="ishaan" location="class jaipur" />
        <UserContext.Consumer>
         
         {(data)=>{console.log("about data is ",data)
        return <p>loggedinUser:{data.loggedinUser}</p>
        }}

        </UserContext.Consumer>
       
      </div>
    );
  }
}
export default About;
