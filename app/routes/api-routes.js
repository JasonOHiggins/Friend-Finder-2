// var friends = require("../data/friends.js");

// function userDiff(a,b) {
//   'use strict';

//   return a.scores.reduce((acc, curr, idx) => {
//     return acc + Math.abs(curr - b.scores[idx]);
//   }, 0);
// }

// module.exports = function(app) { ;
//   "use strict";

//   app.get("/api/friends", function(req, res) {
//     res.json(friends);
//   });

//   app.post("/api/friends", function (req, res) {
//     res.send(
//       friends[
//       friends.map((friend, i) => {
//         return {
//           'diff': userDiff(req.body, friend),
//           'index': i
//         };
//       }).sort((a, b) => a.diff - b.diff)[0].index
//       ]
//     );
//   });
// };



var friends = require('../data/friends.js');

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {

        var newFriend = req.body;

        var bestMatch = {};

        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] == "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;
            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        var bestMatchIndex = 0;

        var bestMatchDifference = 40;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                var differenceOneScore = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                totalDifference += differenceOneScore;
            }

            if (totalDifference < bestMatchDifference) {
                bestMatchIndex = i;
                bestMatchDifference = totalDifference;
            }
        }

        bestMatch = friends[bestMatchIndex];

        friends.push(newFriend);

        res.json(bestMatch);
    });

};