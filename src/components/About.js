import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log('parent constructor!')
    }
    componentDidMount(){
        console.log('parent componentDidMount!')
    }
    render(){
        console.log('parent render!')
        return(
            <div>
            <h1>This is about us page.</h1>
            {/* <User name={"Pallavi Gupta (functional)"} location={"Indore (functional)"} email={"abc@gmail.com (functional)"}/> */}
            <UserClass name={"Pallavi Gupta (class)"} location={"Indore (class)"}/>
            {/* <UserClass name={"Prachi Gupta (class123)"} location={"Dewas (class123)"} email={"xyz@gmail.com (class123)"}/> */}
        </div>
        )
    }
}
// const About =()=>{
//     return(
//         <div>
//             <h1>This is about us page.</h1>
//             <User name={"Pallavi Gupta (functional)"} location={"Indore (functional)"} email={"abc@gmail.com (functional)"}/>
//             <UserClass name={"Pallavi Gupta (class)"} location={"Indore (class)"} email={"abc@gmail.com (class)"}/>
//         </div>
//     )
// }
export default About;