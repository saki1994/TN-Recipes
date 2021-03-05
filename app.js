const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");

});

app.get("/about", (req, res) => {
  res.render("about");

});



app.listen(port, () =>{
  console.log("Server is open in port 3000.")
})
