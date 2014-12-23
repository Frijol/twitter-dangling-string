twitter-dangling-string
=======================

A recreation of the ubiquitous computing [Dangling String example](http://www.ubiq.com/weiser/calmtech/calmtech.htm), for a Twitter search stream.

Basically, bring internet traffic into the physical world by dangling a string from a motor, and moving the motor based on the traffic it receives.

## Materials

* [Tessel](//tessel.io)
* [Servo Module](//tessel.io/modules#module-servo)
* Continuous rotation servo
* String

## Instructions

1. Tie the sting onto the head of the servo.
1. Plug the servo into position 1 on the Servo Module. Plug in the Servo Module to Port A on the Tessel, the power to the servo module, and the Tessel to your computer.
1. Connect Tessel to wifi (`tessel wifi -n network -p password`).
1. Clone this repo and `npm install` to install dependencies.
1. Create a secrets.js file that contains your Twitter secrets.
1. In `index.js`, set your search terms for the Twitter stream.
1. Find some way to mount the servo so that the string dangles down from the servo, unobstructed.
1. `tessel run index.js` to run.
