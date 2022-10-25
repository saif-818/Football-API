import React, {useState} from 'react';
import update from './apis/football-api.js';
import './Football.css';
import Homepage from './Homepage';

const Football = () => {
    const [resources,setResources] = useState({});
    const [team,setTeam] = useState({});

    const handleChange = (event) => {
        let updatedRes = {...resources};
        updatedRes = event.target.value;
        setResources(updatedRes);
    }
    const clickSubmit = () => {
       
        update(resources).then((data) => {
           console.log(data);
           let updatedApi = data;
           setTeam(updatedApi);
        })
    }
    

    return (
       <>
           <input className='search_bar' type='text' label="Search" value={resources} onChange={handleChange}/> 
           <br/>
           <input className='submit_button' type='submit' onClick={clickSubmit}/>
           <Homepage data={team}/>
       </>
    );
};
export default Football;