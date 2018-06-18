const express = require('express');
const models = require('../db/models');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* POST new user */
router.post('/add-user', (req, res) => {
  let data = new models.User(req.body);
  console.log(data);
  data.save((err, user) => {
    if (err) {
      res.json(err.toString());
    } else {
      res.json(user);
    }
  })
});

module.exports = router;
