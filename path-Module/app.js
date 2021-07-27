const path = require('path'); //Loading built in module 
// For loading file we will need to give path ../ ,/ ,//


// using parse method
var pathObj=path.parse(__filename);
 console.log(pathObj);
