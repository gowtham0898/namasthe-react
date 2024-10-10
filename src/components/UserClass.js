import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        count : 0,
        user_details :{

        }
    }
    console.log("child constructer");
    
  }
 async componentDidMount(){
   // console.log("child component did mount (API call)");
    const userDetails = await fetch("https://api.github.com/users/gowtham0898");
    const userjson = await userDetails.json();
    //console.log(userjson);
    
    this.setState({
        user_details:userjson
        
    })
  }

  render() {
    console.log(this.state.user_details);
    
    const { login, created_at,type,avatar_url } = this.state.user_details;
    const{count} = this.state;

    if(count < 0){
        this.setState({
            count: 0,
          });
    }
    return (
      <div className="p-2 w-48 m-4 border-2 border-orange-200 bg-gray-100 hover:bg-orange-100">
        <div>
        <img src= {avatar_url} />
        </div>
        <h3>Count: {count}</h3>
        <button
          className="border border-green-500 text-green-500 font-bold py-2 px-4 rounded hover:bg-green-500 hover:text-white"
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}>
          Increase Count
        </button>
        <button
          className=" mt-[10px] border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
          onClick={() => {
            this.setState({
              count: count - 1,
            });
          }}>
          Decrease Count
        </button>
        <h3>Name: {login}</h3>
        <h3>Type: {type}</h3>
        <h3>Created_on: {created_at}</h3>
      </div>
    );
  }
}

export default UserClass;
