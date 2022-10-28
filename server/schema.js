const expressGraphQL = require('express-graphql');
const search = require('./api.js');
const axios = require('axios');
const API_URL = 'http://localhost:8000/';

const KEY = 'ff7ffc5b6a5d7661608996d8cac97ead175d5b7cc3091d58d801bc3e30313d72';

const instance = axios.create({
      baseURL: API_URL,
      params: {
          engine: 'google',
          api_key: KEY,
          location: "Mumbai, Maharashtra, India",
      }
});
const fetchTeam = async(teamTitle) => {
    const res = await instance.get(`https://serpapi.com/search.json?engine=google&q=${teamTitle}/`);
    console.log(res.data.sports_results);
    return res.data.sports_results;
}

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

// GraphQL Schema Implementation

const GameTeamType = new GraphQLObjectType({
    name: 'game_team',
    description: 'Info about matches played and to be played',
    fields: () => ({
        name: { type: (GraphQLString) },
        score: { type: (GraphQLString) },
        thumbnail: { type: (GraphQLString) },
    })
})
const HighlightsType = new GraphQLObjectType({
    name: 'video_highlights',
    description: 'Info about highlight of matches',
    fields: () => ({
        link: { type: GraphQLNonNull(GraphQLString) },
        duration: { type: GraphQLNonNull(GraphQLString) },
        thumbnail: { type: GraphQLNonNull(GraphQLString) }, 
    })
})
const GameType = new GraphQLObjectType({
    name: 'Game',
    description: 'Entire info about the games',
    fields: () => ({
        tournament: { type: GraphQLNonNull(GraphQLString) },
        stadium: { type: GraphQLNonNull(GraphQLString) },
        stage: { type: (GraphQLString) },
        status: { type: (GraphQLString)},
        date: { type: GraphQLNonNull(GraphQLString) },
        time: { type: (GraphQLString)},
        video_highlights: { type: (HighlightsType) },
        teams: { type: GraphQLNonNull(new GraphQLList(GameTeamType)) },
    })
})
const GameSpotlightType = new GraphQLObjectType({
    name: 'GameSpotlight',
    description: 'info about particular game',
    fields: () => ({
        league: { type: GraphQLNonNull(GraphQLString) },
        stadium: { type: GraphQLNonNull(GraphQLString) },
        stage: { type: (GraphQLString) },
        date: { type: GraphQLNonNull(GraphQLString) },
        video_highlights: { type: (HighlightsType) },
        teams: { type: GraphQLNonNull(new GraphQLList(GameTeamType)) },
    })
})

const TeamType = new GraphQLObjectType({
    name: 'Team',
    description: 'This represents the info about the team',
    fields: () => ({
      title: { type: GraphQLNonNull(GraphQLString) },
      rankings: { type: GraphQLNonNull(GraphQLString) },
      thumbnail: { type: GraphQLNonNull(GraphQLString) },
      games: { type: GraphQLNonNull(new GraphQLList(GameType))},
      game_spotlight: { type: GraphQLNonNull(GameSpotlightType)}
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'query',
    description: 'Root Query',
    fields: () => ({
    
      teams : {
        type: TeamType,
        description: 'Getting info about team',
        args: { teamName: {type: GraphQLString} },
        resolve: (root,args) => {
            
            return fetchTeam(args.teamName);
        } 
      },
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})

module.exports = schema;