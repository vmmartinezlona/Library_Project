var express = require('express');
var router = express.Router();
var bookManager = require('../controllers/bookManager');

/* GET home page. */
router.get('/', bookManager.findAll);

router.get('/book/:id', bookManager.findById);
router.put('/book/:id', bookManager.updateBook);
router.delete('/book/:id', bookManager.deleteBook);

module.exports = router;
