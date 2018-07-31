const password = "mypass1";
const ppk = ".\\my_key_ppk_test.ppk";

var exec = require('child_process').execSync;
var exec2 = require('child_process').execSync;
var fs = require('fs');
var smartZip = require("smart-zip");
var pathUnzip = "C:\\temp\\";

var cmd = "pscp -pw pass -P 60 -i my_key_ppk_test.ppk user@host:/home/ediciones/zip.zip C:\\temp\\";

var dump1 = "mysql -h xxx.xx.xx.xx -u user --password=mypass -D mydb < C:\\temp\\unzip\\home\\tabla1.sql";

var dump2 = "mysql -h xxx.xx.xx.xx -u user --password=mypass -D mydb < C:\\temp\\unzip\\home\\tabla2.sql";

var dump3 = "mysql -h xxx.xx.xx.xx -u user --password=mypass -D mydb < C:\\temp\\unzip\\home\\tabla3.sql";

console.log(cmd);

exec(cmd, function(error, stdout, stderr) {
    console.log(stderr);
    console.log(error);
    console.log(stdout); // command output is in stdout



});


smartZip.unzip(pathUnzip + "zip.zip", pathUnzip + "unzip", function(error) {
    if (error) {
        throw error;
        console.log('ERROR');
    }

    console.log('File unziped.');

    exec2(dump1, function(error, stdout, stderr) {
        console.log(stderr);
        console.log(error);
        console.log(stdout); // command output is in stdout

    });

    console.log('FIN Primer Dump');

    exec(dump2, function(error, stdout, stderr) {
        console.log(stderr);
        console.log(error);
        console.log(stdout); // command output is in stdout
    });

    console.log('FIN Segundo Dump.');

    exec(dump3, function(error, stdout, stderr) {
        console.log(stderr);
        console.log(error);
        console.log(stdout); // command output is in stdout
    });

    console.log('FIN Tercer Dump.');


});









/*



*/