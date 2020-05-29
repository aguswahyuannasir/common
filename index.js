var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 8000,
    bodyParser  = require('body-parser'),
    response    = require('./res');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
   
    try {
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        const user = { username, password };

        if (user.username == 'admin' && user.password == 'admin') {
            next();
        }else{
            response.unauthorized("Invalid Authentication Credentials", res);
        }

    } catch (error) {
        response.unauthorized("Invalid Authentication Credentials", res);
    }
   
   
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
    routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);

