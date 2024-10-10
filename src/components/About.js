import React from 'react'
import UserClass from './UserClass'

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructer");
    
  }
  componentDidMount(){
    console.log("parent component did mount (API call)");
    
  }
  render() {
    console.log("parent render");
    
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"Gowtham (class)"} location={"GBD (class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Nothing to Say</h2>
//       <UserClass name={"Gowtham (class)"} location={"GBD (class)"} />
//     </div>
//   );
// };

export default About