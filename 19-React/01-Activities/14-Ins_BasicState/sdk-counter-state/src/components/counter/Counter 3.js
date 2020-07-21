import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);

        this.state = {
            counter: 0
        };
    };

    // state = {
    //     counter: 0
    // };

    // public class field syntax
    handleClick = () => {
        this.setState({ counter: this.state.counter + 1});
    };

    render() {
        return (
            <>
                <p>Click Count: {this.state.counter}</p>
                <button onClick={this.handleClick}>Click Me</button>
            </>
        );
    };
};

export default Counter;