const express = require('express');
const Book = require('../models');

var router = express.Router();

// GET All Books

router.get('/books', (req, res) => {
  Book.findAll()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.send('error : ' + err + ' tu wywala');
    });
});

// Add book
router.post('/addbook', (req, res) => {
  if (!req.body.title) {
    res.status(400);
    res.json({
      error: 'Bad Data'
    });
  } else {
    Book.create(req.body)
      .then(() => {
        res.send('Book Add');
      })
      .catch(err => {
        res.send('erorr : ' + err);
      });
  }
}),
  (module.exports = router);
