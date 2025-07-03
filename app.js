const bodyParser = require("body-parser");
const express = require("express");
const myTask = require("./routes/task.route");
const userAuth = require("./routes/userAuth.route");
const app = express();
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const sessionStore = require("./utils/session");
const session = require("express-session");
const mysqlSession = require("express-mysql-session")(session);

const mySession = new mysqlSession(sessionStore);

app.use(
  session({
    store:mySession,//now all session will stored in sessionstore
    secret: "itsecretmessage", //Sec Key
    resave: false,
    saveUninitialized: false, //force save session even if is not initalized
    //now session can be initalised
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", myTask);
app.use("/", userAuth);

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
