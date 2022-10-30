var express = require('express');
var router = express.Router();

router.get('/main', function (req, res) {
  res.render("admin/main.hbs")
})
router.get('/load-map', function (req, res) {
  res.render("admin/load-map.hbs")
})

module.exports = router;
