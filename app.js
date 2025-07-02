const bodyParser = require("body-parser");
const express = require("express");
const myTask = require("./routes/task.route");
const app = express();
const ejs = require('ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/',myTask);


app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
