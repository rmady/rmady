/**
 * RMady website index.
 * 
 * @author  Rodrigo Mady @rmady
 * @project rmady.com
 */

const 
    express          = require('express'),
    bodyParser       = require('body-parser'), 
    path             = require('path'),
    routes           = require(path.join(__dirname, "/app/routes")),
    globalizeExpress = require('globalize-express'),
    cookieParser     = require('cookie-parser'),
	config           = require('./config');


const port = 3000;
const app  = express();

app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "pug");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended' : false }));
app.use(bodyParser.json());
app.use(cookieParser());
// Add globalizeExpress as a middleware to your express app
app.use(globalizeExpress(config));
app.use(routes);

module.exports = app.listen(port);
console.log(`Server is high and running at port ${port}`);
