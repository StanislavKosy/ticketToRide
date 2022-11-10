var express = require('express');
var router = express.Router();

router.post('/upload', function (req, res) {
  req.files.image.mv('public/images/'+req.files.image.name);
    console.log(req.files.image);
    res.render('admin/main');
})

router.get('/configure/:name', function(req, res) {
  console.log(req.params.name);
  // типо взять из бд эту карту и отрисовать
  // сейчас по дефолту будет city.jpg
  res.render("admin/configure-map.hbs")
})

router.get('/all', function (req, res) {
  var maps = ["map1", "map2", "map3"];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(maps));
})


module.exports = router;
