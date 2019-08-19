const express = require("express");
// const db = knex(config.developement);
const router = express.Router();

//C

//R
router.get("/", (req, res) => {
  res.send(`
    Hello from recipes!
  `);
});
//U

//D

module.exports = router;
