import React, { useState, useEffect } from "react";
import * as API from "../utils/API";

const Developer = (props) => {
    const [developerState, setDeveloperState] = useState({
        excitementLevel: 10000,
        lifeLongLearner: true,
        mood: "excited",
        name: "Alec"
    });

    const [counter, setCounter] = useState(0);

    const getDeveloperData = async () => {
        const data = await API.getDeveloper;

        setDeveloperState(data);
        // setCounter(counter + 1);
    };

    useEffect(() => {
        getDeveloperData();
    }, []);

    // useEffect(() => {}, []);

    return (
        <>  
            <div>
                Name: {developerState.name}
            </div>
            <div>
                Mood: {developerState.mood}
            </div>
            <div>
                Excitement Level: {developerState.excitementLevel}
            </div>
            <div>
                Counter: {counter}
            </div>
            <button onClick={(event) => setDeveloperState({ ...developerState, mood: "determined" })}>Click Me!</button>
            <button onClick={(event) => setCounter(counter + 1)}>Click Me Counter!</button>
        </>
    );
};

export default Developer;