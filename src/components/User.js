import { useState } from "react";

const User=(props)=>{
    const {name,location,email} = props;
    const [count]=useState(3);
    const [count1]=useState(1);
    console.log('pallavi',useState())
    return(
        <div className="about-us">

            <h1>Nmae:{name}</h1>
            <h2>Location:{location}</h2>
            <h3>Email:{email}</h3>
            <h4>Count : {count}</h4>
            <h5>Count : {count1}</h5>
        </div>
    )
}
export default User;