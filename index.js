const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connections");

const signUp = require("./routes/signUp");
const login = require("./routes/login");
const expense = require("./routes/expenseui");
const afterlogin = require("./routes/afterlogin");
const UI = require("./models/expenseui");

const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly, checkAuth} = require("./middlewares/foraccessingafterloginpage");
const app = express();


const homepage = require("./routes/homepage");



const port = 10001;
connectToMongoDB("mongodb+srv://kasaudhanabhaykumar8562:Ram1975@url-shortner.yfje7vq.mongodb.net/").then(() =>
  console.log("MongoDb connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



 
app.use("/",signUp );

app.use("/user",login);
app.use("/user/expense",restrictToLoggedinUserOnly,checkAuth,expense);

app.use("/user/afterloginpage",restrictToLoggedinUserOnly,afterlogin);


app.use("/homepage",homepage);

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});




app.listen(port, () => console.log(`Server Started at PORT:${port}`));
