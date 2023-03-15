import React from "react";
import "../styles.css";

export default function Color(props){

    console.log(props);

    let printOne = <h1 className="green">Great!</h1>;
    let printTwo = <p className="blue">Try Again!</p>;

    return(
        <div>
            {props.outcome    ? printOne: printTwo}
        </div>
    )
}