const bodyParser = require("body-parser");
const express = require("express");
const myTask = require("./routes/task.route");
const userAuth = require("./routes/userAuth.route")
const app = express();
const ejs = require('ejs');
const cookieParser = require("cookie-parser");

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/',myTask);
app.use('/',userAuth)

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
