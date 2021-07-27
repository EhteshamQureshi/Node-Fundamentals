var url = "http://logger.io/log/";

function log(message) {
    // Send http request
    console.log("I am exported");
    console.log(message);
}
// to make this above function visible outside this module for app.js module we will need to make it publid

// using module export property
// module.exports.log = log;
//Here above the o bject is exported but if we don't need to export object we can jsut export the specific function like below

// module.exports.endPoint = url; // we can also give new name while exporting the variables like endPoint for url
// we don't need to provide implementation detial like we are doing with varilable above in the url so keep url private

// Now exporitng and using a single function
module.exports = log;