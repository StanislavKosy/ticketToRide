var express = require('express');
var router = express.Router();

router.post('/upload', function (req, res) {
  req.files.image.mv('public/images/'+req.files.image.name);
  console.log(req.files.image);
})

router.get('/configure', function (req, res) {
  res.render("admin/configure-map.hbs")
})


module.exports = router;
