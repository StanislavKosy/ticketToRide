const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const fileUpload = require('express-fileupload');

const player = require('./src/routes/playerRouter')
const map = require('./src/routes/mapRouter')
const admin = require('./src/routes/adminRouter')


app.set("view engine", "hbs");

//app.use('/static', express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(fileUpload({}));

app.use('/player', player);
app.use('/map', map);
app.use('/admin', admin);

//const routes = require('');
//app.use('/', routes);






app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
