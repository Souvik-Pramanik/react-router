import React from "react";
import { useParams } from "react-router-dom";
const User = () =>
{
    const { name , dept } = useParams();
    return(
        <div className="user">
            <h1>Welcome {name} in our site . You are from {dept} department.</h1>
        </div>
    )
}
export default User;