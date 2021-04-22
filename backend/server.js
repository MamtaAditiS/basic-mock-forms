var express = require('express'),
   app = express(),
   port = 8000,
   mongoose = require('mongoose'),
   User = require('./api/models/User'), //created model loading here
   bodyParser = require('body-parser'),
   cookieParser = require('cookie-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongo "mongodb+srv://cluster0.7fzqg.mongodb.net/myFirstDatabase" --username mamta', { useNewUrlParser: true });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

var routes = require('./api/routes/userListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Userlist RESTful API server started on: ' + port);