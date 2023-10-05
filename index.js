// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// set the view engine to ejs
app.set("view engine", "ejs");

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + "/public"));

// set the home page route
app.get("/", function (req, res) {
  // ejs render automatically looks in the views folder
  res.render("index");
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
