const express = require('express');
const mysql = require('mysql');

const app = express();
// connectin mysql

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vueprojektlc'
});
db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('MySql  Connect.. ');
  }
});
// create table
app.get('/createbooktable', (req, res) => {
  let sql =
    'CREATE TABLE book (id int AUTO_INCREMENT, title VARCHAR(255),  authot VARCHAR(255), description VARCHAR(255), PRIMARY KEY (id)) ';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Book table cereted ...');
    }
  });
});
// instert post
app.get('/addbook', (req, res) => {
  let book = {
    title: 'Ogniem i mieczem ',
    authot: 'Henryk sienkiewicz',
    description: 'lorem ipsum '
  };
  let sql = 'INSERT INTO book SET ?';
  let query = db.query(sql, book, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(' Post createt');
    }
  });
});
// select book
app.get('/getbook', (req, res) => {
  let sql = 'SELECT * FROM book';
  let query = db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
      res.send(' Post All');
    }
  });
});
// select singiel book
app.get('/getbook/:id', (req, res) => {
  let sql = `SELECT * FROM book WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(' Post ');
    }
  });
});
// update book
app.get('/updatebook/:id', (req, res) => {
  let newTitle = 'Potop';
  let sql = `UPDATE book SET title =' ${newTitle}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(' Update ');
    }
  });
});

// delete post
app.get('/deletebook/:id', (req, res) => {
  let newTitle = 'Potop';
  let sql = `DELETE FROM  book  WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(' Delete ');
    }
  });
});

// Create DB
app.get('/createbd', (req, res) => {
  let sql = 'CREATE DATABASE  vueprojektlc';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send('Database ceated .. ');
    }
  });
});

app.listen('8081', () => {
  console.log('Server run');
});
