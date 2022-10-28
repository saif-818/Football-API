import React, {useState} from 'react';
import update from '../apis/football-api.js';
import './Football.css';
import Homepage from './Homepage';

const Football = () => {
    const [resources,setResources] = useState('');
    const [team,setTeam] = useState(null);

    const handleChange = (event) => {
        setResources(event.target.value);
    }
    const clickSubmit = () => {
        // console.log(resources);
        update(resources).then((data) => {
           console.log(data);
        //    let updatedApi = data;
           setTeam(data);
           console.log(team);
        })
    }
    

    return (
       <>
           <input className='search_bar' type='text' label="Search" value={resources} onChange={handleChange}/> 
           <br/>
           <button className='submit_button' onClick={clickSubmit}> Submit </button>
           {team && <Homepage data={team}/>}
       </>
    );
};
export default Football;