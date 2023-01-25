const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const fileUpload = require('express-fileupload');

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

const player = require('./src/routes/playerRouter')
const map = require('./src/routes/mapRouter')
const admin = require('./src/routes/adminRouter')


app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));
app.use(fileUpload({}));




app.use('/player', player);
app.use('/map', map);
app.use('/admin', admin);






app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
