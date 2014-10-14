var express = require('express');
var app = express();

app.use("/elements", express.static(__dirname + '/elements'));
app.use("/json", express.static(__dirname + '/json'));
app.use("/public", express.static(__dirname + '/public'));
app.use("/bower_components", express.static(__dirname + '/bower_components'));
app.use("/index.html", express.static(__dirname + '/index.html'));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
