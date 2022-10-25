const SerpApi = require('google-search-results-nodejs')
const key = 'ff7ffc5b6a5d7661608996d8cac97ead175d5b7cc3091d58d801bc3e30313d72'
const search = new SerpApi.GoogleSearch(key)

// search.json({
//  q: "Coffee", 
//  location: "Austin, TX"
// }, (result) => {
//   console.log(result)
// })

module.exports = search;