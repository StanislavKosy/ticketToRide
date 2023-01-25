var express = require('express');
var router = express.Router();

router.post('/upload', function (req, res) {
  req.files.image.mv('public/images/'+req.files.image.name);
    //console.log(req.files.image);
    res.render('admin/main');
})

router.get('/configure/:name', function(req, res) {
  //console.log(req.params.name);
  // типо взять из бд эту карту и отрисовать
  // сейчас по дефолту будет city.jpg
  res.render("admin/configure-map.hbs")
})

router.get('/roads', function(req, res){//просто вернули дороги в json
  fs = require('fs');
  let json = fs.readFileSync('C:/Users/user/Desktop/project/ticketToRide/helloworld.json');
  res.setHeader('Content-Type', 'application/json');
  console.log("/roads" + json);
  res.end(json);
})

router.get('/all', function (req, res) {
  var maps = ["map1", "map2", "map3"];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(maps));
})

router.post('/road', function (req, res) {
  //console.log(req);
  //res.render('/map/configure/map1');
})



router.post('/save_config_road', function (req, res) {// здесь записываем в файл
  console.log("save_config_road");
  fs = require('fs');
  let data = fs.readFileSync('C:/Users/user/Desktop/project/ticketToRide/helloworld.json').toString();
  if (data.length == 0) {
    data = "[";
    fs.writeFile('helloworld.json', JSON.stringify(req.body.road) + "]", function (err) {
      if (err) return console.log(err);
    })
  } else {
    data = data.substring(0, data.length - 1);
    fs.writeFile('helloworld.json', data + "," + JSON.stringify(req.body.road) + "]", function (err) {
      if (err) return console.log(err);
    })
  }
  console.log("save_config_road1111");
  //res.render("admin/configure-map.hbs");
  //fetch('http://localhost:3333/map/configure/1');
  res.redirect('http://localhost:3333/map/configure/1');
})



module.exports = router;
