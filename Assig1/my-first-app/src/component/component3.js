import React, {Component} from "react";

export class Component3 extends Component{
    render() {
        return <div>
            <h1>New Component3</h1>
        </div>
    }
}

class Component3_1 extends Component{
    render() {
        return <div>component3.1 added</div>
    }
}

function Component3_2() {
    return <div>component3.2 added</div>
}

export default Component3;
export {Component3_1,Component3_2};
