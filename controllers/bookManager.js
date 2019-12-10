var book = require('../models/Book.js');

//GET ALL
exports.findAll = function(req, res) {
    book.find(function(error, bookList) {
    if(error) { return res.status(500).send(error.message); }
    // Layout is the name of the view thath render the inf
    return res.render('index', {
      bookList: bookList
    });
    return res.status(200).jsonp(bookList);
  });
};

//GET
exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Book: ' + id);
  book.findById(req.params.id, function(error, found) {
    if(error) { return res.status(500).send(console.error.message); }
    return res.render('edit_book', {
      book: found
    });
    return res.status(200).json(found);
  });
};

//PUT
exports.updateBook = function(req, res) {
  var id = req.params.book_id;
  book.findById(id, function(error, selectedBook) {
    if(error) { return res.status(500).send(console.error.message); }
    //updateinfo
    selectedBook.Title = req.body.title;
    selectedBook.Descripton = req.body.description;
    selectedBook.ISBN = req.body.isbn;
    selectedBook.Author = req.body.author;
    //save the book
    selectedBook.save(function(error) {
      if(error) { return res.status(500).send(console.error.message); }
      book.find(function(error, bookList) {
        if(error) { return res.status(500).send(error.message); }
        return res.render('index', {
            bookList: bookList
        });
        return res.status(200).jsonp(bookList);
      });
    });
  });
};

//POST
exports.addBook = function(req, res) {
  console.log(req.body)
  //Create a new instane of the book model
  var newBook = new book({
    //bookId = req.body.bookId,
    Title: req.body.title,
    Descripton: req.body.description,
    ISBN: req.body.isbn,
    Author: req.body.author
  });

  //Save the book and heck for errors
  newBook.save(function (error) {
    if(error) { return res.status(500).send(error.message); }
    book.find(function(error, bookList) {
      if(error) { return res.status(500).send(error.message); }
      return res.render('index', {
        bookList: bookList
      });
      return res.status(200).jsonp(bookList);
    });
  });
};

//DELETE
exports.deleteBook = function(req, res) {
  book.remove({ _id: req.params.book_id }, function(error, selectedBook) {
      if(error) { return res.status(500).send(error.message); }
      book.find(function(error, bookList) {
        if(error) { return res.status(500).send(error.message); }
        return res.render('index', {
          book: bookList
        });
        return res.status(200).jsonp(bookList);
      });
    });
};
