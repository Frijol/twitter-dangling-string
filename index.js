// Set up hardware
var tessel = require('tessel');
var servo = require('servo-pca9685').use(tessel.port['A']);

// Set up Twitter stream
var Twitter = require('node-twitter');
var twecrets = require('./secrets.js');
var searchTerms = ['christmas'];

// Authorize a stream client
var twitterStreamClient = new Twitter.StreamClient(
  twecrets.consumerKey,
  twecrets.consumerSecret,
  twecrets.token,
  twecrets.tokenSecret
);

// When the servo is ready
servo.on('ready', function () {
  // Start streaming anything containing these strings
  twitterStreamClient.start(searchTerms);
});

// When we get something
twitterStreamClient.on('tweet', function(tweet) {
  var thisTweet = tweet.text;
  console.log(thisTweet);
  twitch();
});

function twitch () {
  // Move forward a little
  servo.move(1, 0.6);
  setTimeout(function () {
    // Stop
    servo.move(1, 0.5);
  }, 100);
}
