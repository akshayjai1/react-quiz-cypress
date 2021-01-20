import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postAge } from '../slices/age';
import Peoples from './People';
const exercise = ['pushup', 'crunches', 'situps'];
export function Fit() {
    const history = useHistory();
    const [currentExercise, setCurrentExercise] = useState(exercise[0]);
    const exerciseCompleted = (exerciseName: string) => {
        const index = exercise.findIndex(e => e === exerciseName);
        setCurrentExercise(exercise[index + 1]);
    }
    useEffect(() => {
        history.push(`/fit/${currentExercise}`)
    })
    return null;
    // return <Exercise exerciseName={currentExercise} exerciseCompleted={exerciseCompleted} />
}

export function Exercise({
}: { exerciseName: string, exerciseCompleted(exercise: string): void }) {
    const {exerciseName} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
const setD = (event:any)=>{
            // var date = new Date();
            setDOB(event?.target.value);
        }
    // console.log(params);
    if (!exerciseName) return <div>All Complete</div>;
    return <div><div>Need to do {exerciseName}</div>;
        <button onClick={() => {
            const index = exercise.findIndex(e => e === exerciseName);
            history.push(exercise[index + 1])
        }
    }>Mark as complete</button><div><div><input type="text" name="name" value={name} onChange={(event) => { setName(event?.target.value) }} />
            
            <input type="date" name="dateOfBirth" value={dob} onChange={setD} />
        
            <button onClick={() => {
                const date = new Date(dob);
                const dateOfBirth = (date.toLocaleDateString('en-GB') as any)?.replaceAll('/', '-');
                debugger;
                dispatch(postAge({name,dateOfBirth}))
            }}>Post Age</button></div></div><Peoples/></div>   
}
//   // "proxy":"http://backend-for-test-1.herokuapp.com",
