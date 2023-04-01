import React, { useEffect,useState } from 'react';
import Display from '../Display/Display';
import Dial from '../../Dial/Dial';
// statefull component
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
        <div style={{border:"2px dashed purple" ,margin:"5px"}}>
            <h2>This is my smart watch</h2>
            <h6>My current steps :{steps}</h6>
            <button onClick={increaseSteps}> De Dour</button>
            <Display name="Garmin" steps={steps}></Display>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;