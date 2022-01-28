/**
 * RMady website index.
 * 
 * @author  Rodrigo Mady @rmady
 * @project rmady.com
 */

const 
    express    = require('express'),
    bodyParser = require('body-parser'), 
    path       = require('path'),
    routes     = require(path.join(__dirname, "/app/routes")),
    i18next    = require('i18next');
    config    = require(path.join(__dirname, "/config"));
    Backend    = require('i18next-fs-backend');
    middleware = require('i18next-http-middleware');

const port = 3000;
const app  = express();

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    detection: config,
    fallbackLng: ['en', 'pt'],
    backend: {
      loadPath: './locales/{{lng}}.json'
    }
});

app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "pug");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended' : false }));
app.use(bodyParser.json());
app.use(middleware.handle(i18next));
app.use(routes);

module.exports = app.listen(port);
console.log(`Server is high and running at port ${port}`);
