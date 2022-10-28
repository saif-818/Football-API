import React,{useState} from 'react';
import './REST_API/Football.css';
import LandingPage from './LandingPage';
import Score from './Score'
let teamName = null;
const Team = () => {
    const [resources,setResources] = useState('');
    const [flag,setFlag] = useState(false);
  
    const handleChange = (event) => {
        setResources(event.target.value);
    }
    const clickSubmit = () => {
        teamName = resources;
        setFlag(true);
        console.log(teamName);
    }
    

  return (
    <div>
        <input className='search_bar' type='text' label="Search" value={resources} onChange={handleChange}/> 
        <br/>
        <button className='submit_button' onClick={clickSubmit}> Submit </button>
        {flag ? <LandingPage query={teamName}/> : null}
        {flag ? <Score query={teamName}/> : null}
    </div>
  )
}

export default Team