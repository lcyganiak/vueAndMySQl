const express = require('express');
const Book = require('../model/author');

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
  // delete book
  router.delete('/book/:id', (req, res) => {
    Book.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.send(' Book Delete' + req.body.id);
      })
      .catch(err => {
        res.send('Error : ' + err);
      });
  });

// update book

router.put('/book/:id', (req, res) => {
  if (!req.body.title) {
    res.status(400);
    res.json({
      error: 'Bad Data'
    });
  } else {
    Book.update(
      { title: req.body.title, description: req.body.description },
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task Update');
      })
      .error(err => res.send('Error : ' + err));
  }
});
module.exports = router;
