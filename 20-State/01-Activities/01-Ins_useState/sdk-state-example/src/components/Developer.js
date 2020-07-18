import React, { useState } from "react";

const Developer = (props) => {
    const [developerState, setDeveloperState] = useState({
        excitementLevel: 10000,
        lifeLongLearner: true,
        mood: "excited",
        name: "Alec"
    });

    const handleClick = event => {
        setDeveloperState({});
    };

    return (
        <>
            <div>
                Name: {developerState.name}
            </div>
            <div>
                Mood: {developerState.mood}
            </div>
            <button onClick={handleClick}></button>
            <button onClick={(event)=> setDeveloperState({ ...developerState, mood: "determined"})}></button>
            <button onClick={(event)=> setDeveloperState({ name: "Alec", excitementLevel: 10000, lifeLongLearner: true mood: "determined"})}></button>
        </>
    );
};

export default Developer;