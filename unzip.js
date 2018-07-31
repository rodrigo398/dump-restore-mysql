var smartZip = require("smart-zip");
var path = "C:\\temp\\";

// Unzip the files
smartZip.unzip(path + "myzipfile.zip", path + "app1", function(error) {
    if (error) {
        throw error;
    }
    console.log('File unziped.');
});