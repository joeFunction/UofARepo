import React from "react";

const Clock = (props) => {
    return (
        <>
            <h1>This is the current time</h1>
            <h2>{props.date.toLocaleTimeString()}</h2>
        </>
    );
};

export default Clock;