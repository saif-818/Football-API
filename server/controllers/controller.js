const search = require('../api.js');
const axios = require('axios');
let api_data;

const callback = (data) => {
    api_data = data["sports_results"];
};
  
const showData = (req,res) => {
    try 
    {
        console.log(req.body);
        let sq = req.body;
        let query = Object.keys(sq);
        const params = {
            q: query,
            location: "India, Pune"
        };
        search.json(params,callback);
        res.send(api_data);
    } catch (err) {
        res.status(500).send(`This is the error ${err}`);
    }
};

module.exports = showData;