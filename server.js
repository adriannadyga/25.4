var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/userform', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.json(response);
})

var server = app.listen(3000, 'localhost', () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});