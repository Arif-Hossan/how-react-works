import React from 'react';
//stateless or presentational component
const Dial = (props) => {
    return (
        <div style={{border:"1px solid black" ,margin:"5px"}}>
            <h3>This is Dial</h3>
            <p>Steps so far : {props.steps}</p>
        </div>
    );
};

export default Dial;