import React,{useState,useEffect} from 'react'

const Homepage = ({data}) => {
    let match ;
    function isEmptyObject(value) {
        return Object.keys(value).length === 0 && value.constructor === Object;
    }
    {isEmptyObject(data) ? match = data.games : match = []} 
    console.log(match);
    // let match = data.games;

  return (
    <div>
        <h1>{data.title}</h1>
        <img alt={data.title} src={data.thumbnail} />

        {match.map((key) => 
              <h1>{key.video_highlights.link}</h1>
        )}
        
    </div>
  )
}

export default Homepage;