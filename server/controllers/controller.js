const search = require('../api.js');
let api_data;

// const params = {
//     q: "manchester united",
//     location: "Austin, TX"
// };

const callback = (data) => {
    // console.log(data["sports_results"]);
    api_data = data["sports_results"];
};
  
const showData = (req,res) => {
    try 
    {
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