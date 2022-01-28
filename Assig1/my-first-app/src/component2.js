//using function method
import React from "react";

export default function Component2(props) {
    return <div>
        <div className="blueColor"> This is second Component2.</div> 
        <div className="greenColor"> {props.text2}</div>
        </div>
}