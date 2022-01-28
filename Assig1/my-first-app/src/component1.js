import React, { Component } from "react";


export class Component1 extends Component{
    constructor() {
        super();
        console.log(this.props);
    }
    render() {
        return <div>
                This is component1.
                <div>props of component1 : {this.props.text}</div>
            </div>
    }
}

export default Component1;


