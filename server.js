const

    SERVER_PORT = 3000,

    request = require('request'),
    express = require('express'),
    exec = require('child_process').exec,
    
    { token, accountId } = require('./settings.json'),

    // Create a webserver.
    app = express()
;

app.get('/steamtime', function(httpRequest, httpResponse) {
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${token}&steamid=${accountId}}&format=json`;
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamHttpBody);
    });
});

app.use(express.static(__dirname + '/www'));

app.listen(SERVER_PORT, function() {
    console.log('listening');
});
