import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Tony");
    const [hero, setHero] = useState({});
    const [results, setResults] = useState([]);

    //this function returns an array
    // useState(0);

    // const stateArr = useState(0);
    // const counter = stateArr[0];
    // const setCounter = stateArr[1];

    const handleClick = event => {
        setCounter(counter + 1);
        setName("Steve");
    };

    return (
        <>
            <h2>You clicked {counter} times</h2>
            <button onClick={handleClick}>Click Me!</button>
        </>
    );
};

export default Counter;
