import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            name: "Tony",
            hero: {},
            results: []
        };
    };

    handleClick = event => {
        this.setState({ 
            counter: this.state.counter + 1, 
            name: "Steve" });
    };

    render() {
        return (
            <>
                <h2>You clicked {this.state.counter} times</h2>
                <button onClick={this.handleClick}>Click Me!</button>
            </>
        );
    };
};

export default Counter;