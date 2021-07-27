//node has global varialble rather than window Object.
// console.log('Hello via global console method');

// setTimeout()
// clearTimeout();

// setInterval();
// clearInterval();

// var message="I am not accessible to global above methods";
// console.log(module)
// In node every file is a module and dunction, varialble defined in that module are scoped to that file..

// Loading Module
// var logger = require("/logger"); //require('/logger.js'); same as logger,logger.js

// const logger = require("./logger"); 
// logger.log('message');
 
// set to constant so that we can not accidently change the value of the exported values
// for smae folder just use / if going to parent folder use ..  or /subfolder/filename

// Now uisng the exported single function so it is no longer object
const logger = require("./logger"); 
logger('I am single funciton exported');