import React from "react";

const ResultList = (props) => {
    return (
        <>
            <ul>
                {props.results.map(item => (
                    <li key={item.id}>
                        <img alt={item.title} src={item.images.original.url}></img>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ResultList;