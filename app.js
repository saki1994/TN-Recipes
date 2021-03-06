const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const pageTitles = ["TN-Recipes", "Categories", "About Page"]
const qoutes = [
  "Recipes to inspire your inner chef",
  "People who love to cook are always the best people",
  "Our Mission: is to stand for something good and healthy"
]
app.get("/", (req, res) => {

  res.render("home", {
    title: pageTitles[0],
    webQoute: qoutes[0]
  });

});

app.get("/categories", (req, res) => {
  const homepage = "Categories";

  res.render("categories", {
    title: pageTitles[1],
    webQoute: qoutes[1]
  });

});

app.get("/about", (req, res) => {
  const homepage = "About Page";

  res.render("about", {
    title: pageTitles[2],
    webQoute: qoutes[2]
  });

});

app.get("/post", (req, res) => {
  // const homepage = "post";

  res.render("post");

});


app.listen(port, () =>{
  console.log("Server is open in port 3000.")
})
