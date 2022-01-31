import React, {Component} from 'react';

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            count : 0,
        }
        // this.increase = this.increase.bind(this);
    }

    increase = () => {
        this.setState({
            count : this.state.count+1
        });
    }

    decrease = () => {
        this.setState( (prevState) =>{
            console.log(prevState.count);
            console.log(this.state.count);
            return {
                count : (prevState.count-1<0 ? 0 : prevState.count-1)
            };
            // count : (this.state.count-1<0 ? 0 : this.state.count-1)
        });
    }

    render() {
        return (
            <>
                <div className='counter-title'>Counter</div>
                <div className='counter-num'>{this.state.count}</div>
                <div>
                    <button onClick={this.decrease} className='btn-counter minus'>-</button>
                    <button onClick={this.increase} className='btn-counter plus'>+</button>
                </div>
            </>
        );
    }
}

export default Counter;