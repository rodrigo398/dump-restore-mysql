var exec = require('child_process').exec;
var fs = require('fs');

var cmd = "mysql -h xxx.xx.xx.xx -u contactos --password=mypassw2 -D mydb < C:\\temp\\unzip\\home\\my_table.sql";

var cmd2 = "mysql -h xxx.xx.xx.xx -u contactos --password=mypassw2 -D mydb < C:\\temp\\unzip\\home\\my_table2.sql";

exec(cmd, function(error, stdout, stderr) {
    console.log(stderr);
    console.log(error);
    console.log(stdout); // command output is in stdout

});


exec(cmd2, function(error, stdout, stderr) {
    console.log(stderr);
    console.log(error);
    console.log(stdout); // command output is in stdout

});