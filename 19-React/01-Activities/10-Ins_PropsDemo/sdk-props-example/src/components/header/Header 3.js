import React from "react";

const Header = (props) => {
    console.log(props);

    return (
        <>
            <h1>This is Header component</h1>
            <h2>Real Name: {props.realname}</h2>
            <h2>Super Hero Name: {props.superheroname}</h2>
            <h2>Age: {props.age}</h2>
            <h2>This is from props.children: {props.children}</h2>
        </>
    );
};

export default Header;