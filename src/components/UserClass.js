import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        //console.log("Constructor called")
        this.state={
            count:0
        }
    }
    componentDidMount(){
      this.timer=setInterval(()=>{
        //console.log("set interval is there")

      },1000)
      
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
    return (
      <div className="userClass">
        <h1>Count={count}</h1>
        <h1>Name:{this.props.name}</h1>
        <h2>Location:{this.props.location}</h2>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increse Count</button>
      </div>
    );
  }
}
export default UserClass;
