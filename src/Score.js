import React from "react";
import { useQuery, gql } from '@apollo/client';
import './Score.css';

const Score = ({query}) => {
    const getTeamInfo = gql`
    query ($teamName: String!){
        teams (teamName: $teamName) {
            games{
                teams{
                    name
                    score
                    thumbnail
                }
            }
        }
    }
`;
    const { loading, error, data } = useQuery(getTeamInfo,{variables:{teamName: query}});
    {console.log(data)}
    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :(</p>;
    const scoreArray = data.teams.games;
    let scoreObj1 = {
        team1: null,
        score1: null,
        thmb1: null,
    }
    let scoreObj2 = {
        team2: null,
        score2: null,
        thmb2: null,
    }
    scoreArray.map((key) => {
        let teamArray = key.teams;
        // console.log(teamArray.teams[1]);
        if(teamArray[0]?.score!=null){
            scoreObj1.team1 = teamArray[0].name;
            scoreObj1.score1 = teamArray[0].score;
            scoreObj1.thmb1 = teamArray[0].thumbnail;

            scoreObj2.team2 = teamArray[1].name;
            scoreObj2.score2 = teamArray[1].score;
            scoreObj2.thmb2 = teamArray[1].thumbnail;
        }
    })
    // {console.log(scoreObj1.team1)}
    // {console.log(scoreObj2.team2)}
  return (
    <div>
        <div className="container">
            <div className="container-header">
            </div>
            <div className="container-body">
                <div className="team1">
                    <h3>{scoreObj1.team1}</h3>
                    <img src={scoreObj1.thmb1} alt="team1"></img>
                </div>
                <div className="score-body">
                    <div className="team1-score">{scoreObj1.score1}</div>
                    <div className="score-colon">:</div>
                    <div className="team2-score">{scoreObj1.score1}</div>
                </div>
                <div className="team2">
                    <h3>{scoreObj2.team2}</h3>
                    <img src={scoreObj2.thmb2} alt="team1"></img>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Score;
