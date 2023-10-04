import React from "react";
import User from "./User";
import UserClass from "./UserClass";
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
      </div>
    );
  }
}
export default About;
