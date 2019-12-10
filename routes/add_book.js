var express = require('express');
var router = express.Router();
var bookManager = require('../controllers/bookManager');

/* GET book page. */
router.get('/', function(req, res, next) {
  res.render('add_book');
});

/*POST new book*/
router.post('/', bookManager.addBook);

module.exports = router;
