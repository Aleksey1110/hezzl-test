const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Info = require('../models/info');

const db = 'mongodb://hezzl:hezzl1@ds247410.mlab.com:47410/hezzl';

// Подключение к базе данных
mongoose.connect(db, {
  useNewUrlParser: true
}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to ${db}`);
  }
});

// Функция проверки токена
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }
  let payload = jwt.verify(token, 'secret');
  if (!payload) {
    return res.status(401).send('Unauthorized request');
  }
  req.userId = payload.subject;
  next();
}

// Index роут
router.get('/', (req, res) => {
  res.send('from api router');
});

// Роут регистрации пользователя
router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err);
    } else {
      let payload = {
        subject: registeredUser._id
      };
      let token = jwt.sign(payload, 'secret');
      res.status(200).send({
        token
      });
    }
  });
});

// Login роут
router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({
    email: userData.email
  }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.status(401).send('Invalid email');
      } else
      if (user.password !== userData.password) {
        res.status(401).send('Invalid password');
      } else {
        let payload = {
          subject: user._id
        };
        let token = jwt.sign(payload, 'secret');
        res.status(200).send({
          token
        });
      }
    }
  });
});

// Роут получения удаленных пользователей
router.get('/view', verifyToken, (req, res) => {
  Info
    .find()
    .exec((err, remoteUser) => {
      if (!remoteUser) {
        res.status(404).send({
          "message": "There are no users in db"
        });
        return;
      } else if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(remoteUser);
      }
    });
});

// Роут регистрации удаленных пользователей
router.post('/view/register', (req, res) => {
  let userData = req.body;
  let user = new Info(userData);
  user.save((err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(user);
    }
  });
});

module.exports = router;
