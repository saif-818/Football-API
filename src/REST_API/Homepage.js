import React,{useState,useEffect} from 'react';


const Homepage = ({data}) => {
    // let match ;
    // function isEmptyObject(value) {
    //     return Object.keys(value).length === 0 && value.constructor === Object;
    // }
    // {isEmptyObject(data) ? match = data.games : match = []} 
    // console.log(data);
    let match = data.games;

  return (
    <div>
        <h1>{data.title}</h1>
        <img alt={data.title} src={data.thumbnail} />

        {match.map((key,index) => 
              <h1 key={index}>{key.tournament}</h1>
        )}
        
    </div>
  )
}

export default Homepage;