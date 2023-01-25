const express = require('express');
const router = express.Router();
const pool = require('../db.js')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [rows] = await pool.query('SELECT * FROM users')
  res.json(rows)
});

router.get('/ping', async function(req, res, next) {
  const [result] = await pool.query('SELECT "hello world" as RESULT')
  //console.log(result[0])
  res.json(result[0]);
});

router.get('/create', async function(req, res, next) {
  const result = await pool.query('INSERT INTO users(name) VALUES ("Don Gato")')
  //console.log(result[0])
  res.json(result);
});

module.exports = router;
