var fs = require('fs');
var buf = fs.readFile(process.argv[2],'utf8', function(err, data) {
        if (!err) {
        var str = data.toString();
        var strArray = str.split('\n');
        console.log(strArray.length - 1);
    }
});