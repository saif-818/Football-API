import React from 'react';
import { useQuery, gql } from '@apollo/client';


const LandingPage = ({query}) => {

const getTeamInfo = gql`
    query ($teamName: String!){
        teams (teamName: $teamName) {
            title
            rankings
            thumbnail
            games{
                video_highlights{
                   thumbnail
                   link
                   duration
                }
            }
        }
    }
`;
    const { loading, error, data } = useQuery(getTeamInfo,{variables:{teamName: query}});
    {console.log(data)}
    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :(</p>;
    const gameArray = data.teams.games;
    let thmbnl;
    let linktag;
    gameArray.some((key) => {
        if(key?.video_highlights){
           thmbnl = key.video_highlights.thumbnail;
           linktag = key.video_highlights.link;
        }
    })
    
  return (
    <div>

        <h1>{data.teams.title}</h1>
        <h3>{data.teams.rankings}</h3>
        <img src={data.teams.thumbnail}></img>
        <h1>Highlights of previous matches</h1>
        {console.log(thmbnl)}
        <a href={linktag}><img src={thmbnl}></img></a>
        
    </div>
  )
}

export default LandingPage