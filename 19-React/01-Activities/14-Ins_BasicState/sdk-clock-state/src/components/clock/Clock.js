import React from "react";

class Clock extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        // this.tick = this.tick.bind(this);

        this.state = {
            date: new Date()
        };
    };

    // tick() {
    //     this.setState({ date: new Date() });
    // }

    tick = () => {
        this.timerId = this.setState({ date: new Date() });
    }

    componentDidMount() {
        setInterval(this.tick, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    };

    render() {
        return (
            <>
                <h1>This is current time</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </>
        );
    };
};

export default Clock;