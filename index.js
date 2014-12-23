var Twitter = require('node-twitter');

var twecrets = require('./secrets.js');

// Authorize a stream client
var twitterStreamClient = new Twitter.StreamClient(
  twecrets.consumerKey,
  twecrets.consumerSecret,
  twecrets.token,
  twecrets.tokenSecret
);

// Start streaming anything containing these strings
twitterStreamClient.start(['christmas']);

// When we get something
twitterStreamClient.on('tweet', function(tweet) {
  var thisTweet = tweet.text;
  console.log(thisTweet);
});
