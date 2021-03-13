const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const pageTitles = ["Tin-Recipes", "Categories", "About Page"]

app.get("/", (req, res) => {

  res.render("home", {
    title: pageTitles[0]
  });

});

app.get("/categories", (req, res) => {
  const homepage = "Categories";

  res.render("categories", {
    title: pageTitles[1]
  });

});

app.get("/about", (req, res) => {
  const homepage = "About Page";

  res.render("about", {
    title: pageTitles[2]
  });


});


app.listen(port, () =>{
  console.log("Server is open in port 3000.")
})
