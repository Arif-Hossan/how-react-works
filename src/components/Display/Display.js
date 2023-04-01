import React from 'react';
//stateless or presentational component
const Display = (props) => {
    return (
        <div style={{border:"2px solid green", margin:"5px"}}>
            <h2>Name : {props.name} </h2>
            <p>So far current steps : {props.steps}</p>
        </div>
    );
};

export default Display;