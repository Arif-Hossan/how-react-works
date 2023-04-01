import React, { useEffect,useState } from 'react';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const increaseSteps = () =>{
        const newSteps = steps + 1;
        setSteps(newSteps);
        console.log(steps);
    }
    useEffect(()=>{
        console.log(steps);
    },[steps])
    return (
        <div>
            <h2>This is my smart watch</h2>
            <h6>My current steps :{steps}</h6>
            <button onClick={increaseSteps}> De Dour</button>
        </div>
    );
};

export default Watch;