const fetch = require('node-fetch');
const searchTerms = require("../data/search-terms");

// let term = "how do i know when i ";
// var termRegexp = new RegExp(term, "g");
//
// fetch(`http://google.com/complete/search?client=chrome&q=${term}`)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(json) {
//     const suggestions = json[1];
//     const matchingSuggestions = suggestions
//       .filter(suggestion => suggestion.match(termRegexp));

//     console.log("\ncleaned rsult is :\n", matchingSuggestions)

//     // searchTerms.forEach((searchTerm, index) => {
//     //   console.log("\nSearch terms: \nare: ", searchTerm.term, index);
//     // })
//   });

module.exports = function(term) {
  var termRegexp = new RegExp(term, "g");

  fetch(`http://google.com/complete/search?client=chrome&q=${term}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const suggestions = json[1];
      const matchingSuggestions = suggestions
        .filter(suggestion => suggestion.match(termRegexp));

      console.log("\ncleaned rsult is :\n", matchingSuggestions)

      // searchTerms.forEach((searchTerm, index) => {
      //   console.log("\nSearch terms: \nare: ", searchTerm.term, index);
      // })
    });
}
