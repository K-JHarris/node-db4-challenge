//use express
const express = require("express");
const server = express();
server.use(express.json());
//use my middleware
server.use(logger);
//use my routes
const RecipeRouter = require("./routes/recipeRouter");
server.use("/recipes/", RecipeRouter);

//nice confirmation message that this is actually running
server.get("/", (req, res) => {
  res.send(`
    I bet you thought I wouldn't work.
  `);
});

//custom middleware
function logger(req, res, next) {
  console.log(
    `Method: ${req.method}, url: ${
      req.url
    }, timestamp: [${new Date().toISOString()}]`
  );
  next();
}

module.exports = server;
