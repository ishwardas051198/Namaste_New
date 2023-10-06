import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        //console.log("Constructor called")
        this.state={
            userInfo:{
              name:"dummy",
              location:"dummy"
            }
        }
    }
    componentDidMount(){
      // this.timer=setInterval(()=>{
      //   //console.log("set interval is there")

      // },1000)
      const fetchData=async ()=>{
        const data=await fetch("https://api.github.com/users/ishwardas051198")
        const json=await data.json();
        this.setState(this.state.userInfo={
          name:json.name,
          location:json.location,
          avatar_url:json.avatar_url
  
        })
       }
       fetchData();
      
      //console.log("cdm Called")
    }
    componentDidUpdate(){
    
     // console.log("component did update called")
  
    }

    componentWillUnmount(){
      clearInterval(this.timer)
      //console.log("component will unmount called")
    }
  render() {
    const {count}=this.state;
    //console.log("render called")
    const {name,location,avatar_url}=this.state.userInfo
    return (
      <div className="userClass">
        <img src={avatar_url} />
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        {/* <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increse Count</button> */}
      </div>
    );
  }
}
export default UserClass;
