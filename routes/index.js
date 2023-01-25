const express = require('express');
const router = express.Router();
const pool = require('../db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', async function(req, res, next) {
  const [result] = await pool.query('SELECT "hello world" as RESULT')
  //console.log(result[0])
  res.json(result[0]);
});

module.exports = router;
