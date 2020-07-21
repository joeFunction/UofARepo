import React from "react";

const name = "NATASHA";
const num1 = 2;
const num2 = 4;

const convertToLowercase = (nameStr) => {
    let lowercaseStr = nameStr.toLowerCase();

    return lowercaseStr;
};

const JSXVariables = () => {
    return (
        <>
            <h1 className="css-class">This is from JSXVariables component</h1>
            <h2>My name is {name}</h2>
            <h2>Adding numbers: {num1 + num2}</h2>
            <h2>This is number : {42}</h2>
            <h2>
                Generate random numbers:
                {Math.floor(Math.random() * 10) + 1},
                {Math.floor(Math.random() * 10) + 1}
            </h2>
            <h2>Name in lowercase is: {convertToLowercase(name)}</h2>
        </>
    );
};

export default JSXVariables;
